<script lang="ts">
  import classNames from 'classnames';

  export let steps: string[] = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  export let currentStep = 1;

  export let size: string = 'h-2.5';
  export let color: 'gray' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue' = 'blue';
  export let glow: boolean = false;
  export let hideLabel: boolean = false;

  const completedStepColors = {
    gray: 'bg-gray-400 dark:bg-gray-500',
    red: 'bg-red-600 dark:bg-red-900',
    yellow: 'bg-yellow-400 dark:bg-yellow-600',
    green: 'bg-green-500 dark:bg-green-900',
    indigo: 'bg-indigo-500 dark:bg-indigo-900',
    purple: 'bg-purple-500 dark:bg-purple-900',
    pink: 'bg-pink-500 dark:bg-pink-900',
    blue: 'bg-blue-500 dark:bg-blue-900'
  };
  const currentStepColors = {
    gray: 'bg-gray-700 dark:bg-gray-200',
    red: 'bg-red-900 dark:bg-red-500',
    yellow: 'bg-yellow-600 dark:bg-yellow-400',
    green: 'bg-green-800 dark:bg-green-400',
    indigo: 'bg-indigo-800 dark:bg-indigo-400',
    purple: 'bg-purple-800 dark:bg-purple-400',
    pink: 'bg-pink-800 dark:bg-pink-400',
    blue: 'bg-blue-800 dark:bg-blue-400'
  };
</script>

<div {...$$restProps} class={classNames('space-y-2 dark:text-white', $$props.class)}>
  {#if !hideLabel}
    <h3 class="text-base font-semibold">{steps[currentStep - 1]}</h3>
  {/if}
  <div class={classNames('flex justify-between gap-2 w-full', size)}>
    {#each steps as step, i}
      {#if i === currentStep - 1}
        <div class="relative w-full h-full">
          <div
            class={classNames(
              'relative w-full h-full rounded-sm',
              currentStepColors[color]
            )} />
          {#if glow}
            <div
              class={classNames(
                'absolute -inset-1 rounded-sm blur opacity-30 dark:opacity-25',
                currentStepColors[color]
              )} />
          {/if}
        </div>
      {:else if i < currentStep - 1}
        <div class={classNames('w-full h-full rounded-sm', completedStepColors[color])} />
      {:else}
        <div class={classNames('w-full h-full rounded-sm bg-gray-200 dark:bg-gray-700')} />
      {/if}
    {/each}
  </div>
</div>
