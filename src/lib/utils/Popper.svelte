<script lang="ts">
  import type { Coords, Middleware, Placement } from "@floating-ui/dom";
  import * as dom from "@floating-ui/dom";
  import Arrow from "./Arrow.svelte";
  import type { PopperProps, TriggeredToggleEvent } from "$lib";

  const TRIGGER_DELAY = 200;

  let { triggeredBy, trigger = "click", placement = "top", offset = 8, arrow = false, yOnly = false, strategy = "absolute", reference, middlewares = [dom.flip(), dom.shift()], onbeforetoggle: _onbeforetoggle, ontoggle: _ontoggle, class: className = "", arrowClass = "", isOpen = $bindable(false), children, ...restProps }: PopperProps = $props();

  let focusable: boolean = true;
  let clickable: boolean = $derived(trigger === "click");
  let hoverable: boolean = $derived(trigger === "hover");

  let popover: HTMLElement | null = null;
  let invoker: HTMLButtonElement | null = null;
  let referenceElement: HTMLElement | null = null;
  let triggerEls: HTMLButtonElement[] = [];
  let arrowParams: { placement: Placement; cords: Partial<Coords>; strategy: "absolute" | "fixed" } = $state({
    placement,
    cords: { x: 0, y: 0 },
    strategy
  });

  const px = (n: number | undefined) => (n ? `${n}px` : "");

  function updatePopoverPosition() {
    if (!invoker || !popover) {
      return;
    }

    const arrowEl: HTMLElement | null = popover.querySelector(".popover-arrow");

    let middleware: Middleware[] = [...middlewares, dom.offset(offset)];
    if (arrowEl) middleware.push(dom.arrow({ element: arrowEl }));

    return dom.computePosition(referenceElement ?? invoker, popover, { placement, middleware, strategy }).then(({ x, y, middlewareData: { arrow }, placement: pl, strategy }) => {
      if (popover) {
        Object.assign(popover.style, { position: strategy, left: yOnly ? "0" : px(x), top: px(y) });

        if (arrow && arrowEl) {
          arrowParams = { placement: pl, cords: { x: arrow.x, y: arrow.y }, strategy };
        }
      }
    });
  }

  let isTriggered: boolean = false;

  async function open_popover(ev: Event) {
    // throttle
    isTriggered = true;
    await new Promise((resolve) => setTimeout(resolve, TRIGGER_DELAY));
    if (!isTriggered) return;

    ev.preventDefault();

    if (ev.target !== invoker && triggerEls.includes(ev.target as HTMLButtonElement)) {
      invoker = ev.target as HTMLButtonElement;
      // if (invoker) invoker.popoverTargetElement = popover;
      popover?.hidePopover(); // invoker changed need to hide old popover
      isOpen = false; // Update isOpen state when popover is hidden
    }

    if (ev.type === "mousedown") {
      popover?.togglePopover();
      // For toggle, we need to check the current state after toggling
      // This will be handled by the ontoggle event
    } else {
      popover?.showPopover();
      isOpen = true; // Update isOpen state when popover is shown
    }
  }

  async function close_popover(ev: Event) {
    isTriggered = false;
    await new Promise((resolve) => setTimeout(resolve, TRIGGER_DELAY));
    if (isTriggered) return;

    // if popover has focus don't close when leaving the invoker
    if (ev?.type === "mouseleave" && popover?.contains(popover.ownerDocument.activeElement)) return;
    if (ev?.type === "focusout" && popover?.contains(popover.ownerDocument.activeElement)) return;

    popover?.hidePopover();
    // Update isOpen state when popover is closed
    isOpen = false;
  }

  let autoUpdateDestroy = () => {};

  function on_before_toggle(ev: ToggleEvent) {
    if (!invoker || !popover) return;

    (ev as TriggeredToggleEvent).trigger = invoker;
    _onbeforetoggle?.(ev as TriggeredToggleEvent);

    // Floating UI instance when it's closed we need to keep a autoUpdate destroy function

    if (ev.newState === "open") {
      autoUpdateDestroy = dom.autoUpdate(referenceElement ?? invoker, popover, updatePopoverPosition);
      popover.ownerDocument.addEventListener("click", closeOnClickOutside);
    } else {
      // When closing the popover, we destroy the autoUpdate instance
      autoUpdateDestroy();
      popover.ownerDocument.removeEventListener("click", closeOnClickOutside);
    }
  }

  function on_toggle(ev: ToggleEvent) {
    if (!invoker) return;

    (ev as TriggeredToggleEvent).trigger = invoker;
    _ontoggle?.(ev as TriggeredToggleEvent);
  }

  function set_triggers(node: HTMLElement) {
    const events: [string, any, boolean][] = [
      ["focusin", open_popover, focusable],
      ["focusout", close_popover, focusable],
      ["mousedown", open_popover, clickable],
      ["mouseenter", open_popover, hoverable],
      ["mouseleave", close_popover, hoverable]
    ];

    if (triggeredBy) triggerEls = [...node.ownerDocument.querySelectorAll<HTMLButtonElement>(triggeredBy)];
    else if (node.previousElementSibling) triggerEls = [node.previousElementSibling as HTMLButtonElement];

    if (!triggerEls.length) {
      console.error("No triggers found.", triggeredBy);
      return;
    }

    if (reference) referenceElement = node.ownerDocument.querySelector<HTMLElement>(reference);
    invoker = triggerEls[0];

    triggerEls.forEach((element: HTMLButtonElement) => {
      if (element.tabIndex < 0) element.tabIndex = 0; // trigger must be focusable
      for (const [name, handler, cond] of events) if (cond) element.addEventListener(name, handler);
    });

    $effect(() => {
      return () => {
        triggerEls.forEach((element: HTMLElement) => {
          for (const [name, handler, cond] of events) if (cond) element.removeEventListener(name, handler);
        });
      };
    });
  }

  /**
   * Close the popper when clicking outside of it.
   * This is necessary to get around a bug in Safari where clicking outside of the open popper does not close it.
   */
  function closeOnClickOutside(event: MouseEvent) {
    if (popover && !event.composedPath().includes(popover) && !triggerEls.some((el) => event.composedPath().includes(el))) {
      close_popover(event);
      // Update isOpen state when clicking outside
      isOpen = false;
    }
  }

  // Watch for isOpen changes to control popover state and update isOpen when state changes
  $effect(() => {
    if (popover) {
      if (isOpen === true) {
        popover.showPopover();
      } else if (isOpen === false) {
        popover.hidePopover();
      }
    }
  });

  // Update isOpen value when popover state changes through other means
  function updateIsOpenState(ev: ToggleEvent) {
    isOpen = ev.newState === "open";
  }
</script>

<div
  popover="manual"
  role="tooltip"
  bind:this={popover}
  use:set_triggers
  class:overflow-visible={true}
  onfocusout={close_popover}
  onmouseleave={hoverable ? close_popover : undefined}
  onmouseenter={hoverable ? open_popover : undefined}
  onbeforetoggle={on_before_toggle}
  ontoggle={(ev) => {
    updateIsOpenState(ev);
    on_toggle(ev);
  }}
  class={className}
  {...restProps}
>
  {@render children()}
  {#if arrow}
    <Arrow {...arrowParams} class={arrowClass} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PopperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1799)
## Props
@prop triggeredBy
@prop trigger = "click"
@prop placement = "top"
@prop offset = 8
@prop arrow = false
@prop yOnly = false
@prop strategy = "absolute"
@prop reference
@prop middlewares = [dom.flip(), dom.shift()]
@prop onbeforetoggle: _onbeforetoggle
@prop ontoggle: _ontoggle
@prop class: className = ""
@prop arrowClass = ""
@prop isOpen = $bindable(undefined)
@prop children
@prop ...restProps
-->
