<script lang="ts">
  import ChevronDown from '$lib/utils/ChevronDown.svelte';
  import ChevronUp from '$lib/utils/ChevronUp.svelte';
  import classNames from 'classnames';
  import { getContext, onMount } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { slide } from 'svelte/transition';

  export let open: boolean = false;
  export let color: boolean = false;

  export let btnClass: string =
    'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl';

  // single selection
  const self = {};
  const selected = (getContext('selected') as Writable<any>) ?? writable();

  const flush = getContext('flush');

  onMount(() => {
    if (open) $selected = self;
    // this will trigger unsubscribe on destroy
    return selected.subscribe((x) => (open = x === self));
  });

  const handleToggle = (e: Event) => selected.set(open ? null : self);

  const hoverColors = {
    default: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    blue: 'hover:bg-blue-100 dark:hover:bg-gray-800',
    flush: ''
  };

  const textColors = {
    default: 'text-gray-500 dark:text-gray-400',
    blue: 'text-blue-500 dark:text-blue-700',
    flush: 'text-gray-500 dark:text-gray-400'
  };

  const colors = {
    default: 'focus:ring-gray-200 dark:focus:ring-gray-800',
    blue: 'focus:ring-blue-200 dark:focus:ring-blue-800 bg-blue-200 dark:bg-gray-900',
    flush: ''
  };

  let buttonClass: string;
  $: {
    const _color = flush ? 'flush' : color ? 'blue' : 'default';
    buttonClass = classNames(
      btnClass,
      flush ? 'py-5' : 'focus:ring-4 p-5',
      hoverColors[_color],
      open ? textColors[_color] : textColors.default,
      open ? colors[_color] : colors.default
    );
  }
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
    <div class={flush ? 'py-5' : 'p-5'}>
      <slot name="body" />
    </div>
  </div>
{/if}
