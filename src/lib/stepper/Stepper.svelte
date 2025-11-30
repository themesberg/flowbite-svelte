<script lang="ts">
  import { setContext } from "svelte";
  import { stepper } from "./theme";
  import type { StepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], class: className, classes, current = $bindable(1), clickable = true, showCheckmarkForCompleted = true, onStepClick, ...restProps }: StepperProps = $props();

  // Ensure current is within valid bounds
  $effect(() => {
    if (current < 0) current = 0;
    if (current > steps.length && steps.length > 0) current = steps.length;
  });

  const theme = getTheme("stepper");

  setContext("stepperType", "stepper");

  const { base, item, content } = $derived(stepper());

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
</script>

<ol {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index (step.id ?? index)}
      {@const status = step.status ?? getStepStatus(index)}
      <li
        class={item({
          status,
          isLast: index === steps.length - 1,
          class: clsx(theme?.item, classes?.item)
        })}
      >
        {#if clickable}
          <button
            type="button"
            class={content({
              status,
              isLast: index === steps.length - 1,
              class: clsx(theme?.content, classes?.content, "w-full cursor-pointer text-left transition-opacity hover:opacity-75")
            })}
            onclick={() => handleStepClick(index)}
            onkeydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleStepClick(index);
              }
            }}
          >
            {#if status === "completed" && showCheckmarkForCompleted}
              <svg class="me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            {:else if step.icon}
              <step.icon class={clsx(step.iconClass) || "me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4"} />
            {:else}
              <span class="me-2">{step.id || index + 1}</span>
            {/if}
            {step.label}
            {#if step.description}
              <span class={clsx(step.descriptionClass) || "hidden sm:ms-2 sm:inline-flex"}>{step.description}</span>
            {/if}
          </button>
        {:else}
          <span
            class={content({
              status,
              isLast: index === steps.length - 1,
              class: clsx(theme?.content, classes?.content)
            })}
          >
            {#if status === "completed" && showCheckmarkForCompleted}
              <svg class="me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            {:else if step.icon}
              <step.icon class={clsx(step.iconClass) || "me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4"} />
            {:else}
              <span class="me-2">{step.id || index + 1}</span>
            {/if}
            {step.label}
            {#if step.description}
              <span class={clsx(step.descriptionClass) || "hidden sm:ms-2 sm:inline-flex"}>{step.description}</span>
            {/if}
          </span>
        {/if}
      </li>
    {/each}
  {/if}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[StepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1596)
## Props
@prop children
@prop steps = []
@prop class: className
@prop classes
@prop current = 1 - The current step index (bindable, 1-based)
@prop clickable = true - Whether steps can be clicked to navigate
@prop showCheckmarkForCompleted = true - Show checkmark for completed steps instead of icons
@prop onStepClick - Callback fired when a step is clicked: (event: { current: number; last: number }) => void
@prop ...restProps

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
