<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import classNames from 'classnames';

  const separators = writable(false);
  setContext('toolbar', separators);

  export let color: string = 'dark';
  export let embedded: boolean = false;

  const bgColors = {
    gray: 'bg-gray-100 dark:bg-gray-200 ',
    red: 'bg-red-100 dark:bg-red-200',
    yellow: 'bg-yellow-100 dark:bg-yellow-200 ',
    green: 'bg-green-100 dark:bg-green-200 ',
    indigo: 'bg-indigo-100 dark:bg-indigo-200 ',
    purple: 'bg-purple-100 dark:bg-purple-200 ',
    pink: 'bg-pink-100 dark:bg-pink-200 ',
    blue: 'bg-blue-100 dark:bg-blue-200 ',
    dark: 'bg-gray-50 dark:bg-gray-700'
    // custom: customBgClass
  };

  const textColors = {
    gray: 'text-gray-500 dark:text-gray-700',
    red: 'text-red-500 dark:text-red-700',
    yellow: 'text-yellow-500 dark:text-yellow-700',
    green: 'text-green-500 dark:text-green-700',
    indigo: 'text-indigo-500 dark:text-indigo-700',
    purple: 'text-purple-500 dark:text-purple-700',
    pink: 'text-pink-500 dark:text-pink-700',
    blue: 'text-blue-500 dark:text-blue-700',
    dark: 'text-gray-500 dark:text-gray-400'
    // custom: customTextColor
  };

  let divClass: string;
  $: divClass = classNames(
    'flex justify-between items-center',
    embedded || 'rounded-lg border border-gray-200 dark:border-gray-600 py-2 px-3',
    embedded || textColors[color],
    embedded || bgColors[color],
    $$props.class
  );

  const divideColors = {
    gray: 'divide-gray-200 dark:divide-gray-700',
    red: 'divide-red-200 dark:divide-red-700',
    yellow: 'divide-yellow-200 dark:divide-yellow-700',
    green: 'divide-green-200 dark:divide-green-700',
    indigo: 'divide-indigo-200 dark:divide-indigo-700',
    purple: 'divide-purple-200 dark:divide-purple-700',
    pink: 'divide-pink-200 dark:divide-pink-700',
    blue: 'divide-blue-200 dark:divide-blue-700',
    dark: 'divide-gray-200 dark:divide-gray-600'
    // custom: customTextColor
  };

  let separatorsClass: string;
  $: separatorsClass = classNames(
    $separators && 'divide-gray-200 sm:divide-x',
    //  dark:divide-gray-600'
    divideColors[color]
  );
</script>

<div class={divClass}>
  <div class="flex flex-wrap items-center {separatorsClass}">
    <slot />
  </div>
  <slot name="end" />
</div>
