<script lang="ts">
  import { type StepIndicatorProps, cn } from "$lib";
  import { stepIndicator, getStepStateClasses, type StepIndicatorTheme } from ".";
  import { getTheme } from "$lib/theme/themeUtils";

  let { 
    steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"], 
    currentStep = 1, 
    size = "md", 
    color = "primary", 
    glow = false, 
    hideLabel = false, 
    completedCustom = "", 
    currentCustom = "", 
    class: className, 
    ...restProps 
  }: StepIndicatorProps = $props();

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
</script>

<div {...restProps} class={cn(style.base(), className, (theme as StepIndicatorTheme)?.base)}>
  {#if !hideLabel}
    <h3 class={cn(style.label(), (theme as StepIndicatorTheme)?.label)}>{currentStepLabel}</h3>
  {/if}
  
  <div class={cn(style.container(), (theme as StepIndicatorTheme)?.container)}>
    {#each steps as step, i}
      {#if i === currentStep - 1}
        <div class={cn(style.stepWrapper(), (theme as StepIndicatorTheme)?.stepWrapper)}>
          <div 
            class={cn(
              style.step(), 
              getStepStateClasses(i, currentStep),
              getCustomStepClass(i),
              (theme as StepIndicatorTheme)?.step
            )}
            data-state="current"
          ></div>
          {#if glow}
            <div 
              class={cn(
                style.stepGlow(),
                getCustomStepClass(i),
                (theme as StepIndicatorTheme)?.stepGlow
              )}
            ></div>
          {/if}
        </div>
      {:else if i < currentStep - 1}
        <div 
          class={cn(
            style.step(), 
            getStepStateClasses(i, currentStep),
            getCustomStepClass(i), (theme as StepIndicatorTheme)?.step
          )}
          data-state="completed"
        ></div>
      {:else}
        <div 
          class={cn(style.incompleteStep(), (theme as StepIndicatorTheme)?.incompleteStep)}
          data-state="incomplete"
        ></div>
      {/if}
    {/each}
  </div>
</div>