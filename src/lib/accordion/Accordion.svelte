<script lang="ts">
  // import { cn } from "../utils";
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';
  import {
    accordionVariants,
    type AccordionCtxType,
    type AccordionProps as Props
  } from './accordion';
  import { writable } from 'svelte/store';

  let {
    children,
    // multiple = false,
    flush = false,
    activeClass = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800',
    inactiveClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800',
    defaultClass = 'text-gray-500 dark:text-gray-400',
    classActive,
    classInactive,
    class: className,
    transition = undefined,
    params,
    ...attributes
  }: Props = $props();

  const ctx: AccordionCtxType = {
    flush,
    activeClass: twMerge(activeClass, classActive),
    inactiveClass: twMerge(inactiveClass, classInactive)
    // selected: multiple ? undefined : writable()
  };

  setContext<AccordionCtxType>('ctx', ctx);

  let accordionClass = twMerge(
    accordionVariants({ flush }),
    defaultClass,
    className
  );
</script>

<div {...attributes} class={accordionClass} color="none">
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop flush = false
@prop activeClass = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800'
@prop inactiveClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800'
@prop defaultClass = 'text-gray-500 dark:text-gray-400'
@prop classActive
@prop classInactive
@prop class: className
@prop transition = undefined
@prop params
@prop ...attributes
-->
