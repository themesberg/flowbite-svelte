<script lang="ts">
  import TransitionFrame from '$lib/utils/TransitionFrame.svelte';
  import type { ComponentProps } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import CloseButton from '../utils/CloseButton.svelte';
  import Frame from '../utils/Frame.svelte';

  // propagate props type from underying Frame
  interface $$Props extends ComponentProps<TransitionFrame> {
    color?: 'primary' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'orange' | 'none';
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';
    open?: boolean;
    divClass?: string;
    defaultIconClass?: string;
    extraIconClass?: string;
    contentClass?: string;
  }

  export let dismissable: boolean = true;
  export let color: 'primary' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'orange' | 'none' = 'primary';
  export let position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none' = 'none';
  export let divClass: string = 'w-full max-w-xs p-4 text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800 gap-3';
  export let defaultIconClass: string = 'w-8 h-8';
  export let contentClass: string = 'w-full text-sm font-normal';
  export let align: boolean = true;

  const positions = {
    'top-left': 'absolute top-5 left-5',
    'top-right': 'absolute top-5 right-5',
    'bottom-left': 'absolute bottom-5 left-5',
    'bottom-right': 'absolute bottom-5 right-5',
    none: ''
  };

  let finalDivClass: string;
  $: finalDivClass = twMerge('flex', align ? 'items-center' : 'items-start', divClass, positions[position], $$props.class);

  const colors = {
    primary: 'text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200',
    gray: 'text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200',
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
  $: iconClass = twMerge('inline-flex items-center justify-center shrink-0', colors[color], defaultIconClass);

  const clsBtnExtraClass = '-mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 focus:!ring-gray-300 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-700';
</script>

<TransitionFrame rounded {dismissable} color="none" role="alert" {...$$restProps} class={finalDivClass} let:close on:close>
  {#if $$slots.icon}
    <Frame rounded color="none" class={iconClass}>
      <slot name="icon" />
    </Frame>
  {/if}

  <div class={contentClass}>
    <slot />
  </div>

  {#if dismissable}
    <slot name="close-button" {close}>
      <CloseButton class={clsBtnExtraClass} on:click={close} />
    </slot>
  {/if}
</TransitionFrame>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let dismissable: boolean = true;
@prop export let color: 'primary' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'orange' | 'none' = 'primary';
@prop export let position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none' = 'none';
@prop export let open: boolean = true;
@prop export let divClass: string = 'w-full max-w-xs p-4 text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800 gap-3';
@prop export let defaultIconClass: string = 'w-8 h-8';
@prop export let contentClass: string = 'w-full text-sm font-normal';
@prop export let align: boolean = true;
-->
