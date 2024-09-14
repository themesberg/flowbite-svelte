<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type TableCtxType from './Table.svelte';
  import { type TableBodyRowProps as Props, tablebodyrow } from './'

  let { children, class: className, color, ...restProps }: Props = $props();

  const tableCtx: TableCtxType = getContext('tableCtx');
  let rowColor = $derived(color ? color : tableCtx.color || 'default');
  // $inspect('rowColor in TableBodyRow', rowColor);
  const hoverable = tableCtx.hoverable;
  let striped = tableCtx.striped;

  const base = $derived(tablebodyrow({ color: rowColor, hoverable:!!hoverable, striped, border: !tableCtx.noborder, className }));
</script>

<tr {...restProps} class={base}>
  {#if children}
    {@render children()}
  {/if}
</tr>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop color
@prop ...restProps
-->
