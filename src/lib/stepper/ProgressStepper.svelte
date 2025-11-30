<script lang="ts">
  import { setContext } from "svelte";
  import CheckmarkIcon from "./CheckmarkIcon.svelte";
  import { progressStepper } from "./theme";
  import type { ProgressStepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  let { steps = [], class: className, classes, current = $bindable(0), clickable = true, showCheckmarkForCompleted = true, onStepClick, ...restProps }: ProgressStepperProps = $props();

  // Ensure current is within valid bounds
  $effect(() => {
    if (current < 0) current = 0;
    if (current > steps.length && steps.length > 0) current = steps.length;
  });

  // Animated progress with Tween
  const animatedProgress = new Tween(0, {
    duration: 100,
    easing: cubicOut
  });

  // Update animated progress when current changes
  $effect(() => {
    if (steps.length <= 1 || current === 0) {
      animatedProgress.target = 0;
    } else {
      const progressPercent = ((current - 1) / (steps.length - 1)) * 100;
      animatedProgress.target = progressPercent;
    }
  });

  const theme = getTheme("progressStepper");

  setContext("stepperType", "progress");

  const { base, item, circle, line, progressLine } = $derived(progressStepper());

  // Handle step click
  function handleStepClick(stepIndex: number) {
    if (clickable && stepIndex < steps.length) {
      const last = current;
      // Convert 0-based array index to 1-based current value
      current = stepIndex + 1;

      // Call custom onStepClick if provided
      if (onStepClick) {
        onStepClick({ current, last });
      }
    }
  }

  // Determine step status - reactive to current changes
  // current = 0: no items highlighted (all pending)
  // current = 1: first item is current
  // current = 2: first is completed, second is current
  function getStepStatus(stepIndex: number): "completed" | "current" | "pending" {
    if (current === 0) {
      return "pending";
    }
    if (stepIndex < current - 1) {
      return "completed";
    } else if (stepIndex === current - 1) {
      return "current";
    } else {
      return "pending";
    }
  }

  // Calculate line positions and progress
  // Lines should start from center of first circle and end at center of last circle
  const lineStart = $derived(steps.length <= 1 ? "0" : `${(1 / steps.length) * 50}%`);

  const lineWidth = $derived(steps.length <= 1 ? "0" : `${100 - (1 / steps.length) * 100}%`);

  // Calculate progress width using animated value
  const progressWidth = $derived(steps.length <= 1 || lineWidth === "0" ? "0" : `${(animatedProgress.current / 100) * parseFloat(lineWidth)}%`);
</script>

<ol class={base({ class: clsx(theme?.base, className) })} {...restProps}>
  <!-- Background line (gray) - from center of first to center of last circle -->
  <div class={line({ class: clsx(theme?.line, classes?.line) })} style="left: {lineStart}; width: {lineWidth}" aria-hidden="true"></div>

  <!-- Progress line (colored, overlays the background) -->
  <div class={progressLine({ class: clsx(theme?.progressLine, classes?.progressLine) })} style="left: {lineStart}; width: {progressWidth}" aria-hidden="true"></div>

  {#each steps as step, index (step.id)}
    {@const status = step.status ?? getStepStatus(index)}
    <li
      class={item({
        status,
        class: clsx(theme?.item, classes?.item)
      })}
    >
      {#if clickable}
        <button
          type="button"
          class={circle({ status, class: clsx(theme?.circle, classes?.circle, "cursor-pointer transition-all hover:brightness-110") })}
          onclick={() => handleStepClick(index)}
          aria-current={status === "current" ? "step" : undefined}
        >
          {#if status === "completed" && showCheckmarkForCompleted}
            <!-- Checkmark for completed steps -->
            <CheckmarkIcon variant="tick" />
          {:else if step.icon}
            <!-- Show icon if provided -->
            <step.icon class={clsx(step.iconClass) || "h-5 w-5 lg:h-6 lg:w-6"} />
          {:else}
            <!-- Show number for steps without icon -->
            <span class="text-sm font-semibold">{step.id}</span>
          {/if}
        </button>
      {:else}
        <span class={circle({ status, class: clsx(theme?.circle, classes?.circle) })}>
          {#if status === "completed" && showCheckmarkForCompleted}
            <!-- Checkmark for completed steps -->
            <CheckmarkIcon variant="tick" />
          {:else if step.icon}
            <!-- Show icon if provided -->
            <step.icon class={clsx(step.iconClass) || "h-5 w-5 lg:h-6 lg:w-6"} />
          {:else}
            <!-- Show number for steps without icon -->
            <span class="text-sm font-semibold">{step.id}</span>
          {/if}
        </span>
      {/if}
    </li>
  {/each}
</ol>

<!--
## Features
- **Clickable navigation**: Click or press Enter/Space on steps to navigate
- **Auto status**: Automatically determines completed/current/pending status based on current index
- **Numbers by default**: Shows step numbers (from step.id) when no icon is provided
- **Custom icons**: Icons replace numbers when provided
- **Checkmarks**: Completed steps show checkmarks (can be disabled with showCheckmarkForCompleted={false})
- **Progress line**: A colored overlay line shows progress up to the current step
- **Accessible**: Keyboard navigation with proper ARIA attributes

## Note
The `current` prop is 1-based:
- current=0 means no step is active (all pending)
- current=1 means first step is active
- current=2 means first step is completed, second step is active
- etc.
-->

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ProgressStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1609)
## Props
@prop children
@prop steps = []
@prop class: className
@prop classes
@prop current = 0 - The current step index (bindable, 1-based; 0 means no step active)
@prop clickable = true - Whether steps can be clicked to navigate
@prop showCheckmarkForCompleted = true - Show checkmark for completed steps instead of numbers/icons
@prop onStepClick - Callback fired when a step is clicked: (event: { current: number; last: number }) => void
@prop ...restProps
-->
