<script lang="ts">
  import type { ComputePositionReturn, Middleware, Placement, Side } from '@floating-ui/dom';
  import * as dom from '@floating-ui/dom';
  import { onMount, type ComponentProps } from 'svelte';
  import { twJoin } from 'tailwind-merge';
  import Frame from './Frame.svelte';
  import createEventDispatcher from './createEventDispatcher';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    activeContent?: boolean;
    arrow?: boolean;
    offset?: number;
    placement?: Placement;
    trigger?: 'hover' | 'click';
    triggeredBy?: string;
    strategy?: 'absolute' | 'fixed';
    open?: boolean;
    yOnly?: boolean;
  }

  export let activeContent: boolean = false;
  export let arrow: boolean = true;
  export let offset: number = 8;
  export let placement: Placement = 'top';
  export let trigger: 'hover' | 'click' = 'hover';
  export let triggeredBy: string | undefined = undefined;
  export let strategy: 'absolute' | 'fixed' = 'absolute';
  export let open: boolean = false;
  export let yOnly: boolean = false;

  const dispatch = createEventDispatcher();

  let clickable: boolean;
  $: clickable = trigger === 'click';

  $: dispatch('show', triggerEl, open);

  let triggerEl: Element;
  let floatingEl: HTMLElement;
  let arrowEl: HTMLElement | null;
  let contentEl: HTMLElement;
  let triggerEls: HTMLElement[] = [];

  let _blocked: boolean = false; // management of the race condition between focusin and click events
  const block = () => ((_blocked = true), setTimeout(() => (_blocked = false), 250));

  const showHandler = (ev: Event) => {
    if (triggerEl === undefined) console.error('trigger undefined');
    if (triggerEls.includes(ev.target as HTMLElement) && triggerEl !== ev.target) {
      triggerEl = ev.target as HTMLElement;
      block();
    }
    if (clickable && ev.type === 'focusin' && !open) block();
    open = clickable && ev.type === 'click' && !_blocked ? !open : true;
  };

  const hasHover = (el: Element) => el.matches(':hover');
  const hasFocus = (el: Element) => el.contains(document.activeElement);
  const px = (n: number | undefined) => (n != null ? `${n}px` : '');

  const hideHandler = (ev: Event) => {
    if (activeContent) {
      setTimeout(() => {
        const elements = [triggerEl, floatingEl].filter((x) => x);
        if (ev.type === 'mouseleave' && elements.some(hasHover)) return;
        if (ev.type === 'focusout' && elements.some(hasFocus)) return;
        open = false;
      }, 100);
    } else open = false;
  };

  let arrowSide: Side;
  const oppositeSideMap: Record<Side, Side> = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };

  let middlewares: Middleware[];
  $: middlewares = [dom.flip(), dom.shift(), dom.offset(+offset)];

  function updatePosition() {
    const middleware = [...middlewares];

    if (arrowEl) middleware.push(dom.arrow({ element: arrowEl, padding: 10 }));

    dom
      .computePosition(triggerEl, floatingEl, { placement, strategy, middleware })
      .then(({ x, y, middlewareData, placement, strategy }: ComputePositionReturn) => {
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

  function init(node: HTMLElement, _triggerEl: HTMLElement) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(node, _triggerEl, updatePosition);

    return {
      update(_triggerEl: HTMLElement) {
        cleanup();
        cleanup = dom.autoUpdate(node, _triggerEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }

  onMount(() => {
    const events: [string, any, boolean][] = [
      ['focusin', showHandler, true],
      ['focusout', hideHandler, true],
      ['click', showHandler, clickable],
      ['mouseenter', showHandler, !clickable],
      ['mouseleave', hideHandler, !clickable]
    ];

    if (triggeredBy) triggerEls = [...document.querySelectorAll<HTMLElement>(triggeredBy)];
    else
      triggerEls = contentEl.previousElementSibling ? [contentEl.previousElementSibling as HTMLElement] : [];

    if (!triggerEls.length) {
      console.error('No triggers found.');
    }

    triggerEls.forEach((element: HTMLElement) => {
      if (element.tabIndex < 0) element.tabIndex = 0; // trigger must be focusable
      for (const [name, handler, cond] of events) if (cond) element.addEventListener(name, handler);
    });

    triggerEl = triggerEls[0];

    return () => {
      triggerEls.forEach((element: HTMLElement) => {
        if (element) {
          for (const [name, handler] of events) element.removeEventListener(name, handler);
        }
      });
    };
  });

  function optional(pred: boolean, func: (ev: Event) => void) {
    return pred ? func : () => undefined;
  }

  let arrowClass: string;
  $: arrowClass = twJoin(
    'absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit',
    $$props.border && arrowSide === 'bottom' && 'border-b border-r',
    $$props.border && arrowSide === 'top' && 'border-t border-l ',
    $$props.border && arrowSide === 'right' && 'border-t border-r ',
    $$props.border && arrowSide === 'left' && 'border-b border-l '
  );

  function initArrow(node: HTMLElement) {
    arrowEl = node;
    return {
      destroy() {
        arrowEl = null;
      }
    };
  }
</script>

{#if !triggerEl}
  <div bind:this={contentEl} />
{/if}

{#if open && triggerEl}
  <Frame
    use={init}
    options={triggerEl}
    role="tooltip"
    tabindex={activeContent ? -1 : undefined}
    on:focusin={optional(activeContent, showHandler)}
    on:focusout={optional(activeContent, hideHandler)}
    on:mouseenter={optional(activeContent && !clickable, showHandler)}
    on:mouseleave={optional(activeContent && !clickable, hideHandler)}
    {...$$restProps}>
    <slot />
    {#if arrow}<div use:initArrow class={arrowClass} />{/if}
  </Frame>
{/if}

<!--
    @component
    ## Props
    @prop activeContent: boolean = false;
    @prop arrow: boolean = true;
    @prop offset: number = 8;
    @prop placement: Placement = 'top';
    @prop trigger: 'hover' | 'click' = 'hover';
    @prop triggeredBy: string | undefined = undefined;
    @prop strategy: 'absolute' | 'fixed' = 'absolute';
    @prop open: boolean = false;
    @prop yOnly: boolean = false;
  -->
