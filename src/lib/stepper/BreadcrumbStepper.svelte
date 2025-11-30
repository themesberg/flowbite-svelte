<script lang="ts">
  import { setContext } from "svelte";
  import { breadcrumbStepper } from "./theme";
  import clsx from "clsx";
  import type { BreadcrumbStepperProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], class: className, classes, current = $bindable(1), clickable = true, showCheckmarkForCompleted = true, onStepClick, ...restProps }: BreadcrumbStepperProps = $props();

  // Ensure current is within valid bounds
  $effect(() => {
    if (current < 0) current = 0;
    if (current > steps.length && steps.length > 0) current = steps.length;
  });

  const theme = getTheme("breadcrumbStepper");

  setContext("stepperType", "breadcrumb");

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
  {#if children}
    {@render children()}
  {:else if steps}
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
            class="flex items-center cursor-pointer transition-opacity hover:opacity-75"
            onclick={() => handleStepClick(index)}
          >
            <span class={indicator({ status, class: clsx(theme?.indicator, classes?.indicator) })}>
              {#if status === "completed" && showCheckmarkForCompleted}
                {#if step.icon}
                  <step.icon class={step.iconClass || "h-3 w-3"} />
                {:else}
                  <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
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
          <span class={indicator({ status, class: clsx(theme?.indicator, classes?.indicator) })}>
            {#if status === "completed" && showCheckmarkForCompleted}
              {#if step.icon}
                <step.icon class={step.iconClass || "h-3 w-3"} />
              {:else}
                <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
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
        {/if}

        {#if index < steps.length - 1}
          <svg class="ms-2 h-3 w-3 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
          </svg>
        {/if}
      </li>
    {/each}
  {/if}
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
[BreadcrumbStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1655)
## Props
@prop children
@prop steps = []
@prop class: className
@prop classes
@prop current = 1 - The current step index (bindable, 1-based; 1 means first step active)
@prop clickable = true - Whether steps can be clicked to navigate
@prop showCheckmarkForCompleted = true - Show checkmark for completed steps instead of icons
@prop onStepClick - Callback fired when a step is clicked: (event: { current: number; last: number }) => void
@prop ...restProps
-->
