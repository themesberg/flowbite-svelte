<script lang="ts">
  import { getContext } from 'svelte';
  import type TableCtxType from './Table.svelte';
  import { type TableBodyCellProps as Props, tablebodycell } from './';

  let { children, color, class: className, colspan, onclick, ...restProps }: Props = $props();

  // const tableCtx: TableCtxType = getContext('tableCtx');
  // $inspect('tableCtx in TableBodyCell', tableCtx);
  // let compoColor = $derived(color ? color : tableCtx.color || 'default');
  // let compoHoverable = $derived(hoverable ? hoverable : tableCtx.hoverable || false);
  // let compoStriped = $derived(striped ? striped : tableCtx.striped || false);
  // let compoNoborder = $derived( noborder ? noborder : tableCtx.noborder || false);
  const base = $derived(tablebodycell({ className }))
</script>

<td {...restProps} class={base} colspan={colspan ?? 1}>
  {#if onclick}
    <button {onclick}>
      {#if children}
        {@render children()}
      {/if}
    </button>
  {:else if children}
    {@render children()}
  {/if}
</td>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop colspan
@prop onclick
@prop ...restProps
-->
