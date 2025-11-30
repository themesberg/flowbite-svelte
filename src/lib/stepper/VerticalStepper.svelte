<script lang="ts">
  import { setContext } from "svelte";
  import { verticalStepper } from "./theme";
  import type { VerticalStepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], liClass, class: className, classes, current = $bindable(1), clickable = true, showCheckmarkForCompleted = true, onStepClick, ...restProps }: VerticalStepperProps = $props();

  // Ensure current is within valid bounds
  $effect(() => {
    if (current < 0) current = 0;
    if (current > steps.length && steps.length > 0) current = steps.length;
  });

  const theme = getTheme("verticalStepper");

  setContext("stepperType", "vertical");

  const { base, card, content } = $derived(verticalStepper());

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
    {#each steps as step (step.id)}
      {@const status = step.status ?? getStepStatus(steps.findIndex(s => s.id === step.id))}
      <li class={clsx(liClass)}>
        {#if clickable}
          <button
            type="button"
            class="w-full text-left cursor-pointer transition-opacity hover:opacity-75 {card({ status, class: clsx(theme?.card, classes?.card) })}"
            role="alert"
            onclick={() => handleStepClick(steps.findIndex(s => s.id === step.id))}
          >
            <div class={content({ class: clsx(theme?.content, classes?.content) })}>
              <span class="sr-only">{step.label}</span>
              <h3 class="font-medium">{step.id}. {step.label}</h3>
              {#if status === "completed" && showCheckmarkForCompleted}
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
              {:else if status === "current"}
                {#if step.icon}
                  <step.icon class={step.iconClass || "h-4 w-4"} />
                {:else}
                  <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                {/if}
              {/if}
            </div>
          </button>
        {:else}
          <div class={card({ status, class: clsx(theme?.card, classes?.card) })} role="alert">
            <div class={content({ class: clsx(theme?.content, classes?.content) })}>
              <span class="sr-only">{step.label}</span>
              <h3 class="font-medium">{step.id}. {step.label}</h3>
              {#if status === "completed" && showCheckmarkForCompleted}
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
              {:else if status === "current"}
                {#if step.icon}
                  <step.icon class={step.iconClass || "h-4 w-4"} />
                {:else}
                  <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                {/if}
              {/if}
            </div>
          </div>
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
[VerticalStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1639)
## Props
@prop children
@prop steps = []
@prop liClass
@prop class: className
@prop classes
@prop current = 1 - The current step index (bindable, 1-based; 1 means first step active)
@prop clickable = true - Whether steps can be clicked to navigate
@prop showCheckmarkForCompleted = true - Show checkmark for completed steps instead of icons
@prop onStepClick - Callback fired when a step is clicked: (event: { current: number; last: number }) => void
@prop ...restProps
-->
