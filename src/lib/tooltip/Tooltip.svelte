<script lang="ts">
  import { type TooltipProps as Props, tooltip } from ".";
  import { onDestroy } from "svelte";

  let { children, color = "default", showOn = "hover", arrow = true, offset = 0, triggeredBy, position = "top", class: className, visible = false, reference, ...restProps }: Props = $props();

  let isVisible = $state(visible);

  $effect(() => {
    isVisible = visible;
  });

  let { base, arrowBase } = $derived(tooltip({ color, arrow, position }));

  let tooltipElement: HTMLElement | null = $state(null);
  let triggerElement: HTMLElement | null = null;
  let referenceElement: HTMLElement | null = null;
  let arrowEl: HTMLElement | null = $state(null);

  const showTooltip = () => {
    if (!triggeredBy) return; // Only handle manual show/hide when triggeredBy is present
    isVisible = true;
    setTimeout(() => {
      positionTooltip();
    }, 0);
  };

  const hideTooltip = () => {
    if (!triggeredBy) return; // Only handle manual show/hide when triggeredBy is present
    isVisible = false;
  };

  const toggleTooltip = () => {
    if (!triggeredBy) return; // Only handle manual show/hide when triggeredBy is present
    isVisible = !isVisible;
    if (isVisible) {
      setTimeout(() => {
        positionTooltip();
      }, 0);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (showOn === "click" && isVisible && tooltipElement && triggerElement && !tooltipElement.contains(event.target as Node) && !triggerElement.contains(event.target as Node)) {
      hideTooltip();
    }
  };

  const positionTooltip = () => {
    if (!tooltipElement) return;

    // Get the reference element for positioning
    const targetElement = reference ? document.querySelector(reference) : triggeredBy ? document.querySelector(triggeredBy) : null;

    if (!targetElement) {
      console.warn("Tooltip: No reference element found for positioning");
      return;
    }

    const referenceRect = targetElement.getBoundingClientRect();
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
    // Only set up event listeners if triggeredBy is provided
    if (triggeredBy) {
      triggerElement = document.querySelector(triggeredBy);

      if (triggerElement) {
        if (showOn === "hover") {
          triggerElement.addEventListener("mouseenter", showTooltip);
          triggerElement.addEventListener("mouseleave", hideTooltip);
        } else if (showOn === "click") {
          triggerElement.addEventListener("click", toggleTooltip);
          document.addEventListener("click", handleClickOutside);
        }
      }
    }

    // Always set up positioning when visibility changes
    $effect(() => {
      if (isVisible) {
        setTimeout(() => {
          positionTooltip();
        }, 0);
      }
    });

    const handlePositionUpdate = () => {
      if (isVisible) {
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

{#if isVisible}
  <div role="tooltip" bind:this={tooltipElement} {...restProps} class={`${base({ className })} ${isVisible ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-200`}>
    {@render children()}
    {#if arrow}<div bind:this={arrowEl} class={arrowBase({ arrow, position })}></div>{/if}
  </div>
{/if}
