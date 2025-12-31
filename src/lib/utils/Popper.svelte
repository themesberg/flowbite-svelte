<script lang="ts">
  import type { ParamsType, PopperProps, TriggeredToggleEvent } from "$lib/types";
  import type { Coords, Middleware, Placement } from "@floating-ui/dom";
  import * as dom from "@floating-ui/dom";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { prefersReducedMotion } from "svelte/motion";
  import Arrow from "./Arrow.svelte";
  import { createMutualDebounce } from "./debounce";

  const DEFAULT_TRIGGER_DELAY = 200;
  const DEFAULT_OFFSET = 8;

  let {
    triggeredBy,
    triggerDelay = DEFAULT_TRIGGER_DELAY,
    trigger = "click",
    placement = "top",
    offset = DEFAULT_OFFSET,
    arrow = false,
    yOnly = false,
    strategy = "absolute",
    role = "tooltip",
    reference,
    middlewares = [dom.flip(), dom.shift()],
    class: className = "",
    arrowClass = "",
    isOpen = $bindable(false),
    transitionParams,
    transition = fade,
    onbeforetoggle,
    ontoggle,
    onclose,
    children,
    ...restProps
  }: PopperProps = $props();

  let focusable: boolean = true;
  let clickable: boolean = $derived(trigger === "click");
  let hoverable: boolean = $derived(trigger === "hover");

  let popover: HTMLElement | null = $state(null);
  let invoker: HTMLElement | null = null;
  let referenceElement: HTMLElement | null = null;
  let triggerEls: HTMLElement[] = [];
  let arrowParams = $state<{ placement: Placement; cords: Partial<Coords> }>({ placement: "top", cords: { x: 0, y: 0 } });
  $effect(() => {
    arrowParams = {
      placement,
      cords: { x: 0, y: 0 }
    };
  });

  $effect(() => {
    if (reference && popover) {
      referenceElement = popover.ownerDocument.querySelector<HTMLElement>(reference);
    }
  });

  let arrowEl: HTMLElement | null = $state(null);
  $effect(() => {
    if (popover) {
      arrowEl = popover.querySelector<HTMLElement>(".popover-arrow");
    }
  });

  let middleware: Middleware[] = $derived.by(() => {
    const base = [...middlewares, dom.offset(offset)];
    if (arrowEl) base.push(dom.arrow({ element: arrowEl }));
    return base;
  });

  const paramsDefault = { duration: 100, easing: sineIn };

  // Check if running in browser to avoid SSR issues
  const isBrowser = typeof window !== "undefined";

  // Respect reduced motion preference by setting duration to 0
  const effectiveParams = $derived(isBrowser && prefersReducedMotion.current ? { ...(transitionParams ?? paramsDefault), duration: 0 } : (transitionParams ?? paramsDefault));

  const px = (n: number | undefined) => (n ? `${n}px` : "");

  function updatePopoverPosition() {
    if (!invoker || !popover) {
      return;
    }

    return dom.computePosition(referenceElement ?? invoker, popover, { placement, middleware, strategy }).then(({ x, y, middlewareData: { arrow }, placement: pl, strategy }) => {
      if (popover) {
        Object.assign(popover.style, { position: strategy, left: yOnly ? "0" : px(x), right: "auto", top: px(y) });
        if (arrow && arrowEl) {
          arrowParams = { placement: pl, cords: { x: arrow.x, y: arrow.y } };
        }
      }
    });
  }

  async function _open_popover(ev: Event) {
    ev.preventDefault();

    if (ev.target !== invoker && triggerEls.includes(ev.target as HTMLElement)) {
      invoker = ev.target as HTMLElement;
      if (isOpen) {
        // invoker changed but the popover is open and stays open; pretend as if it toggles
        popover?.dispatchEvent(new ToggleEvent("beforetoggle", { newState: "open", oldState: "open" }));
        await updatePopoverPosition();
        popover?.dispatchEvent(new ToggleEvent("toggle", { newState: "open", oldState: "open" }));
      }
    }

    if (ev.type === "mousedown") {
      isOpen = !isOpen;
    } else {
      isOpen = true;
    }
  }

  async function _close_popover(ev: Event) {
    // For click triggers, don't close on focusout events from inside the popover
    if (trigger === "click" && ev.type === "focusout") {
      const relatedTarget = (ev as FocusEvent).relatedTarget as HTMLElement;

      // If focus is moving to somewhere inside the popover, don't close
      if (popover && relatedTarget && popover.contains(relatedTarget)) {
        return;
      }

      // If focus is moving to nowhere (like when clicking), don't close for click triggers
      if (!relatedTarget) {
        return;
      }
    }

    // if popover has focus don't close when leaving the invoker
    if (ev?.type === "mouseleave" && popover?.contains(popover.ownerDocument.activeElement)) {
      return;
    }
    if (ev?.type === "focusout" && popover?.contains(popover.ownerDocument.activeElement)) {
      return;
    }

    isOpen = false;
  }

  const [open_popover, close_popover] = createMutualDebounce(_open_popover, _close_popover, () => triggerDelay);

  function on_before_toggle(ev: ToggleEvent) {
    if (!invoker || !popover) return;
    const evWithTrigger: TriggeredToggleEvent = Object.assign(ev, { trigger: invoker });
    onbeforetoggle?.(evWithTrigger);
  }

  $effect(() => {
    // Ensure popover is shown/hidden based on isOpen state
    if (popover) {
      if (isOpen) {
        try {
          if (!popover.matches(":popover-open")) {
            popover.showPopover();
          }
        } catch (e) {
          // Ignore errors
        }
      } else {
        try {
          if (popover.matches(":popover-open")) {
            popover.hidePopover();
          }
        } catch (e) {
          // Ignore errors
        }
      }
    }
  });

  $effect(() => {
    // Floating UI instance when it's closed we need to keep a autoUpdate destroy function
    let autoUpdateDestroy: (() => void) | null = null;

    if (isOpen && popover && invoker) {
      autoUpdateDestroy = dom.autoUpdate(referenceElement ?? invoker, popover, updatePopoverPosition);
      // Only add click outside handler for click triggers
      if (clickable) {
        popover.ownerDocument.addEventListener("click", closeOnClickOutside);
      }
      popover.ownerDocument.addEventListener("keydown", closeOnEscape);
    }

    return () => {
      autoUpdateDestroy?.();
      autoUpdateDestroy = null;
      if (clickable && popover) {
        popover.ownerDocument.removeEventListener("click", closeOnClickOutside);
      }
      popover?.ownerDocument.removeEventListener("keydown", closeOnEscape);
    };
  });

  function on_toggle(ev: ToggleEvent) {
    if (!invoker) return;

    // Update isOpen value when popover state changes through other means
    isOpen = ev.newState === "open";

    const evWithTrigger: TriggeredToggleEvent = Object.assign(ev, { trigger: invoker });
    ontoggle?.(evWithTrigger);

    if (ev.newState === "closed") {
      onclose?.(evWithTrigger);
    }
  }

  function set_triggers(node: HTMLElement) {
    const events: [string, (ev: Event) => void, boolean][] = [
      ["focusin", open_popover, focusable],
      ["focusout", close_popover, focusable],
      ["mousedown", open_popover, clickable],
      ["mouseenter", open_popover, hoverable],
      ["mouseleave", close_popover, hoverable]
    ];

    if (triggeredBy) triggerEls = [...node.ownerDocument.querySelectorAll<HTMLElement>(triggeredBy)];
    else if (node.previousElementSibling) triggerEls = [node.previousElementSibling as HTMLElement];
    else if (node.parentElement) triggerEls = [node.parentElement];

    if (!triggerEls.length) {
      console.error("No triggers found.", triggeredBy);
      return;
    }

    invoker = triggerEls[0];

    triggerEls.forEach((element: HTMLElement) => {
      if (element.tabIndex < 0) element.tabIndex = 0; // trigger must be focusable
      for (const [name, handler, cond] of events) if (cond) element.addEventListener(name, handler);
    });

    return () => {
      triggerEls.forEach((element: HTMLElement) => {
        for (const [name, handler, cond] of events) if (cond) element.removeEventListener(name, handler);
      });
    };
  }

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === "Escape") {
      isOpen = false;
      // Return focus to the trigger element when closing with escape
      invoker?.focus();
    }
  }

  function closeOnClickOutside(event: MouseEvent) {
    if (!popover) {
      return;
    }

    const clickPath = event.composedPath();

    const isClickInsidePopover = clickPath.includes(popover);
    const isClickOnTrigger = triggerEls.some((el) => clickPath.includes(el));

    // Only close if click is outside both popover and trigger elements
    if (!isClickInsidePopover && !isClickOnTrigger) {
      close_popover(event);
      isOpen = false;
    }
  }
