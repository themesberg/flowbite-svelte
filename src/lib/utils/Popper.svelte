<script lang="ts">
  import { onMount } from 'svelte';
  import { createPopper, type Rect } from '@popperjs/core';
  import classNames from 'classnames';
  import type { Placement, Instance } from '@popperjs/core';
  import createEventDispatcher from './createEventDispatcher';
  import Frame from './Frame.svelte';

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
  let contentEl: HTMLElement;
  let triggerEls: HTMLElement[] = [];
  let popper: Instance;

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

  // reactivity
  $: popper && popper.setOptions({ placement });

  // typescript typeguards - poper.state.element.reference: Element|HTMLElement|VirtualElement
  const hasHover = (el: object) => (el as Element).matches && (el as Element).matches(':hover');
  const hasFocus = (el: object) =>
    (el as Element).contains && (el as Element).contains(document.activeElement);

  const hideHandler = (ev: Event) => {
    if (activeContent) {
      setTimeout(() => {
        const elements = Object.values(popper?.state.elements ?? {});
        if (ev.type === 'mouseleave' && elements.some(hasHover)) return;
        if (ev.type === 'focusout' && elements.some(hasFocus)) return;
        open = false;
      }, 100);
    } else open = false;
  };

  function init(node: HTMLElement, _triggerEl: HTMLElement) {
    popper = createPopper(_triggerEl, node, {
      placement,
      strategy,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: ({ reference, popper }: { reference: Rect; popper: Rect }) => {
              // for full screen mega menu
              return [yOnly ? popper.width / 2 - reference.width / 2 - reference.x : 0, offset];
            }
          }
        },
        { name: 'eventListeners', enabled: open },
        { name: 'flip', enabled: false }
      ]
    });
    return {
      update(_triggerEl: HTMLElement) {
        popper.state.elements.reference = _triggerEl;
        popper.update();
      },
      destroy() {
        popper.destroy();
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
    return (pred && func) || null;
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
    tabIndex={activeContent ? -1 : undefined}
    on:focusin={optional(activeContent, showHandler)}
    on:focusout={optional(activeContent, hideHandler)}
    on:mouseenter={optional(activeContent && !clickable, showHandler)}
    on:mouseleave={optional(activeContent && !clickable, hideHandler)}
    {...$$restProps}
    class={classNames('z-10 outline-none', $$props.class)}>
    <slot />
    {#if arrow}<div data-popper-arrow class="tooltip-arrow" />{/if}
  </Frame>
{/if}
