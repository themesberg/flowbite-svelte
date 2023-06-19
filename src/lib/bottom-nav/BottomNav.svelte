<script lang="ts" context="module">
  export type BottomNavLiType = {
    activeClass: string;
  };
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  export let position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' = 'fixed';
  export let navType:
    | 'default'
    | 'border'
    | 'application'
    | 'pagination'
    | 'group'
    | 'card'
    | 'meeting'
    | 'video' = 'default';

  export let outerClass: string = 'w-full z-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600';
  export let innerClass: string = 'grid h-full max-w-lg mx-auto';
  export let activeClass: string =
    'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900';

  let activeCls = twMerge(activeClass, $$props.classActive);
  setContext('navType', navType);
  setContext<BottomNavLiType>('bottomNavType', { activeClass: activeCls });
  const outerDivClasses = {
    default: 'bottom-0 left-0 h-16 bg-white border-t',
    border: 'bottom-0 left-0 h-16 bg-white border-t',
    application: 'h-16 max-w-lg -translate-x-1/2 bg-white border rounded-full bottom-4 left-1/2',
    pagination: 'bottom-0 h-16 -translate-x-1/2 bg-white border-t left-1/2',
    group: 'bottom-0 -translate-x-1/2 bg-white border-t left-1/2',
    card: 'bottom-0 left-0 h-16 bg-white border-t',
    meeting: 'bottom-0 left-0 grid h-16 grid-cols-1 px-8 bg-white border-t md:grid-cols-3',
    video: 'bottom-0 left-0 grid h-24 grid-cols-1 px-8 bg-white border-t md:grid-cols-3'
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
  ## Features
  [Go to Bottom Navigation](https://flowbite-svelte.com/docs/components/bottom-navigation)
  - Default bottom navigation
  - Menu items with border
  - Application bar example
  - Example with pagination
  - Button group bottom bar
  - Card with bottom bar
  ## Props
  @prop position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' = 'fixed';
  @prop navType:| 'default' | 'border' | 'application' | 'pagination' | 'group' | 'card' | 'meeting' | 'video' | 'custom' = 'default';
  @prop outerClass: string = 'w-full z-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600';
  @prop innerClass: string = 'grid h-full max-w-lg mx-auto';
  @prop outerCustom: string = '';
  @prop innerCustom: string = '';
  ## Example
  ```
  <script>
    import { BottomNav, BottomNavItem } from "flowbite-svelte"
  </script>

  <BottomNav position="absolute" innerDiv="grid-cols-4">
    <BottomNavItem btnName="Home">
      <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
      </svg>
    </BottomNavItem>
    <BottomNavItem btnName="Wallet">
        <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
          <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
        </svg>
    </BottomNavItem>
    <BottomNavItem btnName="Settings">
        <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
        </svg>
    </BottomNavItem>
    <BottomNavItem btnName="Profile">
        <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
        </svg>
    </BottomNavItem>
  </BottomNav>
  ```
-->
