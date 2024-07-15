<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface AccordionCtxType {
    flush: boolean;
    activeClass: string | undefined | null;
    inactiveClass: string | undefined | null;
    selected?: Writable<object>;
    classActive?: string | undefined | null;
    classInactive?: string | undefined | null;
  }
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  // import Frame from '$lib/utils/Frame.svelte';
  import { twMerge } from 'tailwind-merge';
  import { setContext, type ComponentProps } from 'svelte';
  import { type TransitionConfig } from 'svelte/transition';
  import type { HTMLAttributes } from 'svelte/elements';

  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
    multiple?: boolean;
    flush?: boolean;
    activeClass?: string | undefined | null;
    inactiveClass?: string | undefined | null;
    defaultClass?: string | undefined | null;
    classActive?: string | undefined | null;
    classInactive?: string | undefined | null;
    class?: string | undefined | null;
    transition?: TransitionFunc;
    params?: any;
  }

  let {
    children,
    multiple = false,
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
    inactiveClass: twMerge(inactiveClass, classInactive),
    selected: multiple ? undefined : writable()
  };

  setContext<AccordionCtxType>('ctx', ctx);

  let frameClass: string = $state(twMerge(defaultClass, className));
</script>

<div {...attributes} class={frameClass} color="none">
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop multiple = false
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
