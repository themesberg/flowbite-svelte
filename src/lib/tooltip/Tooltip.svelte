<script lang="ts">
  import { type TooltipProps as Props, tooltip } from '.';
  import { onDestroy } from 'svelte';

  let { children, color = 'default', arrow = true, offset = 0, triggeredBy, position = 'top', class: className, reference, ...restProps }: Props = $props();

  let { base, arrowBase } = $derived(tooltip({ color, arrow, position }));

  let tooltipElement: HTMLElement | null = $state(null);
  let triggerElement: HTMLElement | null = null;
  let referenceElement: HTMLElement | null = null;
  let arrowEl: HTMLElement | null = $state(null);
  let visible = $state(false);
  let positioned = $state(false);

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
      case 'bottom':
        top = referenceRect.bottom + scrollY + 10 + offset;
        left = referenceRect.left + scrollX + referenceRect.width / 2 - tooltipRect.width / 2;
        if (arrowRect && offset === 0) {
          arrowTop = -arrowRect.height + 9;
          arrowLeft = tooltipRect.width / 2 - arrowRect.width / 2;
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
      case 'right':
        top = referenceRect.top + scrollY + referenceRect.height / 2 - tooltipRect.height / 2;
        left = referenceRect.right + scrollX + 10 + offset;
        if (arrowRect && offset === 0) {
          arrowTop = tooltipRect.height / 2 - arrowRect.height / 2;
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
      triggerElement.addEventListener('mouseleave', hideTooltip);
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
        triggerElement.removeEventListener('mouseleave', hideTooltip);
      }
      window.removeEventListener('resize', handlePositionUpdate);
      window.removeEventListener('scroll', handlePositionUpdate, true);
    });
  });
</script>

{#if visible}
  <div bind:this={tooltipElement} class={`${base({ className })} ${positioned ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-200`} {...restProps}>
    {@render children()}
    {#if arrow}<div bind:this={arrowEl} class={arrowBase({ arrow, position })}></div>{/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop color = 'default'
@prop arrow = true
@prop offset = 0
@prop triggeredBy
@prop position = 'top'
@prop class: className
@prop reference
@prop ...restProps
-->
