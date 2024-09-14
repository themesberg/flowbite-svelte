<script lang="ts">
  import { getContext } from 'svelte';
  import type TableCtxType from './Table.svelte';
  import { type TableBodyRowProps as Props, tablebodyrow } from './'

  let { children, class: className, color, striped, hoverable, noborder, ...restProps }: Props = $props();

  const tableCtx: TableCtxType = getContext('tableCtx');
  // for reactivity with svelte context
  let compoColor = $derived(color ? color : tableCtx.color || 'default');
  let compoHoverable = $derived(hoverable ? hoverable : tableCtx.hoverable || false);
  let compoStriped = $derived(striped ? striped : tableCtx.striped || false);
  let compoNoborder = $derived( noborder ? noborder : tableCtx.noborder || false);

  const base = $derived(tablebodyrow({ color: compoColor, hoverable: compoHoverable, striped: compoStriped, border: compoNoborder, className }));
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