</script>

<div {@attach set_triggers} hidden></div>

{#if isOpen}
  <div
    popover="manual"
    {role}
    bind:this={popover}
    class:overflow-visible={true}
    onfocusout={close_popover}
    onmouseleave={hoverable ? close_popover : undefined}
    onmouseenter={hoverable ? open_popover : undefined}
    class={clsx(className)}
    transition:transition={effectiveParams as ParamsType}
    onintrostart={() => popover?.showPopover()}
    onbeforetoggle={on_before_toggle}
    ontoggle={on_toggle}
    {...restProps}
  >
    {@render children()}
    {#if arrow}
      <Arrow {...arrowParams} class={arrowClass} />
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PopperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1982)
## Props
@prop triggeredBy
@prop triggerDelay = DEFAULT_TRIGGER_DELAY
@prop trigger = "click"
@prop placement = "top"
@prop offset = DEFAULT_OFFSET
@prop arrow = false
@prop yOnly = false
@prop strategy = "absolute"
@prop role = "tooltip"
@prop reference
@prop middlewares = [dom.flip(), dom.shift()]
@prop class: className = ""
@prop arrowClass = ""
@prop isOpen = $bindable(false)
@prop transitionParams
@prop transition = fade
@prop onbeforetoggle
@prop ontoggle
@prop onclose
@prop children
@prop ...restProps
-->
