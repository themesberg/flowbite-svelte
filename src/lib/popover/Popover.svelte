<script lang="ts">
  import { type PopoverProps as Props, popover } from '.';
  import { onDestroy } from 'svelte';
  import { type ParamsType } from '$lib/types';
  import { fade } from 'svelte/transition';
  import { linear } from 'svelte/easing';

  let { children, titleSlot, color = 'default', arrow = true, offset = 0, triggeredBy, position = 'top', class: className, reference, transition = fade, params, ...restProps }: Props = $props();

  let { base, title, h3, arrowBase } = $derived(popover({ color, arrow, position }));

  const defaultParams: ParamsType = { duration: 100, easing: linear };

  let tooltipElement: HTMLElement | null = $state(null);
  let triggerElement: HTMLElement | null = null;
  let referenceElement: HTMLElement | null = null;
  let arrowEl: HTMLElement | null = $state(null);
  let visible = $state(false);
  let positioned = $state(false);

  // Change the type to accommodate both browser and Node.js environments
  let hideTimeoutId: ReturnType<typeof setTimeout> | undefined;

  const showTooltip = () => {
    visible = true;
    setTimeout(() => {
      positionTooltip();
      positioned = true;
    }, 0);
  };

  const hideTooltip = () => {
    visible = false;
    positioned = false;
  };

  const onPopoverEnter = () => {
    if (hideTimeoutId !== undefined) {
      clearTimeout(hideTimeoutId);
      hideTimeoutId = undefined;
    }
  };

  // Handle mouse leave on popover
  const onPopoverLeave = () => {
    hideTooltip();
  };

  const onTriggerLeave = () => {
    // Set a timeout to hide the tooltip, allowing time to move to the popover
    hideTimeoutId = setTimeout(hideTooltip, 100);
  };

  const positionTooltip = () => {
    if (!tooltipElement || !triggerElement) return;
    const triggerRect = triggerElement.getBoundingClientRect();
    const referenceRect = reference && referenceElement ? referenceElement.getBoundingClientRect() : triggerRect;
    const tooltipRect = tooltipElement.getBoundingClientRect();
    const arrowRect = arrow && arrowEl ? arrowEl.getBoundingClientRect() : null;

    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    let top, left, arrowTop, arrowLeft;

    switch (position) {
      case 'top':
        top = referenceRect.top + scrollY - tooltipRect.height - 10 - offset;
        left = referenceRect.left + scrollX + referenceRect.width / 2 - tooltipRect.width / 2;
        if (arrowRect && offset === 0) {
          arrowTop = tooltipRect.height - 5;
          arrowLeft = tooltipRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case 'top-start':
        top = referenceRect.top + scrollY - tooltipRect.height - 10 - offset;
        left = referenceRect.left + scrollX;
        if (arrowRect && offset === 0) {
          arrowTop = tooltipRect.height - 5;
          arrowLeft = referenceRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case 'top-end':
        top = referenceRect.top + scrollY - tooltipRect.height - 10 - offset;
        left = referenceRect.right + scrollX - tooltipRect.width;
        if (arrowRect && offset === 0) {
          arrowTop = tooltipRect.height - 5;
          arrowLeft = tooltipRect.width - referenceRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case 'bottom':
        top = referenceRect.bottom + scrollY + 10 + offset;
        left = referenceRect.left + scrollX + referenceRect.width / 2 - tooltipRect.width / 2;
        if (arrowRect && offset === 0) {
          arrowTop = -arrowRect.height + 9;
          arrowLeft = tooltipRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case 'bottom-start':
        top = referenceRect.bottom + scrollY + 10 + offset;
        left = referenceRect.left + scrollX;
        if (arrowRect && offset === 0) {
          arrowTop = -arrowRect.height + 9;
          arrowLeft = referenceRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case 'bottom-end':
        top = referenceRect.bottom + scrollY + 10 + offset;
        left = referenceRect.right + scrollX - tooltipRect.width;
        if (arrowRect && offset === 0) {
          arrowTop = -arrowRect.height + 9;
          arrowLeft = tooltipRect.width - referenceRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case 'left':
        top = referenceRect.top + scrollY + referenceRect.height / 2 - tooltipRect.height / 2;
        left = referenceRect.left + scrollX - tooltipRect.width - 10 - offset;
        if (arrowRect && offset === 0) {
          arrowTop = tooltipRect.height / 2 - arrowRect.height / 2;
          arrowLeft = tooltipRect.width - 5;
        }
        break;
      case 'left-start':
        top = referenceRect.top + scrollY;
        left = referenceRect.left + scrollX - tooltipRect.width - 10 - offset;
        if (arrowRect && offset === 0) {
          arrowTop = arrowRect.height;
          arrowLeft = tooltipRect.width - 5;
        }
        break;
      case 'left-end':
        top = referenceRect.bottom + scrollY - tooltipRect.height;
        left = referenceRect.left + scrollX - tooltipRect.width - 10 - offset;
        if (arrowRect && offset === 0) {
          arrowTop = tooltipRect.height - arrowRect.height * 2;
          arrowLeft = tooltipRect.width - 5;
        }
        break;
      case 'right':
        top = referenceRect.top + scrollY + referenceRect.height / 2 - tooltipRect.height / 2;
        left = referenceRect.right + scrollX + 10 + offset;
        if (arrowRect && offset === 0) {
          arrowTop = tooltipRect.height / 2 - arrowRect.height / 2;
          arrowLeft = -arrowRect.width / 2 + 2;
        }
        break;
      case 'right-start':
        top = referenceRect.top + scrollY;
        left = referenceRect.right + scrollX + 10 + offset;
        if (arrowRect && offset === 0) {
          arrowTop = arrowRect.height;
          arrowLeft = -arrowRect.width / 2 + 2;
        }
        break;
      case 'right-end':
        top = referenceRect.bottom + scrollY - tooltipRect.height;
        left = referenceRect.right + scrollX + 10 + offset;
        if (arrowRect && offset === 0) {
          arrowTop = tooltipRect.height - arrowRect.height * 2;
          arrowLeft = -arrowRect.width / 2 + 2;
        }
        break;
    }

    tooltipElement.style.top = `${top}px`;
    tooltipElement.style.left = `${left}px`;

    if (arrowEl && arrowRect) {
      arrowEl.style.top = `${arrowTop}px`;
      arrowEl.style.left = `${arrowLeft}px`;
    }
  };

  $effect(() => {
    triggerElement = document.querySelector(triggeredBy);
    referenceElement = reference ? document.querySelector(reference) : triggerElement;

    if (triggerElement) {
      triggerElement.addEventListener('mouseenter', showTooltip);
      triggerElement.addEventListener('mouseleave', onTriggerLeave);
    }

    const handlePositionUpdate = () => {
      if (visible) {
        positionTooltip();
      }
    };

    window.addEventListener('resize', handlePositionUpdate);
    window.addEventListener('scroll', handlePositionUpdate, true);

    onDestroy(() => {
      if (triggerElement) {
        triggerElement.removeEventListener('mouseenter', showTooltip);
        triggerElement.removeEventListener('mouseleave', onTriggerLeave);
      }
      window.removeEventListener('resize', handlePositionUpdate);
      window.removeEventListener('scroll', handlePositionUpdate, true);
      if (hideTimeoutId !== undefined) {
        clearTimeout(hideTimeoutId);
      }
    });
  });
</script>

{#if transition && visible}
  <div transition:transition={params || defaultParams} role="tooltip" bind:this={tooltipElement} class={`${base({ className })} ${positioned ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-200`} onmouseenter={onPopoverEnter} onmouseleave={onPopoverLeave} {...restProps}>
    {#if typeof titleSlot === 'string'}
      <div class={title()}>
        <h3 class={h3()}>{titleSlot}</h3>
      </div>
    {:else if titleSlot}
      {@render titleSlot()}
    {/if}
    {@render children()}
    {#if arrow}<div bind:this={arrowEl} class={arrowBase({ arrow, position })}></div>{/if}
  </div>
{:else if visible}
  <div role="tooltip" bind:this={tooltipElement} class={`${base({ className })} ${positioned ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-200`} onmouseenter={onPopoverEnter} onmouseleave={onPopoverLeave} {...restProps}>
    {#if typeof titleSlot === 'string'}
      <div class={title()}>
        <h3 class={h3()}>{titleSlot}</h3>
      </div>
    {:else if titleSlot}
      {@render titleSlot()}
    {/if}
    {@render children()}
    {#if arrow}<div bind:this={arrowEl} class={arrowBase({ arrow, position })}></div>{/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:titleSlot: Snippet | string;
@props:color: PopoverColorType = 'default';
@props:arrow: boolean = true;
@props:offset: number = 0;
@props:triggeredBy: string;
@props:position: 'top' | 'bottom' | 'left' | 'right' | 'right-start' | 'right-end' | 'left-start' | 'left-end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' = 'top';
@props:class: string;
@props:reference: string;
@props:transition: TransitionFunc = fade;
@props:params: ParamsType | undefined;
-->
