<script lang="ts">
  import { tick } from "svelte";
  import { computePosition, flip, shift, offset, arrow, type Placement } from "@floating-ui/dom";
  import { tour } from "./theme";
  import type { TourProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";

  let {
    steps = [],
    active = $bindable(false),
    currentStep = $bindable(0),
    onComplete = () => {},
    onSkip = () => {},
    showOverlay = true,
    scrollBehavior = "smooth",
    tooltipOffset = 12,
    size = "md",
    color = "primary",
    highlightClass,
    class: className,
    classes,
    ...restProps
  }: TourProps = $props();

  const theme = getTheme("tour");

  let highlightStyle = $state<string>("");
  let tooltipStyle = $state<string>("");
  let tooltipElement: HTMLDivElement | null = $state(null);
  let arrowElement: HTMLDivElement | null = $state(null);
  let arrowStyle = $state<string>("");
  let actualPlacement = $state<Placement>("bottom");
  let clipPathStyle = $state<string>("");

  const isLastStep = $derived(currentStep === steps.length - 1);
  const isFirstStep = $derived(currentStep === 0);
  const currentStepData = $derived(steps[currentStep]);

  const styles = $derived(tour({ size, color }));

  async function updatePositions(): Promise<void> {
    if (!active || !currentStepData?.target || !tooltipElement) return;

    await tick();

    const target = document.querySelector(currentStepData.target) as HTMLElement;
    if (!target) {
      console.warn(`Tour: Target element "${currentStepData.target}" not found`);
      return;
    }

    // Scroll target into view
    target.scrollIntoView({ behavior: scrollBehavior, block: "center" });
    await tick();

    const rect = target.getBoundingClientRect();

    // Calculate highlight position (no padding, exact match to element)
    const highlightTop = rect.top;
    const highlightLeft = rect.left;
    const highlightWidth = rect.width;
    const highlightHeight = rect.height;

    highlightStyle = `
      top: ${highlightTop}px;
      left: ${highlightLeft}px;
      width: ${highlightWidth}px;
      height: ${highlightHeight}px;
    `;

    // Create clip-path for overlay to cut out the highlighted area
    clipPathStyle = `clip-path: polygon(
      0% 0%,
      0% 100%,
      ${highlightLeft}px 100%,
      ${highlightLeft}px ${highlightTop}px,
      ${highlightLeft + highlightWidth}px ${highlightTop}px,
      ${highlightLeft + highlightWidth}px ${highlightTop + highlightHeight}px,
      ${highlightLeft}px ${highlightTop + highlightHeight}px,
      ${highlightLeft}px 100%,
      100% 100%,
      100% 0%
    );`;

    // Calculate tooltip position using Floating UI
    const placement = currentStepData.placement || "bottom";

    const {
      x,
      y,
      placement: finalPlacement,
      middlewareData
    } = await computePosition(target, tooltipElement, {
      placement,
      middleware: [
        offset(tooltipOffset),
        flip({
          fallbackPlacements: ["top", "bottom", "left", "right"]
        }),
        shift({ padding: 16 }),
        arrow({ element: arrowElement! })
      ]
    });

    tooltipStyle = `
      left: ${x}px;
      top: ${y}px;
    `;

    actualPlacement = finalPlacement;

    // Update arrow position
    if (middlewareData.arrow && arrowElement) {
      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[finalPlacement.split("-")[0]]!;

      arrowStyle = `
        left: ${arrowX != null ? `${arrowX}px` : ""};
        top: ${arrowY != null ? `${arrowY}px` : ""};
        ${staticSide}: -4px;
      `;
    }
  }

  function next(): void {
    if (isLastStep) {
      complete();
    } else {
      currentStep++;
      updatePositions();
    }
  }

  function previous(): void {
    if (!isFirstStep) {
      currentStep--;
      updatePositions();
    }
  }

  function skip(): void {
    active = false;
    onSkip();
  }

  function complete(): void {
    active = false;
    onComplete();
  }

  function goToStep(index: number): void {
    currentStep = index;
    updatePositions();
  }

  // Position updates - depends on active
  $effect(() => {
    if (active) {
      updatePositions();
      window.addEventListener("resize", updatePositions);
      window.addEventListener("scroll", updatePositions, true);

      return () => {
        window.removeEventListener("resize", updatePositions);
        window.removeEventListener("scroll", updatePositions, true);
      };
    }
  });

  // Focus management - depends on active AND tooltipElement
  $effect(() => {
    if (active && tooltipElement) {
      tooltipElement.focus();
    }
  });

  // Keyboard events - depends on active
  $effect(() => {
    if (active) {
      const handleKeydown = (e: KeyboardEvent) => {
        switch (e.key) {
          case "Escape":
            skip();
            break;
          case "ArrowRight":
          case "ArrowDown":
            e.preventDefault();
            next();
            break;
          case "ArrowLeft":
          case "ArrowUp":
            e.preventDefault();
            if (!isFirstStep) previous();
            break;
        }
      };

      window.addEventListener("keydown", handleKeydown);
      return () => window.removeEventListener("keydown", handleKeydown);
    }
  });
</script>

{#if active && currentStepData}
  <!-- Overlay -->
  {#if showOverlay}
    <div
      class="{styles.overlay({ class: clsx(theme?.overlay, classes?.overlay) })} z-[9998]"
      style={clipPathStyle}
      onclick={skip}
      onkeydown={(e) => e.key === "Escape" && skip()}
      role="button"
      tabindex="0"
      aria-label="Close tour"
    ></div>
  {/if}

  <!-- Highlight -->
  <div class="{highlightClass ? highlightClass : styles.highlight({ class: clsx(theme?.highlight, classes?.highlight) })} z-[9999]" style={highlightStyle}></div>

  <!-- Tooltip -->
  <div tabindex="-1" bind:this={tooltipElement} class={clsx(styles.tooltip({ class: clsx(theme?.tooltip, classes?.tooltip) }), "z-[10001]", className)} style={tooltipStyle}>
    <!-- Arrow -->
    <div bind:this={arrowElement} class={styles.arrow({ class: clsx(theme?.arrow, classes?.arrow) })} style={arrowStyle} data-placement={actualPlacement}></div>

    <div {...restProps} class={styles.content({ class: clsx(theme?.content, classes?.content) })}>
      {#if currentStepData.title}
        <h3 class={styles.title({ class: clsx(theme?.title, classes?.title) })}>{currentStepData.title}</h3>
      {/if}

      <p class={styles.description({ class: clsx(theme?.description, classes?.description) })}>{currentStepData.description}</p>

      {#if steps.length > 1}
        <div class={styles.progressContainer({ class: clsx(theme?.progressContainer, classes?.progressContainer) })}>
          {#each steps as _, index (index)}
            <button
              class="{styles.progressDot({ class: clsx(theme?.progressDot, classes?.progressDot) })} {index === currentStep ? styles.progressDotActive() : ''}"
              onclick={() => goToStep(index)}
              aria-label="Go to step {index + 1}"
              aria-current={index === currentStep ? "step" : undefined}
            ></button>
          {/each}
        </div>
      {/if}
    </div>

    <div class={styles.actions({ class: clsx(theme?.actions, classes?.actions) })}>
      <button class="{styles.button({ class: clsx(theme?.button, classes?.button) })} {styles.buttonSecondary()}" onclick={skip}>Skip</button>

      <div class={styles.navigation({ class: clsx(theme?.navigation, classes?.navigation) })}>
        {#if !isFirstStep}
          <button class="{styles.button({ class: clsx(theme?.button, classes?.button) })} {styles.buttonSecondary()}" onclick={previous}>Previous</button>
        {/if}

        <button class="{styles.button({ class: clsx(theme?.button, classes?.button) })} {styles.buttonPrimary()}" onclick={next}>
          {isLastStep ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  </div>
{/if}
