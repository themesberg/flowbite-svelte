<script lang="ts" module>
  import type { Snippet } from "svelte";

  export interface TriggeredToggleEvent extends ToggleEvent {
    trigger: HTMLElement;
  }

  export interface PopperProps extends Omit<HTMLAttributes<HTMLDivElement>, "onbeforetoggle" | "ontoggle"> {
    triggeredBy?: string;
    trigger?: "hover" | "click";
    placement?: Placement;
    arrow?: boolean;
    border?: boolean;
    offset?: number;
    yOnly?: boolean; // special case for megamenu - only move on y axis
    strategy?: "absolute" | "fixed";
    reference?: string | undefined;
    middlewares?: Middleware[];
    children: Snippet;

    onbeforetoggle?: (ev: TriggeredToggleEvent) => void;
    ontoggle?: (ev: TriggeredToggleEvent) => void;
  }
</script>

<script lang="ts">
  import type { Coords, Middleware, Placement } from "@floating-ui/dom";
  import * as dom from "@floating-ui/dom";
  import type { HTMLAttributes } from "svelte/elements";
  import Arrow from "./Arrow.svelte";

  const TRIGGER_DELAY = 100;

  let { triggeredBy, trigger = "click", placement = "top", offset = 8, arrow = false, border = true, yOnly = false, strategy = "absolute", reference, middlewares = [dom.flip(), dom.shift()], onbeforetoggle: _onbeforetoggle, ontoggle: _ontoggle, class: className = "", children }: PopperProps = $props();

  let focusable: boolean = true;
  let clickable: boolean = $derived(trigger === "click");
  let hoverable: boolean = $derived(trigger === "hover");

  let popover: HTMLElement | undefined = undefined;
  let invoker: HTMLElement | undefined = undefined;
  let referenceElement: HTMLElement | null = null;
  let triggerEls: HTMLButtonElement[] = [];
  let arrowParams: { placement: Placement; border: boolean; cords: Partial<Coords>; strategy: "absolute" | "fixed" } = $state({
    placement,
    border,
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

        if (arrow && arrowEl instanceof HTMLElement) {
          arrowParams = { placement: pl, border, cords: { x: arrow.x, y: arrow.y }, strategy };
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

    if (ev.target !== invoker && triggerEls.includes(ev.target as HTMLButtonElement)) {
      invoker = ev.target as HTMLButtonElement;
      popover?.hidePopover(); // invoker changed need to hide old popover
    }

    if (ev.type === "pointerdown") popover?.togglePopover();
    else popover?.showPopover();
  }

  async function close_popover(ev: Event) {
    isTriggered = false;
    await new Promise((resolve) => setTimeout(resolve, TRIGGER_DELAY));
    if (isTriggered) return;

    if (ev?.type === "pointerleave" && popover?.contains(document.activeElement)) return;
    if (ev?.type === "focusout" && popover?.contains(document.activeElement)) return;

    popover?.hidePopover();
  }

  function on_before_toggle(ev: ToggleEvent) {
    if (!invoker || !popover) return;

    (ev as TriggeredToggleEvent).trigger = invoker;
    _onbeforetoggle?.(ev as TriggeredToggleEvent);

    // Floating UI instance when it’s closed we need to keep a autoUpdate destroy function
    let autoUpdateDestroy = () => {};

    // console.log(e.oldState, "=>", e.newState);
    if (ev.newState === "open") {
      autoUpdateDestroy = dom.autoUpdate(referenceElement ?? invoker, popover, updatePopoverPosition);
      document.addEventListener("click", closeOnClickOutside);
    } else {
      // When closing the popover, we destroy the autoUpdate instance
      autoUpdateDestroy();
      document.removeEventListener("click", closeOnClickOutside);
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
      ["pointerdown", open_popover, clickable],
      ["pointerenter", open_popover, hoverable],
      ["pointerleave", close_popover, hoverable]
    ];

    if (triggeredBy) triggerEls = [...document.querySelectorAll<HTMLButtonElement>(triggeredBy)];
    else if (node.previousElementSibling) triggerEls = [node.previousElementSibling as HTMLButtonElement];

    if (!triggerEls.length) {
      console.error("No triggers found.");
      return;
    }

    if (reference) referenceElement = document.querySelector<HTMLElement>(reference);
    // invoker = triggerEls[0];

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
    }
  }
</script>

<div popover="manual" bind:this={popover} use:set_triggers class:overflow-visible={arrow} onfocusout={close_popover} onpointerleave={hoverable ? close_popover : undefined} onpointerenter={hoverable ? open_popover : undefined} onbeforetoggle={on_before_toggle} ontoggle={on_toggle} class={className}>
  {@render children()}
  {#if arrow}
    <Arrow {...arrowParams} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: triggeredBy: any;
@props:trigger: any = "click";
@props:placement: any = "top";
@props:offset: any = 8;
@props:arrow: any = false;
@props:border: any = true;
@props:yOnly: any = false;
@props:strategy: any = "absolute";
@props:reference: any;
@props:middlewares: any = [dom.flip();
@props:dom.shift()]: any;
@props:onbeforetoggle: any;
@props:ontoggle: any;
@props:class: string = "";
@props:children: any;
-->
