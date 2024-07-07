<script lang="ts">
  // import type { Snippet } from 'svelte';
  import {createEventDispatcher} from 'svelte';
  import { fade, type TransitionConfig } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import { CloseButton } from '$lib';
  import type { ColorVariant, ToastPositionType } from '$lib/types';

  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

  export let dismissable: boolean = true;
  export let color: ColorVariant = 'primary';
  export let position: ToastPositionType = 'none';
  export let divClass: string = 'w-full max-w-xs p-4 text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800 gap-3';
  export let defaultIconClass: string = 'w-8 h-8';
  export let contentClass: string = 'w-full text-sm font-normal';
  // export let div2class: string = '';
  // export let div3class: string = '';
  export let align: boolean = true;
  export let transition: TransitionFunc = fade;
  export let params = {};

  export let toastStatus: boolean = true;
  const dispatch = createEventDispatcher();

  // const divCls: string =
  //   'w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 gap-3';
  // const defaultIconCls: string = 'w-8 h-8';
  // const contentCls: string = 'w-full text-sm font-normal';

  const positions = {
    'top-left': 'absolute top-5 start-5',
    'top-right': 'absolute top-5 end-5',
    'bottom-left': 'absolute bottom-5 start-5',
    'bottom-right': 'absolute bottom-5 end-5',
    none: ''
  };

  let finalDivClass: string = twMerge(
    'flex',
    align ? 'items-center' : 'items-start',
    divClass,
    positions[position],
    $$props.class
  );

  const colors = {
    primary:
      'text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200',
    dark: 'text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200',
    red: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
    yellow:
      'text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200',
    green: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
    blue: 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200',
    indigo:
      'text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200',
    purple:
      'text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200',
    pink: 'text-pink-500 bg-pink-100 dark:bg-pink-700 dark:text-pink-200',
    none: ''
  };
  // | 'gray'| 'red'| 'yellow'| 'green'| 'indigo'| 'purple'| 'pink'| 'blue'| 'primary'| 'none';

  let iconClass: string = twMerge(
    'inline-flex items-center justify-center shrink-0 rounded-lg',
    colors[color],
    defaultIconClass
  );

  const clsBtnExtraClass =
    'ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700';
</script>

{#if toastStatus}
  <div
    role="alert"
    {...$$restProps}
    class={finalDivClass}
    transition:transition={params}
  >
    {#if $$slots.icon}
      <div class={iconClass}>
        <slot name="icon" />
      </div>
    {/if}

    <div class={contentClass}>
        <slot />
    </div>

    {#if dismissable}
      <CloseButton
        divclass={clsBtnExtraClass}
        ariaLabel="Remove toast"
        {color}
        on:click={() => {
          toastStatus = false;
          dispatch('close');
        }}
      />
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let dismissable: boolean = true;
@prop export let color: ColorVariant = 'primary';
@prop export let position: ToastPositionType = 'none';
@prop export let divClass: string = 'w-full max-w-xs p-4 text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800 gap-3';
@prop export let defaultIconClass: string = 'w-8 h-8';
@prop export let contentClass: string = 'w-full text-sm font-normal';
@prop export let div2class: string = '';
@prop export let div3class: string = '';
@prop export let align: boolean = true;
@prop export let transition: TransitionFunc = fade;
@prop export let params = {};
@prop export let toastStatus: boolean = true;
-->
