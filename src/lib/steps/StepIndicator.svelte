<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge, twJoin } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLElement> {
    steps: string[];
    currentStep: number;
    size: string;
    color: 'primary' | 'secondary' | 'gray' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue' | 'custom';
    glow: boolean;
    hideLabel: boolean;
    completedCustom: string;
    currentCustom: string;
  }

  export let steps: $$Props['steps'] = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  export let currentStep: $$Props['currentStep'] = 1;
  export let size: $$Props['size'] = 'h-2.5';
  export let color: $$Props['color'] = 'primary';
  export let glow: $$Props['glow'] = false;
  export let hideLabel: $$Props['hideLabel'] = false;
  export let completedCustom: $$Props['completedCustom'] = '';
  export let currentCustom: $$Props['currentCustom'] = '';

  const completedStepColors = {
    primary: 'bg-primary-500 dark:bg-primary-900',
    secondary: 'bg-secondary-500 dark:bg-secondary-900',
    gray: 'bg-gray-400 dark:bg-gray-500',
    red: 'bg-red-600 dark:bg-red-900',
    yellow: 'bg-yellow-400 dark:bg-yellow-600',
    green: 'bg-green-500 dark:bg-green-900',
    indigo: 'bg-indigo-500 dark:bg-indigo-900',
    purple: 'bg-purple-500 dark:bg-purple-900',
    pink: 'bg-pink-500 dark:bg-pink-900',
    blue: 'bg-blue-500 dark:bg-blue-900',
    custom: completedCustom
  };
  const currentStepColors = {
    primary: 'bg-primary-800 dark:bg-primary-400',
    secondary: 'bg-secondary-800 dark:bg-secondary-400',
    gray: 'bg-gray-700 dark:bg-gray-200',
    red: 'bg-red-900 dark:bg-red-500',
    yellow: 'bg-yellow-600 dark:bg-yellow-400',
    green: 'bg-green-800 dark:bg-green-400',
    indigo: 'bg-indigo-800 dark:bg-indigo-400',
    purple: 'bg-purple-800 dark:bg-purple-400',
    pink: 'bg-pink-800 dark:bg-pink-400',
    blue: 'bg-blue-800 dark:bg-blue-400',
    custom: currentCustom
  };
</script>

<div {...$$restProps} class={twMerge('space-y-2 dark:text-white', $$props.class)}>
  {#if !hideLabel}
    <h3 class="text-base font-semibold">{steps[currentStep - 1]}</h3>
  {/if}
  <div class={twJoin('flex justify-between gap-2 w-full', size)}>
    {#each steps as step, i}
      {#if i === currentStep - 1}
        <div class="relative w-full h-full">
          <div class={twJoin('relative w-full h-full rounded-sm', currentStepColors[color])}></div>
          {#if glow}
            <div class={twJoin('absolute -inset-1 rounded-sm blur opacity-30 dark:opacity-25', currentStepColors[color])}></div>
          {/if}
        </div>
      {:else if i < currentStep - 1}
        <div class={twJoin('w-full h-full rounded-sm', completedStepColors[color])}></div>
      {:else}
        <div class="w-full h-full rounded-sm bg-gray-200 dark:bg-gray-700"></div>
      {/if}
    {/each}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let steps: $$Props['steps'] = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
@prop export let currentStep: $$Props['currentStep'] = 1;
@prop export let size: $$Props['size'] = 'h-2.5';
@prop export let color: $$Props['color'] = 'primary';
@prop export let glow: $$Props['glow'] = false;
@prop export let hideLabel: $$Props['hideLabel'] = false;
@prop export let completedCustom: $$Props['completedCustom'] = '';
@prop export let currentCustom: $$Props['currentCustom'] = '';
-->
