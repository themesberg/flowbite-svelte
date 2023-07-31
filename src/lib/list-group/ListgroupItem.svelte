<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  export let active: boolean = getContext('active');
  export let current: boolean = false;
  export let disabled: boolean = false;
  export let href: string = '';
  export let currentClass: string = 'text-white bg-primary-700 dark:text-white dark:bg-gray-800';
  export let normalClass: string = '';
  export let disabledClass: string = 'text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400';
  export let focusClass: string =
    'focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white';
  export let hoverClass: string =
    'hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white';
  export let itemDefaultClass: string =
    'py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg';

  const states = {
    current: currentClass,
    normal: normalClass,
    disabled: disabledClass
  };

  let state: 'disabled' | 'current' | 'normal';
  $: state = disabled ? 'disabled' : current ? 'current' : 'normal';

  let itemClass: string;
  $: itemClass = twMerge(
    itemDefaultClass,
    states[state],
    active && state === 'disabled' && 'cursor-not-allowed',
    active && state === 'normal' && hoverClass,
    active && state === 'normal' && focusClass,
    $$props.class
  );
</script>

{#if !active}
  <li class={itemClass}>
    <slot item={$$props} />
  </li>
{:else if href}
  <a
    {href}
    class="block {itemClass}"
    aria-current={current}
    on:blur
    on:change
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover>
    <slot item={$$props} />
  </a>
{:else}
  <button
    type="button"
    class="flex items-center text-left {itemClass}"
    {disabled}
    on:blur
    on:change
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    aria-current={current}>
    <slot item={$$props} />
  </button>
{/if}

<!--
  @component
  ## Features
  [Go to List Group](https://flowbite-svelte.com/docs/components/list-group)
  ## Props
  @prop active: boolean = getContext('active');
  @prop current: boolean = false;
  @prop disabled: boolean = false;
  @prop href: string = '';
  @prop currentClass: string = 'text-white bg-primary-700 dark:text-white dark:bg-gray-800';
  @prop normalClass: string = '';
  export let disabledClass: string = 'text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400';
  @prop focusClass: string = 'focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white';
  @prop hoverClass: string = 'hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white';
  @prop itemDefaultClass: string = 'py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg';
  ## Event
  - on:blur
  - on:change
  - on:click
  - on:focus
  - on:keydown
  - on:keypress
  - on:keyup
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
-->
