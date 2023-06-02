<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Frame from '../utils/Frame.svelte';
  import classNames from 'classnames';
  import CloseButton from '../utils/CloseButton.svelte';
  import { fade } from 'svelte/transition';

  // propagate props type from underying Frame
  interface $$Props extends ComponentProps<Frame> {
    simple?: boolean;
    color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'orange' | 'none';
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';
    open?: boolean;
    divClass?: string;
    defaultIconClass?: string;
    extraIconClass?: string;
    contentClass?: string;
  }

  export let simple: boolean = false;
  export let color: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'orange' | 'none' =
    'blue';
  export let position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none' = 'none';
  export let open: boolean = true;
  export let divClass: string =
    'w-full max-w-xs p-4 text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800';
  export let defaultIconClass: string = 'inline-flex items-center justify-center flex-shrink-0 w-8 h-8';
  export let extraIconClass: string = '';
  export let contentClass: string = 'text-sm font-normal';

  const positions = {
    'top-left': 'absolute top-5 left-5',
    'top-right': 'absolute top-5 right-5',
    'bottom-left': 'absolute bottom-5 left-5',
    'bottom-right': 'absolute bottom-5 right-5',
    none: ''
  };

  let finalDivClass: string;
  $: finalDivClass = classNames(
    'flex',
    $$slots.extra ? 'items-start' : 'items-center',
    simple && 'space-x space-x-4 divide-x divide-gray-200 dark:divide-gray-700',
    divClass,
    positions[position],
    $$props.class
  );

  const colorPalette = {
    gray: 'text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-200',
    red: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
    yellow: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200',
    green: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
    blue: 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200',
    indigo: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200',
    purple: 'text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200',
    orange: 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200',
    none: ''
  };

  let iconClass: string;
  $: iconClass = classNames(defaultIconClass, colorPalette[color], extraIconClass);

  $: finalContentClass = classNames($$slots.icon && (simple ? 'pl-4' : 'ml-3'), contentClass);

  const clsBtnExtraClass =
    '-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 focus:!ring-gray-300 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700';
</script>

{#if open}
  <Frame rounded transition={fade} color="none" {...$$restProps} class={finalDivClass} role="alert">
    {#if $$slots.icon}
      {#if simple}
        <slot name="icon" />
      {:else}
        <Frame rounded color="none" class={iconClass}>
          <slot name="icon" />
        </Frame>
      {/if}
    {/if}

    <div class={finalContentClass}>
      <slot />
      <slot name="extra" />
    </div>

    {#if !simple}
      <CloseButton class={clsBtnExtraClass} on:click={() => (open = false)} />
    {/if}
  </Frame>
{/if}

<!--
  @component
  ## Features
  [Go to Toast](https://flowbite-svelte.com/docs/components/toast)
  - Setup
  - Default toast
  - Simple toast
  - Colors
  - Icons
  - Autohide example
  - Transitions
  - Blur examples
  - Fly examples
  - Undo button
  - Extra content
  - Toast message
  - Push notification
  - Interactive toast
  - Positioning
  ## Props
  @prop simple: boolean = false;
  @prop position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none' = 'none';
  @prop open: boolean = true;
  @prop divClass: string = 'w-full max-w-xs p-4';
  @prop defaultIconClass: string = 'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3';
  ## Example
  ```
  <script>
    import { Toast } from 'flowbite-svelte';
  </script>
  <Toast>
    <svelte:fragment slot="icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    </svelte:fragment>
    Dismissable user notification.
  </Toast>
  ```
-->
