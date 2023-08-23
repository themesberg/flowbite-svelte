<script lang="ts">
  import { getContext } from 'svelte';
  import type { ButtonClassesTypes } from '../types';
  import type { BottomNavType } from './BottomNav.svelte';
  import { twMerge } from 'tailwind-merge';

  export let btnName: string = '';
  export let appBtnPosition: 'left' | 'middle' | 'right' = 'middle';
  export let activeClass: string | undefined = undefined;
  export let href: string = '';

  const navType: 'default' | 'border' | 'application' | 'pagination' | 'group' | 'card' | 'meeting' | 'video' = getContext('navType');

  const context = getContext<BottomNavType>('bottomNavType') ?? {};
  const activeUrlStore = getContext('activeUrl') as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = '';
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });

  $: active = navUrl ? href === navUrl : false;
  const btnClasses: ButtonClassesTypes = {
    default: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    border: 'inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600',
    application: '',
    pagination: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    group: 'inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    card: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    meeting: '',
    video: ''
  };

  const spanClasses: ButtonClassesTypes = {
    default: 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
    border: 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
    application: 'sr-only',
    pagination: 'sr-only',
    group: 'sr-only',
    card: 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
    meeting: '',
    video: ''
  };

  const appBtnClasses = {
    left: 'inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group',
    middle: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    right: 'inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group'
  };
  let btnClass: string;

  // let active = navUrl ? href === navUrl : false;

  $: btnClass = twMerge(btnClasses[navType], appBtnClasses[appBtnPosition], active && (activeClass ?? context.activeClass), $$props.btnClass);

  let spanClass: string;

  $: spanClass = twMerge(spanClasses[navType], active && (activeClass ?? context.activeClass), $$props.spanClass);
</script>

<svelte:element this={href ? 'a' : 'button'} aria-label={btnName} {href} role={href ? 'link' : 'button'} {...$$restProps} class={btnClass} on:click on:change on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave>
  <slot />
  <span class={spanClass}>{btnName}</span>
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let btnName: string = '';
@prop export let appBtnPosition: 'left' | 'middle' | 'right' = 'middle';
@prop export let activeClass: string | undefined = undefined;
@prop export let href: string = '';
-->
