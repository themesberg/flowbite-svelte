<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Frame from '../utils/Frame.svelte';
  import classNames from 'classnames';
  import CloseButton from '../utils/CloseButton.svelte';
  import { fade } from 'svelte/transition';

  // propagate props type from underying Frame
  interface $$Props extends ComponentProps<Frame> {
    simple?: boolean;
    level?: 'default' | 'success' | 'danger' | 'warning';
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';
    open?: boolean;
    divClass?: string;
    defaultIconClass?: string;
    extraIconClass?: string;
    contentClass?: string;
  }

  export let simple: boolean = false;
  export let level: 'default' | 'success' | 'danger' | 'warning' | 'none' = 'default';
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

  const levelColors = {
    default: 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200',
    success: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
    danger: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
    warning: 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200',
    none: ''
  };

  let iconClass: string;
  $: iconClass = classNames(defaultIconClass, levelColors[level], extraIconClass);

  $: finalContentClass = classNames($$slots.icon && (simple ? 'pl-4' : 'ml-3'), contentClass);
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
      <CloseButton
        class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 focus:!ring-gray-300 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        on:click={() => (open = false)} />
    {/if}
  </Frame>
{/if}
