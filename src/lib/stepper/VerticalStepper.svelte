<script lang="ts">
  import type { StepStatus, Step } from "$lib/types";
  import CheckmarkIcon from "./CheckmarkIcon.svelte";
  import { verticalStepper } from "./theme";
  import type { VerticalStepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { steps = [], liClass, class: className, classes, current = $bindable(1), clickable = true, showCheckmarkForCompleted = true, onStepClick, ...restProps }: VerticalStepperProps = $props();

  // Ensure current is within valid bounds
  $effect(() => {
    if (current < 0) current = 0;
    if (current > steps.length && steps.length > 0) current = steps.length;
  });

  const theme = $derived(getTheme("verticalStepper"));

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

{#snippet stepIcon(status: StepStatus, step: Step)}
  {#if status === "completed" && showCheckmarkForCompleted}
    <CheckmarkIcon variant="simple" />
  {:else if status === "current"}
    {#if step.icon}
      <step.icon class={step.iconClass || "h-4 w-4"} />
    {:else}
      <CheckmarkIcon variant="simple" />
    {/if}
  {/if}
{/snippet}

<ol class={base({ class: clsx(theme?.base, className) })} {...restProps}>
  {#each steps as step, index (step.id)}
    {@const status = step.status ?? getStepStatus(index)}
    <li class={clsx(liClass)}>
      {#if clickable}
        <button
          type="button"
          class="w-full cursor-pointer text-left transition-opacity hover:opacity-75 {card({ status, class: clsx(theme?.card, classes?.card) })}"
          aria-current={status === "current" ? "step" : undefined}
          onclick={() => handleStepClick(index)}
        >
          <div class={content({ class: clsx(theme?.content, classes?.content) })}>
            <span class="sr-only">{step.label}</span>
            <h3 class="font-medium">{step.id}. {step.label}</h3>
            {@render stepIcon(status, step)}
          </div>
        </button>
      {:else}
        <div class={card({ status, class: clsx(theme?.card, classes?.card) })} aria-current={status === "current" ? "step" : undefined}>
          <div class={content({ class: clsx(theme?.content, classes?.content) })}>
            <span class="sr-only">{step.label}</span>
            <h3 class="font-medium">{step.id}. {step.label}</h3>
            {@render stepIcon(status, step)}
          </div>
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
[VerticalStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1599)
## Props
@prop steps = []
@prop liClass
@prop class: className
@prop classes
@prop current = $bindable(1)
@prop clickable = true
@prop showCheckmarkForCompleted = true
@prop onStepClick
@prop ...restProps
-->
