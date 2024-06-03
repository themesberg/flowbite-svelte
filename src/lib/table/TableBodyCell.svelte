<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type TableCtxType from './Table.svelte';

  interface Props {
    children?: Snippet;
    class?: string;
    tdclass?: string;
    onclick?: () => void;
  }
  let {
    children,
    class: className,
    tdclass = '',
    onclick,
    ...attributes
  }: Props = $props();

  const tableCtx: TableCtxType = getContext('tableCtx');
  
  let color = $state(tableCtx.color ? tableCtx.color : 'default');

  let tdCls: string = $state(
    twMerge(
      'px-6 py-4 whitespace-nowrap font-medium',
      tdclass,
      color === 'default'
        ? 'text-gray-900 dark:text-white'
        : 'text-blue-50 whitespace-nowrap dark:text-blue-100',
      className
    )
  );
</script>

<svelte:element
  this={onclick ? 'button' : 'td'}
  {...attributes}
  class={tdCls}
  onclick={onclick}
  role={onclick ? 'button' : undefined}
>
  {#if children}
    {@render children()}
  {/if}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop tdclass = ''
@prop onclick
@prop ...attributes
-->
