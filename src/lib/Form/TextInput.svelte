<script lang="ts">
  import classNames from 'classnames';
  import type { SvelteComponent } from 'svelte';

  export let value: string = '';
  export let sizing: 'sm' | 'md' | 'lg' = 'md';
  export let shadow: boolean = false;
  export let helperText: string = '';
  export let icon: typeof SvelteComponent | null = null;
  export let color: 'base' | 'green' | 'red' = 'base';
  export let addon: string = '';

  const colorClasses = {
    base: {
      input:
        'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
      helperText: 'text-gray-500 dark:text-gray-400',
    },
    green: {
      input:
        'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
      helperText: 'text-green-600 dark:text-green-500',
    },
    red: {
      input:
        'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
      helperText: 'text-red-600 dark:text-red-500',
    },
  };
</script>

<div class="flex">
  {#if $$slots.addon || addon}
    <span
      class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400"
    >
      <slot name="addon">
        {addon}
      </slot>
    </span>
  {/if}
  <div class="relative w-full">
    {#if icon}
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svelte:component this={icon} class="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>
    {/if}
    <input
      {...$$props}
      bind:value
      class={classNames(
        'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
        colorClasses[color].input,
        {
          'pl-10': icon !== null,
          'rounded-lg': !($$slots.addon || addon),
          'rounded-r-lg': $$slots.addon || addon,
          'shadow-sm dark:shadow-sm-light': shadow,
          'p-2 sm:text-xs': sizing === 'sm',
          'p-2.5 text-sm': sizing === 'md',
          'sm:text-md p-4': sizing === 'lg',
        },
        $$props.class
      )}
    />
  </div>
</div>

{#if helperText || $$slots.helper}
  <div class={classNames('mt-1 text-sm', colorClasses[color].helperText)}>
    <slot name="helper">
      {helperText}
    </slot>
  </div>
{/if}
