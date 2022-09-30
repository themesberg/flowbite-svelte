<script lang="ts">
  import ChevronDown from '$lib/utils/ChevronDown.svelte';
  import ChevronUp from '$lib/utils/ChevronUp.svelte';
  import classNames from 'classnames';
  import { getContext, onMount } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { slide } from 'svelte/transition';

  export let open: boolean = false;
  export let activeClasses: string | undefined = undefined;
  export let inactiveClasses: string | undefined = undefined;

  export let btnClass: string =
    'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl';

  interface AccordionCtxType {
    flush: boolean;
    activeClasses: string;
    inactiveClasses: string;
    selected: Writable<object>;
  }

  const ctx = (getContext('ctx') as AccordionCtxType) ?? {};

  // single selection
  const self = {};
  const selected = ctx.selected ?? writable();

  onMount(() => {
    if (open) $selected = self;
    // this will trigger unsubscribe on destroy
    return selected.subscribe((x) => (open = x === self));
  });

  const handleToggle = (e: Event) => selected.set(open ? {} : self);

  let buttonClass: string;
  $: buttonClass = classNames(
    btnClass,
    ctx.flush ? 'py-5' : 'p-5',
    open && (ctx.flush ? 'text-gray-900 dark:text-white' : activeClasses || ctx.activeClasses),
    !open && (ctx.flush ? 'text-gray-500 dark:text-gray-400' : inactiveClasses || ctx.inactiveClasses)
  );
</script>

<h2 aria-expanded={open} class="group">
  <button on:click={handleToggle} type="button" class={classNames(buttonClass, $$props.class)}>
    <slot name="header" />
    {#if open}
      <slot name="arrowup"><ChevronUp /></slot>
    {:else}
      <slot name="arrowdown"><ChevronDown /></slot>
    {/if}
  </button>
</h2>
{#if open}
  <div transition:slide={{ duration: 500 }}>
    <div class={ctx.flush ? 'py-5' : 'p-5'}>
      <slot name="body" />
    </div>
  </div>
{/if}
