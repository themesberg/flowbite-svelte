<script lang="ts">
  import { setContext } from "svelte";
  import { timelineStepper } from "./theme";
  import type { TimelineStepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], class: className, classes, contentClass, current = $bindable(1), clickable = true, showCheckmarkForCompleted = true, onStepClick, ...restProps }: TimelineStepperProps = $props();

  // Ensure current is within valid bounds
  $effect(() => {
    if (current < 0) current = 0;
    if (current > steps.length && steps.length > 0) current = steps.length;
  });

  const theme = getTheme("timelineStepper");

  setContext("stepperType", "timeline");

  const { base, item, circle } = $derived(timelineStepper());

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
      <li class={item({ isLast: index === steps.length - 1, class: clsx(theme?.item, classes?.item) })}>
        {#if clickable}
          <button
            type="button"
            class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 cursor-pointer transition-opacity hover:opacity-75 {circle({ status, class: clsx(theme?.circle, classes?.circle) })}"
            onclick={() => handleStepClick(index)}
          >
            {#if status === "completed" && showCheckmarkForCompleted}
              <svg class="h-3.5 w-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            {:else if step.icon}
              <step.icon class={clsx(step.iconClass) || "h-3.5 w-3.5"} />
            {:else}
              <svg class="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path
                  d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
                />
              </svg>
            {/if}
          </button>
        {:else}
          <span class={circle({ status, class: clsx(theme?.circle, classes?.circle) })}>
            {#if status === "completed" && showCheckmarkForCompleted}
              <svg class="h-3.5 w-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            {:else if step.icon}
              <step.icon class={clsx(step.iconClass) || "h-3.5 w-3.5"} />
            {:else}
              <svg class="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path
                  d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
                />
              </svg>
            {/if}
          </span>
        {/if}
        <div class={clsx(contentClass)}>
          <h3 class="leading-tight font-medium">{step.label}</h3>
          {#if step.description}
            <p class="text-sm">{step.description}</p>
          {/if}
        </div>
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
[TimelineStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1670)
## Props
@prop children
@prop steps = []
@prop class: className
@prop classes
@prop contentClass
@prop current = 1 - The current step index (bindable, 1-based; 1 means first step active)
@prop clickable = true - Whether steps can be clicked to navigate
@prop showCheckmarkForCompleted = true - Show checkmark for completed steps instead of icons
@prop onStepClick - Callback fired when a step is clicked: (event: { current: number; last: number }) => void
@prop ...restProps
-->
