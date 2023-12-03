<script lang="ts" context="module">
  export type BottomNavType = {
    activeClass: string;
  };
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';

  export let activeUrl: string = '';
  export let position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' = 'fixed';
  export let navType: 'default' | 'border' | 'application' | 'pagination' | 'group' | 'card' | 'meeting' | 'video' = 'default';
  export let outerClass: string = 'w-full z-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600';
  export let innerClass: string = 'grid h-full max-w-lg mx-auto';
  export let activeClass: string = 'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900';
  // export let activeUrl: string = '';
  let activeCls = '';

  const activeUrlStore = writable('');

  activeCls = twMerge(activeClass, $$props.classActive);
  setContext('navType', navType);
  setContext<BottomNavType>('bottomNavType', { activeClass: activeCls });

  $: {
    activeUrlStore.set(activeUrl);
  }
  setContext('activeUrl', activeUrlStore);

  const outerDivClasses = {
    default: 'bottom-0 start-0 h-16 bg-white border-t',
    border: 'bottom-0 start-0 h-16 bg-white border-t',
    application: 'h-16 max-w-lg -translate-x-1/2 rtl:translate-x-1/2 bg-white border rounded-full bottom-4 start-1/2',
    pagination: 'bottom-0 h-16 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2',
    group: 'bottom-0 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2',
    card: 'bottom-0 start-0 h-16 bg-white border-t',
    meeting: 'bottom-0 start-0 grid h-16 grid-cols-1 px-8 bg-white border-t md:grid-cols-3',
    video: 'bottom-0 start-0 grid h-24 grid-cols-1 px-8 bg-white border-t md:grid-cols-3'
  };

  const innerDivClasses = {
    default: '',
    border: '',
    application: '',
    pagination: '',
    group: '',
    card: '',
    meeting: 'flex items-center justify-center mx-auto',
    video: 'flex items-center w-full'
  };

  $: outerCls = twMerge(position, outerClass, outerDivClasses[navType], $$props.classOuter);
  $: innerCls = twMerge(innerClass, innerDivClasses[navType], $$props.classInner);
</script>

<div {...$$restProps} class={outerCls}>
  <slot name="header" />
  <div class={innerCls}>
    <slot />
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activeUrl: string = '';
@prop export let position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' = 'fixed';
@prop export let navType: 'default' | 'border' | 'application' | 'pagination' | 'group' | 'card' | 'meeting' | 'video' = 'default';
@prop export let outerClass: string = 'w-full z-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600';
@prop export let innerClass: string = 'grid h-full max-w-lg mx-auto';
@prop export let activeClass: string = 'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900';
@prop export let activeUrl: string = '';
-->
