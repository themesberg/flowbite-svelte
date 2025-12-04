<script lang="ts">
  import clsx from "clsx";
  import type { StepIndicatorProps } from "$lib/types";
  import { stepIndicator, getStepStateClasses, type StepIndicatorTheme } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";

  let {
    steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
    currentStep = $bindable(1),
    size = $bindable("md"),
    color = $bindable("primary"),
    glow = false,
    hideLabel = false,
    clickable = true,
    completedCustom = "",
    currentCustom = "",
    onStepClick,
    class: className,
    classes,
    ...restProps
  }: StepIndicatorProps = $props();

  const theme = getTheme("stepIndicator");

  const { base, label, container, wrapper, step: stepCls, glow: stepGlow, incomplete } = $derived(stepIndicator({ size, color, glow, hideLabel }));

  // Ensure currentStep is within bounds
  let safeCurrentStep = $derived(Math.max(1, Math.min(currentStep, steps.length)));
  let currentStepLabel = $derived(steps[safeCurrentStep - 1] ?? "Unknown Step");

  // Handle step click
  function handleStepClick(stepIndex: number) {
    if (clickable && stepIndex < steps.length) {
      const last = currentStep;
      // Convert 0-based array index to 1-based currentStep value
      currentStep = stepIndex + 1;

      // Call custom onStepClick if provided
      if (onStepClick) {
        onStepClick({ current: currentStep, last });
      }
    }
  }

  // Handle custom colors if provided
  const getCustomStepClass = (stepIndex: number) => {
    if (color !== "custom") return "";

    if (stepIndex === currentStep - 1) {
      return currentCustom;
    } else if (stepIndex < currentStep - 1) {
      return completedCustom;
    }
    return "";
  };
</script>

<div {...restProps} class={base({ class: clsx((theme as StepIndicatorTheme)?.base, className) })}>
  {#if !hideLabel}
    <h3 class={label({ class: clsx((theme as StepIndicatorTheme)?.label, classes?.label) })}>{currentStepLabel}</h3>
  {/if}

  <div class={container({ class: clsx((theme as StepIndicatorTheme)?.container, classes?.container) })}>
    {#each steps as _step, i (i)}
      {#if clickable}
        {#if i === currentStep - 1}
          <button
            type="button"
            class={wrapper({ class: clsx((theme as StepIndicatorTheme)?.wrapper, classes?.wrapper, "cursor-pointer transition-opacity hover:opacity-75") })}
            onclick={() => handleStepClick(i)}
            aria-current="step"
          >
            <div class={stepCls({ class: clsx(getStepStateClasses(i, currentStep), getCustomStepClass(i), (theme as StepIndicatorTheme)?.step, classes?.step) })} data-state="current"></div>
            {#if glow}
              <div class={stepGlow({ class: clsx(getCustomStepClass(i), (theme as StepIndicatorTheme)?.glow, classes?.glow) })}></div>
            {/if}
          </button>
        {:else if i < currentStep - 1}
          <button
            type="button"
            aria-label={`Go to ${steps[i]} (completed)`}
            class={stepCls({
              class: clsx(getStepStateClasses(i, currentStep), getCustomStepClass(i), (theme as StepIndicatorTheme)?.step, classes?.step, "cursor-pointer transition-opacity hover:opacity-75")
            })}
            data-state="completed"
            onclick={() => handleStepClick(i)}
          ></button>
        {:else}
          <button
            type="button"
            aria-label={`Go to ${steps[i]}`}
            class={incomplete({ class: clsx((theme as StepIndicatorTheme)?.incomplete, classes?.incomplete, "cursor-pointer transition-opacity hover:opacity-75") })}
            data-state="incomplete"
            onclick={() => handleStepClick(i)}
          ></button>
        {/if}
      {:else if i === currentStep - 1}
        <div class={wrapper({ class: clsx((theme as StepIndicatorTheme)?.wrapper, classes?.wrapper) })}>
          <div class={stepCls({ class: clsx(getStepStateClasses(i, currentStep), getCustomStepClass(i), (theme as StepIndicatorTheme)?.step, classes?.step) })} data-state="current"></div>
          {#if glow}
            <div class={stepGlow({ class: clsx(getCustomStepClass(i), (theme as StepIndicatorTheme)?.glow, classes?.glow) })}></div>
          {/if}
        </div>
      {:else if i < currentStep - 1}
        <div class={stepCls({ class: clsx(getStepStateClasses(i, currentStep), getCustomStepClass(i), (theme as StepIndicatorTheme)?.step, classes?.step) })} data-state="completed"></div>
      {:else}
        <div class={incomplete({ class: clsx((theme as StepIndicatorTheme)?.incomplete, classes?.incomplete) })} data-state="incomplete"></div>
      {/if}
    {/each}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[StepIndicatorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1574)
## Props
@prop steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
@prop currentStep = $bindable(1)
@prop size = "md"
@prop color = "primary"
@prop glow = false
@prop hideLabel = false
@prop clickable = true
@prop completedCustom = ""
@prop currentCustom = ""
@prop onStepClick
@prop class: className
@prop classes
@prop ...restProps
-->
