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
    activeClass?: string | undefined | null;
    inactiveClass?: string | undefined | null;
    defaultClass?: string | undefined | null;
    transitionType?: TransitionTypes;
    transitionParams?: TransitionParamTypes;
    paddingFlush?: string | undefined | null;
    paddingDefault?: string | undefined | null;
    textFlushOpen?: string | undefined | null;
    textFlushDefault?: string | undefined | null;
    borderClass?: string | undefined | null;
    borderOpenClass?: string | undefined | null;
    borderBottomClass?: string | undefined | null;
    borderSharedClass?: string | undefined | null;
    classActive?: string | undefined | null;
    classInactive?: string | undefined | null;
    class?: string | undefined | null;
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
    transitionParams,
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
    class: className
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

  let buttonClass: string = twMerge(
    defaultClass,
    ctx.flush ? '' : borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    className
  );

  let contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? '' : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
</script>

<h2 class="group">
  <button
    onclick={handleToggle}
    type="button"
    class={buttonClass}
    aria-expanded={open}
  >
    {#if header}
      {@render header()}
      {#if open}
        {#if !arrowup}
          <svg
            class="h-3 w-3 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        {:else}
          {@render arrowup()}
        {/if}
      {:else if !arrowdown}
        <svg
          class="h-3 w-3 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      {:else}
        {@render arrowdown()}
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

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop header
@prop arrowup
@prop arrowdown
@prop open = false
@prop activeClass = undefined
@prop inactiveClass = undefined
@prop defaultClass = 'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700'
@prop transitionType = 'slide'
@prop transitionParams
@prop paddingFlush = 'py-5'
@prop paddingDefault = 'p-5'
@prop textFlushOpen = 'text-gray-900 dark:text-white'
@prop textFlushDefault = 'text-gray-500 dark:text-gray-400'
@prop borderClass = 'border-s border-e group-first:border-t'
@prop borderOpenClass = 'border-s border-e'
@prop borderBottomClass = 'border-b'
@prop borderSharedClass = 'border-gray-200 dark:border-gray-700'
@prop classActive = undefined
@prop classInactive = undefined
@prop class: className
-->
