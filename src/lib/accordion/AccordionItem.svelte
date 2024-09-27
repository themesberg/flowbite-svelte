<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext, onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade, blur, fly, slide } from 'svelte/transition';
  import type { TransitionTypes, TransitionParamTypes } from '../types';
  import type { AccordionCtxType } from './Accordion.svelte';

  interface $$Props {
    tag?: string;
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
  }

  export let tag: $$Props['tag'] = 'h2';
  export let open: NonNullable<$$Props['open']> = false;
  export let activeClass: $$Props['activeClass'] = undefined;
  export let inactiveClass: $$Props['inactiveClass'] = undefined;
  export let defaultClass: $$Props['defaultClass'] = 'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700';
  export let transitionType: $$Props['transitionType'] = 'slide';
  export let transitionParams: $$Props['transitionParams'] = {};
  export let paddingFlush: $$Props['paddingFlush'] = 'py-5';
  export let paddingDefault: $$Props['paddingDefault'] = 'p-5';
  export let textFlushOpen: $$Props['textFlushOpen'] = 'text-gray-900 dark:text-white';
  export let textFlushDefault: $$Props['textFlushDefault'] = 'text-gray-500 dark:text-gray-400';
  export let borderClass: $$Props['borderClass'] = 'border-s border-e group-first:border-t';
  export let borderOpenClass: $$Props['borderOpenClass'] = 'border-s border-e';
  export let borderBottomClass: $$Props['borderBottomClass'] = 'border-b';
  export let borderSharedClass: $$Props['borderSharedClass'] = 'border-gray-200 dark:border-gray-700';

  export let classActive: $$Props['classActive'] = undefined;
  export let classInactive: $$Props['classInactive'] = undefined;

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
@prop export let tag: $$Props['tag'] = 'h2';
@prop export let open: NonNullable<$$Props['open']> = false;
@prop export let activeClass: $$Props['activeClass'] = undefined;
@prop export let inactiveClass: $$Props['inactiveClass'] = undefined;
@prop export let defaultClass: $$Props['defaultClass'] = 'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700';
@prop export let transitionType: $$Props['transitionType'] = 'slide';
@prop export let transitionParams: $$Props['transitionParams'] = {};
@prop export let paddingFlush: $$Props['paddingFlush'] = 'py-5';
@prop export let paddingDefault: $$Props['paddingDefault'] = 'p-5';
@prop export let textFlushOpen: $$Props['textFlushOpen'] = 'text-gray-900 dark:text-white';
@prop export let textFlushDefault: $$Props['textFlushDefault'] = 'text-gray-500 dark:text-gray-400';
@prop export let borderClass: $$Props['borderClass'] = 'border-s border-e group-first:border-t';
@prop export let borderOpenClass: $$Props['borderOpenClass'] = 'border-s border-e';
@prop export let borderBottomClass: $$Props['borderBottomClass'] = 'border-b';
@prop export let borderSharedClass: $$Props['borderSharedClass'] = 'border-gray-200 dark:border-gray-700';
@prop export let classActive: $$Props['classActive'] = undefined;
@prop export let classInactive: $$Props['classInactive'] = undefined;
-->
