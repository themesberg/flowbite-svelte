<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';

  export let color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'custom' =
    getContext('color');

  const colors = {
    default: 'bg-white dark:bg-gray-800 dark:border-gray-700',
    blue: 'bg-blue-500 border-blue-400',
    green: 'bg-green-500 border-green-400',
    red: 'bg-red-500 border-red-400',
    yellow: 'bg-yellow-500 border-yellow-400',
    purple: 'bg-purple-500 border-purple-400',
    custom: ''
  };

  const hoverColors = {
    default: 'hover:bg-gray-50 dark:hover:bg-gray-600',
    blue: 'hover:bg-blue-400',
    green: 'hover:bg-green-400',
    red: 'hover:bg-red-400',
    yellow: 'hover:bg-yellow-400',
    purple: 'hover:bg-purple-400',
    custom: ''
  };

  const stripColors = {
    default: 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700',
    blue: 'odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700',
    green: 'odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700',
    red: 'odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700',
    yellow: 'odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700',
    purple: 'odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700',
    custom: ''
  };

  let trClass: string;
  $: trClass = classNames(
    !getContext('noborder') && 'border-b last:border-b-0',
    colors[color],
    getContext('hoverable') && hoverColors[color],
    getContext('striped') && stripColors[color],
    $$props.class
  );
</script>

<tr {...$$restProps} class={trClass} on:click on:contextmenu>
  <slot />
</tr>
