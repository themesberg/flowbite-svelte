<script lang="ts">
  import CheckmarkIcon from "./CheckmarkIcon.svelte";
  import { detailedStepper } from "./theme";
  import type { DetailedStepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { steps = [], contentClass, class: className, classes, current = $bindable(0), clickable = true, showCheckmarkForCompleted = true, onStepClick, ...restProps }: DetailedStepperProps = $props();

  // Ensure current is within valid bounds
  $effect(() => {
    if (current < 0) current = 0;
    if (current > steps.length && steps.length > 0) current = steps.length;
  });

  const theme = $derived(getTheme("detailedStepper"));

  // Override the theme to make current step also highlighted
  const stepperTheme = $derived(() => {
    const baseTheme = detailedStepper();
    return {
      base: baseTheme.base,
      item: (props: { status: "completed" | "current" | "pending"; class?: string }) => {
        // Make current status use the same styling as completed
        const status = props.status === "current" ? "completed" : props.status;
        return baseTheme.item({ ...props, status });
      },
      indicator: (props: { status: "completed" | "current" | "pending"; class?: string }) => {
        // Make current status use the same styling as completed
        const status = props.status === "current" ? "completed" : props.status;
        return baseTheme.indicator({ ...props, status });
      }
    };
  });

  const { base, item, indicator } = $derived(stepperTheme());

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

<ol class={base({ class: clsx(theme?.base, className) })} {...restProps}>
  {#each steps as step, index (step.id)}
    {@const status = step.status ?? getStepStatus(index)}
    <li class={item({ status, class: clsx(theme?.item, classes?.item) })}>
      {#if clickable}
        <button
          type="button"
          class="flex w-full cursor-pointer items-center space-x-2.5 text-left transition-opacity hover:opacity-75 rtl:space-x-reverse"
          onclick={() => handleStepClick(index)}
          aria-current={status === "current" ? "step" : undefined}
        >
          <span class={indicator({ status, class: clsx(theme?.indicator, classes?.indicator) })}>
            {#if status === "completed" && showCheckmarkForCompleted}
              <!-- Checkmark for completed steps -->
              <CheckmarkIcon variant="tick" />
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
        <div class="flex items-center space-x-2.5 rtl:space-x-reverse" aria-current={status === "current" ? "step" : undefined}>
          <span class={indicator({ status, class: clsx(theme?.indicator, classes?.indicator) })}>
            {#if status === "completed" && showCheckmarkForCompleted}
              <!-- Checkmark for completed steps -->
              <CheckmarkIcon variant="tick" />
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
[DetailedStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1692)
## Props
@prop steps = []
@prop contentClass
@prop class: className
@prop classes
@prop current = $bindable(0)
@prop clickable = true
@prop showCheckmarkForCompleted = true
@prop onStepClick
@prop ...restProps
-->
