<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type TableCtxType from './Table.svelte';
  
  interface Props{
    children?: any;
    defaultRow?: boolean;
    theadClass?: string;
    class?: string;
  }

  let { children, class: className, theadClass = 'text-xs uppercase', defaultRow = true, ...attributes } = $props<Props>(); 

  const tableCtx: TableCtxType = getContext('tableCtx');
  const color = tableCtx.color;
  const noborder: boolean = tableCtx.noborder;
  const striped: boolean = tableCtx.striped;
  const defaultBgColor = noborder || striped ? '' : 'bg-gray-50 dark:bg-gray-700';
  const bgColors: { [key: string]: string } = {
    default: defaultBgColor,
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    purple: 'bg-purple-600',
    indigo: 'bg-indigo-600',
    pink: 'bg-pink-600',
    custom: ''
  };

  let textColor = color === 'default' ? 'text-gray-700 dark:text-gray-400' : color === 'custom' ? '' : 'text-white  dark:text-white';
  let borderColors = striped ? '' : color === 'default' ? 'border-gray-700' : color === 'custom' ? '' : `border-${color}-400`;

  let theadCls = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], className);
</script>

<thead {...attributes} class={theadCls}>
  {#if defaultRow}
    <tr>
      {@render children()}
    </tr>
  {:else}
    {@render children()}
  {/if}
</thead>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:defaultRow?: boolean;
@props:theadClass?: string;
@props:class?: string;
-->
