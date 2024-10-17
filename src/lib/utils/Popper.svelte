<script lang="ts">
  import type { ComputePositionReturn, Middleware, Placement, Side } from '@floating-ui/dom';
  import * as dom from '@floating-ui/dom';
  import { onMount, type ComponentProps, createEventDispatcher } from 'svelte';
  import { twJoin } from 'tailwind-merge';
  import Frame from './Frame.svelte';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    activeContent?: boolean;
    arrow?: boolean;
    offset?: number;
    placement?: Placement;
    trigger?: 'hover' | 'click' | 'focus';
    triggeredBy?: string;
    reference?: string;
    strategy?: 'absolute' | 'fixed';
    open?: boolean;
    yOnly?: boolean;
  }

  export let activeContent: boolean = false;
  export let arrow: boolean = true;
  export let offset: number = 8;
  export let placement: Placement = 'top';
  export let trigger: 'hover' | 'click' | 'focus' = 'hover';
  export let triggeredBy: string | undefined = undefined;
  export let reference: string | undefined = undefined;
  export let strategy: 'absolute' | 'fixed' = 'absolute';
  export let open: boolean = false;
  export let yOnly: boolean = false;
  // extra floating UI middleware list
  export let middlewares: Middleware[] = [dom.flip(), dom.shift()];

  const dispatch = createEventDispatcher();

  let focusable: boolean;
  $: focusable = trigger === 'focus';

  let clickable: boolean;
  $: clickable = trigger === 'click';

  let hoverable: boolean;
  $: hoverable = trigger === 'hover';

  $: dispatch('show', open);
  $: placement && (referenceEl = referenceEl);

  let referenceEl: Element;
  let floatingEl: HTMLElement;
  let arrowEl: HTMLElement | null;
  let contentEl: HTMLElement;
  let triggerEls: HTMLElement[] = [];

  const showHandler = (ev: Event) => {
    if (referenceEl === undefined) console.error('trigger undefined');
    if (!reference && triggerEls.includes(ev.target as HTMLElement) && referenceEl !== ev.target) {
      referenceEl = ev.target as HTMLElement;
      if (open) return; // If the popper is already open after the reference element has changed
    }

    open = ev.type === 'click' ? !open : true;
  };

  const hasHover = (el: Element) => el.matches(':hover');
  const hasFocus = (el: Element) => el.contains(document.activeElement);
  const px = (n: number | undefined) => (n ? `${n}px` : '');

  const hideHandler = (ev: Event) => {
    if (activeContent && hoverable) {
      const elements = [referenceEl, floatingEl, ...triggerEls].filter(Boolean);
      // Add a delay before hiding the floating element to account for hoverable elements. 
      // This ensures that the floating element does not hide immediately when the mouse 
      // moves from the reference element to the floating element.
      setTimeout(() => {
        if (ev.type === 'mouseleave' && !elements.some(hasHover)) {
          open = false;
        }
      }, 100);
    } else {
      open = false;
    }
  };

  let arrowSide: Side;
  const oppositeSideMap: Record<Side, Side> = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };

  $: middleware = [...middlewares, dom.offset(+offset), arrowEl && dom.arrow({ element: arrowEl, padding: 10 })];

  function updatePosition() {
    dom.computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({ x, y, middlewareData, placement, strategy }: ComputePositionReturn) => {
      floatingEl.style.position = strategy;
      floatingEl.style.left = yOnly ? '0' : px(x);
      floatingEl.style.top = px(y);

      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        arrowEl.style.left = px(middlewareData.arrow.x);
        arrowEl.style.top = px(middlewareData.arrow.y);

        arrowSide = oppositeSideMap[placement.split('-')[0] as Side];
        arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$props.border ? 1 : 0));
      }
    });
  }

  function init(node: HTMLElement, _referenceEl: HTMLElement) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);

    return {
      update(_referenceEl: HTMLElement) {
        cleanup();
        cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }

  onMount(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const events: [string, any, boolean][] = [
      ['focusin', showHandler, focusable],
      ['focusout', hideHandler, focusable],
      ['click', showHandler, clickable],
      ['mouseenter', showHandler, hoverable],
      ['mouseleave', hideHandler, hoverable]
    ];

    if (triggeredBy) triggerEls = [...document.querySelectorAll<HTMLElement>(triggeredBy)];
    else triggerEls = contentEl.previousElementSibling ? [contentEl.previousElementSibling as HTMLElement] : [];

    if (!triggerEls.length) {
      console.error('No triggers found.');
    }

    triggerEls.forEach((element: HTMLElement) => {
      if (element.tabIndex < 0) element.tabIndex = 0; // trigger must be focusable
      for (const [name, handler, cond] of events) if (cond) element.addEventListener(name, handler);
    });

    if (reference) {
      referenceEl = document.querySelector(reference) ?? document.body;
      if (referenceEl === document.body) {
        console.error(`Popup reference not found: '${reference}'`);
      } else {
        if (focusable) referenceEl.addEventListener('focusout', hideHandler);
        if (hoverable) referenceEl.addEventListener('mouseleave', hideHandler);
      }
    } else {
      referenceEl = triggerEls[0];
    }

    if (clickable) document.addEventListener('click', closeOnClickOutside);

    return () => {
      // This is onDestroy function
      triggerEls.forEach((element: HTMLElement) => {
        if (element) {
          for (const [name, handler] of events) element.removeEventListener(name, handler);
        }
      });

      if (referenceEl) {
        referenceEl.removeEventListener('focusout', hideHandler);
        referenceEl.removeEventListener('mouseleave', hideHandler);
      }

      document.removeEventListener('click', closeOnClickOutside);
    };
  });

  /**
   * Close the popper when clicking outside of it.
   * This is necessary to get around a bug in Safari where clicking outside of the open popper does not close it.
   */
  function closeOnClickOutside(event: MouseEvent) {
    if (open) {
      if (!event.composedPath().includes(floatingEl) && !triggerEls.some((el) => event.composedPath().includes(el))) {
        hideHandler(event);
      }
    }
  }

  function optional(pred: boolean, func: (ev: Event) => void) {
    return pred ? func : () => undefined;
  }

  let arrowClass: string;
  $: arrowClass = twJoin('absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit', $$props.border && arrowSide === 'bottom' && 'border-b border-e', $$props.border && arrowSide === 'top' && 'border-t border-s ', $$props.border && arrowSide === 'right' && 'border-t border-e ', $$props.border && arrowSide === 'left' && 'border-b border-s ');

  function initArrow(node: HTMLElement) {
    arrowEl = node;
    return {
      destroy() {
        arrowEl = null;
      }
    };
  }
</script>

{#if !referenceEl}
  <div bind:this={contentEl}></div>
{/if}

{#if referenceEl}
  <Frame use={init} options={referenceEl} bind:open role="tooltip" tabindex={activeContent ? -1 : undefined} on:focusin={optional(activeContent && focusable, showHandler)} on:focusout={optional(activeContent && focusable, hideHandler)} on:mouseenter={optional(activeContent && hoverable, showHandler)} on:mouseleave={optional(activeContent && hoverable, hideHandler)} {...$$restProps}>
    <slot></slot>
    {#if arrow}<div use:initArrow class={arrowClass}></div>{/if}
  </Frame>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activeContent: boolean = false;
@prop export let arrow: boolean = true;
@prop export let offset: number = 8;
@prop export let placement: Placement = 'top';
@prop export let trigger: 'hover' | 'click' | 'focus' = 'hover';
@prop export let triggeredBy: string | undefined = undefined;
@prop export let reference: string | undefined = undefined;
@prop export let strategy: 'absolute' | 'fixed' = 'absolute';
@prop export let open: boolean = false;
@prop export let yOnly: boolean = false;
@prop export let middlewares: Middleware[] = [dom.flip(), dom.shift()];
-->
