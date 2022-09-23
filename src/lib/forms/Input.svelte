<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';
  import type { InputType } from '../types';

  export let type: InputType = 'text';
  export let value: string = '';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let inputClass: string =
    'block w-full border disabled:cursor-not-allowed disabled:opacity-50 rounded-lg';
  export let color: 'base' | 'green' | 'red' = 'base';

  const colorClasses = {
    base: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
    green:
      'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
    red: 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500'
  };

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  // you need to this to avoid 2-way binding
  const setType = (node) => {
    node.type = type;
  };
</script>

<input
  {...$$restProps}
  bind:value
  on:blur
  on:change
  on:click
  on:focus
  on:keydown
  on:keypress
  on:keyup
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:paste
  on:input
  use:setType
  class={classNames(
    inputClass,
    colorClasses[color],
    color === 'base' &&
      (background
        ? 'dark:bg-gray-600 dark:border-gray-500'
        : 'dark:bg-gray-700 dark:border-gray-600'),
    {
      'p-2 sm:text-xs': size === 'sm',
      'p-2.5 text-sm': size === 'md',
      'sm:text-md p-4': size === 'lg'
    },
    $$props.class
  )} />
