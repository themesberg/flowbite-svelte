<script lang="ts">
  import type { StepStatus, Step } from "$lib/types";
  import CheckmarkIcon from "./CheckmarkIcon.svelte";
  import { stepper } from "./theme";
  import type { StepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { steps = [], class: className, classes, current = $bindable(1), clickable = true, showCheckmarkForCompleted = true, onStepClick, ...restProps }: StepperProps = $props();

  // Ensure current is within valid bounds
  $effect(() => {
    if (current < 0) current = 0;
    if (current > steps.length && steps.length > 0) current = steps.length;
  });

  const theme = $derived(getTheme("stepper"));

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

{#snippet stepContent(step: Step, status: StepStatus, index: number)}
  {#if status === "completed" && showCheckmarkForCompleted}
    <CheckmarkIcon />
  {:else if step.icon}
    <step.icon class={clsx(step.iconClass) || "me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4"} />
  {:else}
    <span class="me-2">{step.id || index + 1}</span>
  {/if}
  {step.label}
  {#if step.description}
    <span class={clsx(step.descriptionClass) || "hidden sm:ms-2 sm:inline-flex"}>{step.description}</span>
  {/if}
{/snippet}

<ol {...restProps} class={base({ class: clsx(theme?.base, className) })}>
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
          aria-current={status === "current" ? "step" : undefined}
        >
          {@render stepContent(step, status, index)}
        </button>
      {:else}
        <span
          class={content({
            status,
            isLast: index === steps.length - 1,
            class: clsx(theme?.content, classes?.content)
          })}
        >
          {@render stepContent(step, status, index)}
        </span>
      {/if}
    </li>
  {/each}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[StepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1505)
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
