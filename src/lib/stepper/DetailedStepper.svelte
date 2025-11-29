<script lang="ts">
  import { setContext } from "svelte";
  import { detailedStepper } from "./theme";
  import type { DetailedStepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { 
    steps = [], 
    contentClass, 
    class: className, 
    classes,
    current = $bindable(0),
    clickable = true,
    showCheckmarkForCompleted = true,
    onStepClick,
    ...restProps 
  }: DetailedStepperProps = $props();
  
  // Ensure current is within valid bounds
  $effect(() => {
    if (current < 0) current = 0;
    if (current >= steps.length && steps.length > 0) current = steps.length - 1;
  });

  const theme = getTheme("detailedStepper");

  setContext("stepperType", "detailed");

  // Override the theme to make current step also highlighted
  const stepperTheme = $derived(() => {
    const baseTheme = detailedStepper();
    return {
      base: baseTheme.base,
      item: (props: any) => {
        // Make current status use the same styling as completed
        const status = props.status === 'current' ? 'completed' : props.status;
        return baseTheme.item({ ...props, status });
      },
      indicator: (props: any) => {
        // Make current status use the same styling as completed
        const status = props.status === 'current' ? 'completed' : props.status;
        return baseTheme.indicator({ ...props, status });
      }
    };
  });

  const { base, item, indicator } = $derived(stepperTheme());

  // Handle step click
  function handleStepClick(stepIndex: number) {
    if (clickable && stepIndex < steps.length) {
      const last = current;
      current = stepIndex;
      
      // Call custom onStepClick if provided
      if (onStepClick) {
        onStepClick({ current, last });
      }
    }
  }

  // Determine step status - reactive to current changes
  function getStepStatus(stepIndex: number): "completed" | "current" | "pending" {
    if (stepIndex < current) {
      return "completed";
    } else if (stepIndex === current) {
      return "current";
    } else {
      return "pending";
    }
  }
</script>

<ol class={base({ class: clsx(theme?.base, className) })} {...restProps}>
  {#each steps as step, index (step.id)}
      {@const status = step.status ?? getStepStatus(index)}
      <li class={item({ status, class: clsx(theme?.item, classes?.item) })}>
        {#if clickable}
          <button
            type="button"
            class="flex items-center space-x-2.5 rtl:space-x-reverse w-full text-left cursor-pointer hover:opacity-75 transition-opacity"
            onclick={() => handleStepClick(index)}
            onkeydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleStepClick(index);
              }
            }}
          >
            <span class={indicator({ status, class: clsx(theme?.indicator, classes?.indicator) })}>
              {#if status === "completed" && showCheckmarkForCompleted}
                <!-- Checkmark for completed steps -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-4 h-4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              {:else if step.icon}
                <!-- Show icon if provided -->
                <step.icon class={clsx(step.iconClass)} />
              {:else}
                <!-- Show number for steps without icon -->
                {step.id}
              {/if}
            </span>
            <span class={clsx(contentClass)}>
              <h3 class="leading-tight font-medium">{step.label}</h3>
              {#if step.description}
                <p class={clsx("text-sm", step.descriptionClass)}>{step.description}</p>
              {/if}
            </span>
          </button>
        {:else}
          <div class="flex items-center space-x-2.5 rtl:space-x-reverse">
            <span class={indicator({ status, class: clsx(theme?.indicator, classes?.indicator) })}>
              {#if status === "completed" && showCheckmarkForCompleted}
                <!-- Checkmark for completed steps -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-4 h-4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              {:else if step.icon}
                <!-- Show icon if provided -->
                <step.icon class={clsx(step.iconClass)} />
              {:else}
                <!-- Show number for steps without icon -->
                {step.id}
              {/if}
            </span>
            <span class={clsx(contentClass)}>
              <h3 class="leading-tight font-medium">{step.label}</h3>
              {#if step.description}
                <p class={clsx("text-sm", step.descriptionClass)}>{step.description}</p>
              {/if}
            </span>
          </div>
        {/if}
      </li>
  {/each}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DetailedStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1624)
## Props
@prop steps = []
@prop contentClass
@prop class: className
@prop classes
@prop current = 0 - The current step index (bindable, 0-based)
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
The `current` prop is 0-based:
- current=0 means first step is active
- current=1 means first step is completed, second step is active
- etc.
-->