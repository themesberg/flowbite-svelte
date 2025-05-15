<script lang="ts">
  import { twMerge, twJoin } from "tailwind-merge";
  import type { StepIndicatorProps, StepColorType } from "$lib";

  let { steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"], currentStep = 1, size = "h-2.5", color = "primary", glow = false, hideLabel = false, completedCustom = "", currentCustom = "", class: className, ...restProps }: StepIndicatorProps = $props();

  const safeColor = color as StepColorType;

  const completedStepColors = {
    primary: "bg-primary-500 dark:bg-primary-900",
    secondary: "bg-secondary-500 dark:bg-secondary-900",
    gray: "bg-gray-400 dark:bg-gray-500",
    red: "bg-red-600 dark:bg-red-900",
    yellow: "bg-yellow-400 dark:bg-yellow-600",
    green: "bg-green-500 dark:bg-green-900",
    indigo: "bg-indigo-500 dark:bg-indigo-900",
    purple: "bg-purple-500 dark:bg-purple-900",
    pink: "bg-pink-500 dark:bg-pink-900",
    blue: "bg-blue-500 dark:bg-blue-900",
    custom: completedCustom
  };
  const currentStepColors = {
    primary: "bg-primary-800 dark:bg-primary-400",
    secondary: "bg-secondary-800 dark:bg-secondary-400",
    gray: "bg-gray-700 dark:bg-gray-200",
    red: "bg-red-900 dark:bg-red-500",
    yellow: "bg-yellow-600 dark:bg-yellow-400",
    green: "bg-green-800 dark:bg-green-400",
    indigo: "bg-indigo-800 dark:bg-indigo-400",
    purple: "bg-purple-800 dark:bg-purple-400",
    pink: "bg-pink-800 dark:bg-pink-400",
    blue: "bg-blue-800 dark:bg-blue-400",
    custom: currentCustom
  };
  // Ensure currentStep is within bounds
  let safeCurrentStep = $derived(Math.max(1, Math.min(currentStep, steps.length)));
  let currentStepLabel = $derived(steps[safeCurrentStep - 1] ?? "Unknown Step");

  // Type-safe way to access color values
  function getCompletedColor(colorKey: StepColorType): string {
    return completedStepColors[colorKey];
  }

  function getCurrentColor(colorKey: StepColorType): string {
    return currentStepColors[colorKey];
  }
</script>

<div {...restProps} class={twMerge("space-y-2 dark:text-white", className)}>
  {#if !hideLabel}
    <h3 class="text-base font-semibold">{currentStepLabel}</h3>
  {/if}
  <div class={twJoin("flex w-full justify-between gap-2", size)}>
    {#each steps as step, i}
      {#if i === currentStep - 1}
        <div class="relative h-full w-full">
          <div class={twJoin("relative h-full w-full rounded-xs", getCurrentColor(safeColor))}></div>
          {#if glow}
            <div class={twJoin("absolute -inset-1 rounded-xs opacity-30 blur-sm dark:opacity-25", getCurrentColor(safeColor))}></div>
          {/if}
        </div>
      {:else if i < currentStep - 1}
        <div class={twJoin("h-full w-full rounded-xs", getCompletedColor(safeColor))}></div>
      {:else}
        <div class="h-full w-full rounded-xs bg-gray-200 dark:bg-gray-700"></div>
      {/if}
    {/each}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[StepIndicatorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1444)
## Props
@prop steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
@prop currentStep = 1
@prop size = "h-2.5"
@prop color = "primary"
@prop glow = false
@prop hideLabel = false
@prop completedCustom = ""
@prop currentCustom = ""
@prop class: className
@prop ...restProps
-->
