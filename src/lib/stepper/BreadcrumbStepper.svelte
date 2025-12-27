<script lang="ts">
  import CheckmarkIcon from "./CheckmarkIcon.svelte";
  import DoubleArrowIcon from "./DoubleArrowIcon.svelte";
  import { breadcrumbStepper } from "./theme";
  import clsx from "clsx";
  import type { BreadcrumbStepperProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { steps = [], class: className, classes, current = $bindable(1), clickable = true, showCheckmarkForCompleted = true, onStepClick, ...restProps }: BreadcrumbStepperProps = $props();

  // Ensure current is within valid bounds
  $effect(() => {
    if (current < 0) current = 0;
    if (current > steps.length && steps.length > 0) current = steps.length;
  });

  const theme = $derived(getTheme("breadcrumbStepper"));

  const { base, item, indicator } = $derived(breadcrumbStepper());

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
</script>

<ol class={base({ class: clsx(theme?.base, className) })} {...restProps}>
  {#each steps as step, index (step.id)}
    {@const status = step.status ?? getStepStatus(index)}
    <li
      class={item({
        status,
        hasChevron: index < steps.length - 1,
        class: clsx(theme?.item, classes?.item)
      })}
    >
      {#if clickable}
        <button
          type="button"
          class="flex cursor-pointer items-center transition-opacity hover:opacity-75"
          onclick={() => handleStepClick(index)}
          aria-current={status === "current" ? "step" : undefined}
        >
          <span class={indicator({ status, class: clsx(theme?.indicator, classes?.indicator) })}>
            {#if status === "completed" && showCheckmarkForCompleted}
              {#if step.icon}
                <step.icon class={step.iconClass || "h-3 w-3"} />
              {:else}
                <CheckmarkIcon variant="simple" class="h-3 w-3" />
              {/if}
            {:else if step.icon}
              <step.icon class={step.iconClass || "h-3 w-3"} />
            {:else}
              {step.id}
            {/if}
          </span>

          {step.label}

          {#if step.shortLabel}
            <span class="hidden sm:ms-2 sm:inline-flex">{step.shortLabel}</span>
          {/if}
        </button>
      {:else}
        <span aria-current={status === "current" ? "step" : undefined} class="flex items-center">
          <span class={indicator({ status, class: clsx(theme?.indicator, classes?.indicator) })}>
            {#if status === "completed" && showCheckmarkForCompleted}
              {#if step.icon}
                <step.icon class={step.iconClass || "h-3 w-3"} />
              {:else}
                <CheckmarkIcon variant="simple" class="h-3 w-3" />
              {/if}
            {:else if step.icon}
              <step.icon class={step.iconClass || "h-3 w-3"} />
            {:else}
              {step.id}
            {/if}
          </span>

          {step.label}

          {#if step.shortLabel}
            <span class="hidden sm:ms-2 sm:inline-flex">{step.shortLabel}</span>
          {/if}
        </span>
      {/if}

      {#if index < steps.length - 1}
        <DoubleArrowIcon />
      {/if}
    </li>
  {/each}
</ol>

<!--
## Features
- **Clickable navigation**: Click or press Enter/Space on steps to navigate
- **Auto status**: Automatically determines completed/current/pending status based on current index
- **Custom icons**: Support for custom icons on completed steps
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
[BreadcrumbStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1618)
## Props
@prop steps = []
@prop class: className
@prop classes
@prop current = $bindable(1)
@prop clickable = true
@prop showCheckmarkForCompleted = true
@prop onStepClick
@prop ...restProps
-->
