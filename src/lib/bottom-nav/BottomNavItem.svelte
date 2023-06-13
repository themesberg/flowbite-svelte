<script lang="ts">
  import { getContext } from 'svelte';
  import type { ButtonClassesTypes } from '../types';
  import { twMerge } from 'tailwind-merge';

  export let btnName: string = '';
  export let appBtnPosition: 'left' | 'middle' | 'right' | 'custom' = 'custom';
  export let btnCustom: string = '';
  export let spanCustom: string = '';
  export let appCustom: string = '';

  const navType:
    | 'default'
    | 'border'
    | 'application'
    | 'pagination'
    | 'group'
    | 'card'
    | 'meeting'
    | 'video'
    | 'custom' = getContext('navType');

  const btnClasses: ButtonClassesTypes = {
    default:
      'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    border:
      'inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600',
    application: '',
    pagination:
      'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    group:
      'inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    card: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    meeting: '',
    video: '',
    custom: btnCustom
  };

  const spanClasses: ButtonClassesTypes = {
    default:
      'text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
    border:
      'text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
    application: 'sr-only',
    pagination: 'sr-only',
    group: 'sr-only',
    card: 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
    meeting: '',
    video: '',
    custom: spanCustom
  };

  const appBtnClasses = {
    left: 'inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group',
    middle:
      'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    right:
      'inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group',
    custom: appCustom
  };
  $: btnClass = twMerge(btnClasses[navType], appBtnClasses[appBtnPosition], $$props.btnClass);
  $: spanClass = twMerge(spanClasses[navType], $$props.spanClass);
</script>

<button
  {...$$restProps}
  class={btnClass}
  aria-label={btnName}
  on:click
  on:change
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave>
  <slot />
  <span class={spanClass}>{btnName}</span>
</button>

<!--
  @component
  ## Features
  [Go to Bottom Navigation](https://flowbite-svelte.com/docs/components/bottom-navigation)
  ## Props
  @prop btnName: string = '';
  @prop appBtnPosition: 'left' | 'middle' | 'right' | 'custom' = 'custom';
  @prop btnDefault: string = '';
  @prop spanDefault: string = '';
  @prop btnCustom: string = '';
  @prop spanCustom: string = '';
  @prop appCustom: string = '';
  ## event
  - on:click
  - on:change
  - on:keydown
  - on:keyup
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave

-->
