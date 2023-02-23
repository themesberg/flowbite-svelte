<script lang="ts">
  import { getContext } from 'svelte';
  import classNames from 'classnames';

  export let active: boolean = getContext('active');
  export let current: boolean = false;
  export let disabled: boolean = false;
  export let href: string = '';

  const states = {
    current: 'text-white bg-blue-700 dark:text-white dark:bg-gray-800',
    normal: '',
    disabled: 'text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400'
  };
  let focusClass =
    'focus:z-40 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:focus:ring-gray-500 dark:focus:text-white';
  let hoverClass = 'hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white';

  let state: 'disabled' | 'current' | 'normal';
  $: state = disabled ? 'disabled' : current ? 'current' : 'normal';

  let itemClass: string;
  $: itemClass = classNames(
    'py-2 px-4 w-full text-sm font-medium',
    'first:rounded-t-lg last:rounded-b-lg',
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
    class="inline-flex relative items-center text-left {itemClass}"
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
