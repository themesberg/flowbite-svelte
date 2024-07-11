<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext, onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade, blur, fly, slide } from 'svelte/transition';
  import type { TransitionTypes, TransitionParamTypes } from '../types';
  import type { AccordionCtxType } from './Accordion.svelte';

  export let tag: string = 'h2';
  export let open: boolean = false;
  export let activeClass: string | undefined = undefined;
  export let inactiveClass: string | undefined = undefined;
  export let defaultClass: string = 'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700';
  export let transitionType: TransitionTypes = 'slide';
  export let transitionParams: TransitionParamTypes = {};
  export let paddingFlush: string = 'py-5';
  export let paddingDefault: string = 'p-5';
  export let textFlushOpen: string = 'text-gray-900 dark:text-white';
  export let textFlushDefault: string = 'text-gray-500 dark:text-gray-400';
  export let borderClass: string = 'border-s border-e group-first:border-t';
  export let borderOpenClass: string = 'border-s border-e';
  export let borderBottomClass: string = 'border-b';
  export let borderSharedClass: string = 'border-gray-200 dark:border-gray-700';

  export let classActive: string | undefined = undefined;
  export let classInactive: string | undefined = undefined;

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

  let _open: boolean = open;
  open = false;

  onMount(() => {
    if (_open) $selected = self;

    // this will trigger unsubscribe on destroy
    return selected.subscribe((x) => (open = x === self));
  });

  const handleToggle = (_: Event) => selected.set(open ? {} : self);

  let buttonClass: string;
  $: buttonClass = twMerge([defaultClass, ctx.flush || borderClass, borderBottomClass, borderSharedClass, ctx.flush ? paddingFlush : paddingDefault, open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass), !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass), $$props.class]);

  $: contentClass = twMerge([ctx.flush ? paddingFlush : paddingDefault, ctx.flush ? '' : borderOpenClass, borderBottomClass, borderSharedClass]);
</script>

<svelte:element this={tag} class="group">
  <button on:click={handleToggle} type="button" class={buttonClass} aria-expanded={open}>
    <slot name="header" />
    {#if open}
      <slot name="arrowup">
        <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      </slot>
    {:else}
      <slot name="arrowdown">
        <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </slot>
    {/if}
  </button>
</svelte:element>
{#if open}
  <div transition:multiple={transitionParams}>
    <div class={contentClass}>
      <slot />
    </div>
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let tag: string = 'h2';
@prop export let open: boolean = false;
@prop export let activeClass: string | undefined = undefined;
@prop export let inactiveClass: string | undefined = undefined;
@prop export let defaultClass: string = 'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700';
@prop export let transitionType: TransitionTypes = 'slide';
@prop export let transitionParams: TransitionParamTypes = {};
@prop export let paddingFlush: string = 'py-5';
@prop export let paddingDefault: string = 'p-5';
@prop export let textFlushOpen: string = 'text-gray-900 dark:text-white';
@prop export let textFlushDefault: string = 'text-gray-500 dark:text-gray-400';
@prop export let borderClass: string = 'border-s border-e group-first:border-t';
@prop export let borderOpenClass: string = 'border-s border-e';
@prop export let borderBottomClass: string = 'border-b';
@prop export let borderSharedClass: string = 'border-gray-200 dark:border-gray-700';
@prop export let classActive: string | undefined = undefined;
@prop export let classInactive: string | undefined = undefined;
-->
