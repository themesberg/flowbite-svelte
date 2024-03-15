<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type TableCtxType from './Table.svelte';
  // import type TableColrType from './Table.svelte';
  interface Props {
    children?: any;
    class?: string;
    color?: string;
  }
  let { children, class: className, color, ...attributes }: Props = $props();

  const tableCtx: TableCtxType = getContext('tableCtx');
  let rowColor: string = $state(color ? color : tableCtx.color || 'default');
  const hoverable = tableCtx.hoverable;
  const striped = tableCtx.striped;

  const colors: { [key: string]: string } = {
    default: 'bg-white dark:bg-gray-800 dark:border-gray-700',
    blue: 'bg-blue-500 border-blue-400',
    green: 'bg-green-500 border-green-400',
    red: 'bg-red-500 border-red-400',
    yellow: 'bg-yellow-500 border-yellow-400',
    purple: 'bg-purple-500 border-purple-400',
    indigo: 'bg-indigo-500 border-indigo-400',
    pink: 'bg-pink-500 border-pink-400',
    custom: ''
  };

  const hoverColors: { [key: string]: string } = {
    default: 'hover:bg-gray-50 dark:hover:bg-gray-600',
    blue: 'hover:bg-blue-400',
    green: 'hover:bg-green-400',
    red: 'hover:bg-red-400',
    yellow: 'hover:bg-yellow-400',
    purple: 'hover:bg-purple-400',
    indigo: 'hover:bg-indigo-400',
    pink: 'hover:bg-pink-400',
    custom: ''
  };

  const stripColors: { [key: string]: string } = {
    default:
      'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700',
    blue: 'odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700',
    green:
      'odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700',
    red: 'odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700',
    yellow:
      'odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700',
    purple:
      'odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700',
    indigo:
      'odd:bg-indigo-800 even:bg-indigo-700 odd:dark:bg-indigo-800 even:dark:bg-indigo-700',
    pink: 'odd:bg-pink-800 even:bg-pink-700 odd:dark:bg-pink-800 even:dark:bg-pink-700',
    custom: ''
  };

  const trClass: string = twMerge([
    !tableCtx.noborder && 'border-b last:border-b-0',
    colors[rowColor],
    hoverable && hoverColors[rowColor],
    striped && stripColors[rowColor],
    className
  ]);
</script>

<tr {...attributes} class={trClass}>
  {@render children()}
</tr>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:class?: string;
@props:color?: string;
-->
