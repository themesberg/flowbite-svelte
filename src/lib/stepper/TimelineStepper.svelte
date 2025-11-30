<script lang="ts">
  import { setContext } from "svelte";
  import type { StepStatus, TimelineStep } from "$lib/types";
  import CheckmarkIcon from "./CheckmarkIcon.svelte";
  import ProfileCardIcon from "./ProfileCardIcon.svelte";
  import { timelineStepper } from "./theme";
  import type { TimelineStepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { steps = [], class: className, classes, contentClass, current = $bindable(1), clickable = true, showCheckmarkForCompleted = true, onStepClick, ...restProps }: TimelineStepperProps = $props();

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

{#snippet stepIcon(status: StepStatus, step: TimelineStep)}
  {#if status === "completed" && showCheckmarkForCompleted}
    <CheckmarkIcon class="h-3.5 w-3.5 text-green-500 dark:text-green-400" />
  {:else if step.icon}
    <step.icon class={clsx(step.iconClass) || "h-3.5 w-3.5"} />
  {:else}
    <ProfileCardIcon />
  {/if}
{/snippet}

<ol class={base({ class: clsx(theme?.base, className) })} {...restProps}>
  {#each steps as step, index (step.id)}
    {@const status = step.status ?? getStepStatus(index)}
    <li class={item({ isLast: index === steps.length - 1, class: clsx(theme?.item, classes?.item) })}>
      {#if clickable}
        <button
          type="button"
          class="absolute -start-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ring-4 ring-white transition-opacity hover:opacity-75 dark:ring-gray-900 {circle({
            status,
            class: clsx(theme?.circle, classes?.circle)
          })}"
          onclick={() => handleStepClick(index)}
          aria-current={status === "current" ? "step" : undefined}
        >
          {@render stepIcon(status, step)}
        </button>
      {:else}
        <span class={circle({ status, class: clsx(theme?.circle, classes?.circle) })} aria-current={status === "current" ? "step" : undefined}>
          {@render stepIcon(status, step)}
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
[TimelineStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1687)
## Props
@prop steps = []
@prop class: className
@prop classes
@prop contentClass
@prop current = $bindable(1)
@prop clickable = true
@prop showCheckmarkForCompleted = true
@prop onStepClick
@prop ...restProps
-->
