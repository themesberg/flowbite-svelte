<script lang="ts">
  import ChevronDown from '$lib/utils/ChevronDown.svelte';
  import ChevronUp from '$lib/utils/ChevronUp.svelte';
  import { twMerge } from 'tailwind-merge';
  import { getContext, onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade, blur, fly, slide } from 'svelte/transition';
  import type { TransitionTypes, TransitionParamTypes } from '../types';
  import type { AccordionCtxType } from './Accordion.svelte';

  export let open: boolean = false;
  export let activeClass: string | undefined = undefined;
  export let inactiveClass: string | undefined = undefined;
  export let defaultClass: string =
    'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700';
  export let transitionType: TransitionTypes = 'slide';
  export let transitionParams: TransitionParamTypes = {};
  export let paddingFlush: string = 'py-5';
  export let paddingDefault: string = 'p-5';
  export let textFlushOpen: string = 'text-gray-900 dark:text-white';
  export let textFlushDefault: string = 'text-gray-500 dark:text-gray-400';
  export let borderClass: string = 'border-l border-r group-first:border-t';
  export let borderOpenClass: string = 'border-l border-r';
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
  $: buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$props.class
  ]);

  $: contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? '' : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
</script>

<h2 class="group">
  <button on:click={handleToggle} type="button" class={buttonClass} aria-expanded={open}>
    <slot name="header" />
    {#if open}
      <slot name="arrowup"><ChevronUp /></slot>
    {:else}
      <slot name="arrowdown"><ChevronDown /></slot>
    {/if}
  </button>
</h2>
{#if open}
  <div transition:multiple={transitionParams}>
    <div class={contentClass}>
      <slot />
    </div>
  </div>
{:else}
  <div class="hidden">
    <div class={contentClass}>
      <slot />
    </div>
  </div>
{/if}

<!--
  @component
  ## Features
  [Go to Accordion page](https://flowbite-svelte.com/docs/components/accordion)
  - Default bottom navigation
  - Menu items with border
  - Application bar example
  - Example with pagination
  - Button group bottom bar
  - Card with bottom bar

  ## Props
  @prop open: boolean = false;
  @prop activeClass: string | undefined = undefined;
  @prop inactiveClass: string | undefined = undefined;
  @prop defaultClass: string = 'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700';
  @prop transitionType: TransitionTypes = 'slide';
  @prop transitionParams: TransitionParamTypes = {};
  @prop paddingFlush: string = 'py-5';
  @prop paddingDefault: string = 'p-5';
  @prop textFlushOpen: string = 'text-gray-900 dark:text-white';
  @prop textFlushDefault: string = 'text-gray-500 dark:text-gray-400';
  @prop borderClass: string = 'border-l border-r group-first:border-t';
  @prop borderOpenClass: string = 'border-l border-r';
  @prop borderBottomClass: string = 'border-b';
  @prop borderSharedClass: string = 'border-gray-200 dark:border-gray-700';

-->
