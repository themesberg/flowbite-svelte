<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface AccordionCtxType {
    flush: boolean;
    activeClass: string;
    inactiveClass: string;
    selected?: Writable<object>;
    classActive?: string;
    classInactive?: string;
  }
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  // import Frame from '$lib/utils/Frame.svelte';
  import { twMerge } from 'tailwind-merge';
  import { setContext, type ComponentProps } from 'svelte';
  import { type TransitionConfig } from 'svelte/transition';

  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

  interface Props{
    children: Snippet;
    multiple?: boolean;
    flush?: boolean;
    activeClass?: string;
    inactiveClass?: string;
    defaultClass?: string;
    classActive?: string;
    classInactive?: string;
    class?: string;
    transition?: TransitionFunc;
    params?: any;
  }

  let { 
    children,
    multiple = false, 
    flush=false, 
    activeClass = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800', 
    inactiveClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800', 
    defaultClass = 'text-gray-500 dark:text-gray-400', 
    classActive, 
    classInactive, 
    class: className, 
    transition = undefined,
    params = {},
    ...attributes }: Props = $props();
 
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