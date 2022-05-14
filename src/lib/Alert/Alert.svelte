<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import classNames from 'classnames';
  import { HiXOutline } from 'svelte-icons/hi';

  export let color: 'blue' | 'red' | 'green' | 'yellow' | 'gray' = 'blue';
  export let icon: typeof SvelteComponent | null = null;
  export let rounded: boolean = true;
  export let withBorderAccent: boolean = false;
  export let onDismiss: boolean | (() => void) = false;

  const colorClasses = {
    blue: 'text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800',
    red: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
    green: 'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
    yellow: 'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
    gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
  };
</script>

<div
  class={classNames($$props.class, 'flex flex-col gap-2 p-4 text-sm', colorClasses[color], {
    'rounded-lg': rounded,
    'border-t-4': withBorderAccent,
  })}
  role="alert"
>
  <div class="flex items-center">
    {#if icon}
      <svelte:component this={icon} class="mr-3 inline h-5 w-5 flex-shrink-0" />
    {/if}

    <slot />
    {#if onDismiss}
      <button
        aria-label="Close"
        class={classNames('-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2', {
          'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300':
            color === 'blue',
          'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300':
            color === 'red',
          'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300':
            color === 'green',
          'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300':
            color === 'yellow',
          'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white':
            color === 'gray',
        })}
        data-testid="alert-dismiss"
        on:click={typeof onDismiss === 'function' ? onDismiss : () => {}}
        type="button"
      >
        <span class="sr-only">Close</span>
        <HiXOutline class="h-5 w-5" />
      </button>
    {/if}
  </div>
  {#if $$slots.extra}
    <div>
      <slot name="extra" />
    </div>
  {/if}
</div>
