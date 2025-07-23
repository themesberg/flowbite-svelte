<script lang="ts">
  import clsx from "clsx";
  import { type StepIndicatorProps } from "$lib";
  import { stepIndicator, getStepStateClasses, type StepIndicatorTheme } from ".";
  import { getTheme } from "$lib/theme/themeUtils";

  let { steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"], currentStep = 1, size = "md", color = "primary", glow = false, hideLabel = false, completedCustom = "", currentCustom = "", class: className, classes, ...restProps }: StepIndicatorProps = $props();

  const theme = getTheme("stepIndicator");

  const style = stepIndicator({ size, color, glow, hideLabel });

  // Ensure currentStep is within bounds
  let safeCurrentStep = $derived(Math.max(1, Math.min(currentStep, steps.length)));
  let currentStepLabel = $derived(steps[safeCurrentStep - 1] ?? "Unknown Step");

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

  // base,label,container,stepWrapper,step,stepGlow,incompleteStep:
</script>

<div {...restProps} class={style.base({ class: clsx((theme as StepIndicatorTheme)?.base, className) })}>
  {#if !hideLabel}
    <h3 class={style.label({ class: clsx((theme as StepIndicatorTheme)?.label, classes?.label) })}>{currentStepLabel}</h3>
  {/if}

  <div class={style.container({ class: clsx((theme as StepIndicatorTheme)?.container, classes?.container) })}>
    {#each steps as step, i}
      {#if i === currentStep - 1}
        <div class={style.stepWrapper({ class: clsx((theme as StepIndicatorTheme)?.stepWrapper, classes?.stepWrapper) })}>
          <div class={style.step({ class: clsx(getStepStateClasses(i, currentStep), getCustomStepClass(i), (theme as StepIndicatorTheme)?.step, classes?.step) })} data-state="current"></div>
          {#if glow}
            <div class={style.stepGlow({ class: clsx(getCustomStepClass(i), (theme as StepIndicatorTheme)?.stepGlow, classes?.stepGlow) })}></div>
          {/if}
        </div>
      {:else if i < currentStep - 1}
        <div class={style.step({ class: clsx(getStepStateClasses(i, currentStep), getCustomStepClass(i), (theme as StepIndicatorTheme)?.step, classes?.step) })} data-state="completed"></div>
      {:else}
        <div class={style.incompleteStep({ class: clsx((theme as StepIndicatorTheme)?.incompleteStep, classes?.incompleteStep) })} data-state="incomplete"></div>
      {/if}
    {/each}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[StepIndicatorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1514)
## Props
@prop steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
@prop currentStep = 1
@prop size = "md"
@prop color = "primary"
@prop glow = false
@prop hideLabel = false
@prop completedCustom = ""
@prop currentCustom = ""
@prop class: className
@prop classes
@prop ...restProps
-->
