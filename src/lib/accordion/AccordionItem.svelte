<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade, blur, fly, slide } from 'svelte/transition';
  import type { TransitionTypes, TransitionParamTypes } from '../types';
  import type { AccordionCtxType } from './Accordion.svelte';
  
  interface Props {
    children: Snippet;
    header?: Snippet;
    arrowup?: Snippet;
    arrowdown?: Snippet;
    open?: boolean;
    activeClass?: string;
    inactiveClass?: string;
    defaultClass?: string;
    transitionType?: TransitionTypes;
    transitionParams?: TransitionParamTypes;
    paddingFlush?: string;
    paddingDefault?: string;
    textFlushOpen?: string;
    textFlushDefault?: string;
    borderClass?: string;
    borderOpenClass?: string;
    borderBottomClass?: string;
    borderSharedClass?: string;
    classActive?: string;
    classInactive?: string;
    class?: string;
  }

  let {
    children,
    header,
    arrowup,
    arrowdown,
    open = false,
    activeClass = undefined,
    inactiveClass = undefined,
    defaultClass = 'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700',
    transitionType = 'slide',
    transitionParams = {},
    paddingFlush = 'py-5',
    paddingDefault = 'p-5',
    textFlushOpen = 'text-gray-900 dark:text-white',
    textFlushDefault = 'text-gray-500 dark:text-gray-400',
    borderClass = 'border-s border-e group-first:border-t',
    borderOpenClass = 'border-s border-e',
    borderBottomClass = 'border-b',
    borderSharedClass = 'border-gray-200 dark:border-gray-700',
    classActive = undefined,
    classInactive = undefined,
    class: className,
  }: Props = $props();

  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);

  // make a custom transition function that returns the desired transition
  const multiple = (node: HTMLElement, params: any) => {
    switch (transitionType) {
      case 'blur':
        return blur(node, params);
      case 'fly':
        return fly(node, params);
      case 'fade':
        return fade(node, params);
      default:
        return slide(node, params);
    }
  };

  const ctx = getContext<AccordionCtxType>('ctx') ?? {};

  // single selection
  const self = {};
  const selected = ctx.selected ?? writable();

  let _open: boolean = $state(open);

  $effect(() => {
    if (_open) $selected = self;

    // this will trigger unsubscribe on destroy
    return selected.subscribe((x) => (open = x === self));
  });

  const handleToggle = (_: Event) => selected.set(open ? {} : self);

  let buttonClass: string = twMerge(defaultClass, ctx.flush? '' : borderClass , borderBottomClass, borderSharedClass, ctx.flush ? paddingFlush : paddingDefault, open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass), !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass), className);

  let contentClass = twMerge([ctx.flush ? paddingFlush : paddingDefault, ctx.flush ? '' : borderOpenClass, borderBottomClass, borderSharedClass]);
</script>

<h2 class="group">
  <button onclick={handleToggle} type="button" class={buttonClass} aria-expanded={open}>
    {#if header}
      {@render header()}
      {#if open}
        {#if !arrowup}
          <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        {:else}
          {@render arrowup()}
        {/if}
      {:else}
        {#if !arrowdown}
          <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        {:else}
          {@render arrowdown()}
        {/if}
      {/if}
    {/if}
  </button>
</h2>
{#if open}
  <div transition:multiple={transitionParams}>
    <div class={contentClass}>
      {@render children()}
    </div>
  </div>
{/if}