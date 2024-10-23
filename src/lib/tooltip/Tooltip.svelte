<script lang="ts">
  import { type TooltipProps as Props, tooltip } from ".";
  import { onDestroy } from "svelte";

  let { children, color = "default", showOn = "hover", arrow = true, offset = 0, triggeredBy, position = "top", class: className, visible = false, reference, ...restProps }: Props = $props();

  let { base, arrowBase } = $derived(tooltip({ color, arrow, position }));

  let tooltipElement: HTMLElement | null = $state(null);
  let triggerElement: HTMLElement | null = null;
  let referenceElement: HTMLElement | null = null;
  let arrowEl: HTMLElement | null = $state(null);

  const showTooltip = () => {
    visible = true;
    setTimeout(() => {
      positionTooltip();
    }, 0);
  };

  const hideTooltip = () => {
    visible = false;
  };

  const toggleTooltip = () => {
    visible = !visible;
    if (visible) {
      setTimeout(() => {
        positionTooltip();
      }, 0);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (showOn === "click" && visible && tooltipElement && triggerElement && !tooltipElement.contains(event.target as Node) && !triggerElement.contains(event.target as Node)) {
      hideTooltip();
    }
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
      case "top":
        top = referenceRect.top + scrollY - tooltipRect.height - 10 - offset;
        left = referenceRect.left + scrollX + referenceRect.width / 2 - tooltipRect.width / 2;
        if (arrowRect && offset === 0) {
          arrowTop = tooltipRect.height - 5;
          arrowLeft = tooltipRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case "bottom":
        top = referenceRect.bottom + scrollY + 10 + offset;
        left = referenceRect.left + scrollX + referenceRect.width / 2 - tooltipRect.width / 2;
        if (arrowRect && offset === 0) {
          arrowTop = -arrowRect.height + 9;
          arrowLeft = tooltipRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case "left":
        top = referenceRect.top + scrollY + referenceRect.height / 2 - tooltipRect.height / 2;
        left = referenceRect.left + scrollX - tooltipRect.width - 10 - offset;
        if (arrowRect && offset === 0) {
          arrowTop = tooltipRect.height / 2 - arrowRect.height / 2;
          arrowLeft = tooltipRect.width - 5;
        }
        break;
      case "right":
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
      if (showOn === "hover") {
        triggerElement.addEventListener("mouseenter", showTooltip);
        triggerElement.addEventListener("mouseleave", hideTooltip);
      } else if (showOn === "click") {
        triggerElement.addEventListener("click", toggleTooltip);
        document.addEventListener("click", handleClickOutside);
      }
    }

    const handlePositionUpdate = () => {
      if (visible) {
        positionTooltip();
      }
    };

    window.addEventListener("resize", handlePositionUpdate);
    window.addEventListener("scroll", handlePositionUpdate, true);

    onDestroy(() => {
      if (triggerElement) {
        if (showOn === "hover") {
          triggerElement.removeEventListener("mouseenter", showTooltip);
          triggerElement.removeEventListener("mouseleave", hideTooltip);
        } else if (showOn === "click") {
          triggerElement.removeEventListener("click", toggleTooltip);
          document.removeEventListener("click", handleClickOutside);
        }
      }
      window.removeEventListener("resize", handlePositionUpdate);
      window.removeEventListener("scroll", handlePositionUpdate, true);
    });
  });
</script>

{#if visible}
  <div role="tooltip" bind:this={tooltipElement} {...restProps} class={`${base({ className })} ${visible ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-200`}>
    {@render children()}
    {#if arrow}<div bind:this={arrowEl} class={arrowBase({ arrow, position })}></div>{/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:color: "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "default" | undefined = "default";
@props:arrow: boolean = true;
@props:offset: number = 0;
@props:triggeredBy: string;
@props:position: "top" | "bottom" | "left" | "right" = "top";
@props:class: string;
@props:reference: string;
-->
