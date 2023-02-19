<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import classNames from 'classnames';
  import Frame from '$lib/utils/Frame.svelte';

  const separators = writable(false);
  setContext('toolbar', separators);

  export let color:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'blue'
    | 'dark'
    | 'none' = 'dark';
  export let embedded: boolean = false;

  let divClass: string;
  $: divClass = classNames('flex justify-between items-center', embedded || 'p-2', $$props.class);

  const divideColors = {
    gray: 'divide-gray-400 dark:divide-gray-700',
    red: 'divide-red-400 dark:divide-red-700',
    yellow: 'divide-yellow-400 dark:divide-yellow-700',
    green: 'divide-green-400 dark:divide-green-700',
    indigo: 'divide-indigo-400 dark:divide-indigo-700',
    purple: 'divide-purple-400 dark:divide-purple-700',
    pink: 'divide-pink-400 dark:divide-pink-700',
    blue: 'divide-blue-400 dark:divide-blue-700',
    dark: 'divide-gray-400 dark:divide-gray-600',
    none: ''
  };

  let separatorsClass: string;
  $: separatorsClass = classNames($separators && 'sm:divide-x', divideColors[color]);
</script>

<Frame class={divClass} color={embedded ? 'none' : color} rounded={!embedded}>
  <div class="flex flex-wrap items-center {separatorsClass}">
    <slot />
  </div>
  <slot name="end" />
</Frame>
