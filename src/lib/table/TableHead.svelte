<script lang="ts">
  import { getContext } from 'svelte';
  import type TableCtxType from './Table.svelte';
  import { TableHeadCell, type TableHeadProps as Props, tablehead} from '.'

  let { children, headerSlot, color, striped, hoverable, noborder, class: className, headItems, defaultRow = true, ...restProps }: Props = $props();

  const tableCtx: TableCtxType = getContext('tableCtx');
  // for reactivity with svelte context
  let compoColor = $derived(color ? color : tableCtx.color || 'default');
  // let compoHoverable = $derived(hoverable ? hoverable : tableCtx.hoverable || false);
  let compoStriped = $derived(striped ? striped : tableCtx.striped || false);
  let compoNoborder = $derived( noborder ? noborder : tableCtx.noborder || false);

  const base = $derived(tablehead({ color: compoColor, noborder: compoNoborder, striped: compoStriped,  className }));
</script>

<thead {...restProps} class={base}>
  {#if headItems}
    {#if headerSlot}
      {@render headerSlot()}
    {/if}
    {#each headItems as item}
      <TableHeadCell>{item}</TableHeadCell>
    {/each}
  {:else}
    {#if children}
      {#if defaultRow}
        <tr>
          {@render children()}
        </tr>
      {:else}
        {@render children()}
      {/if}
    {/if}
  {/if}
</thead>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop defaultRow = true
@prop ...restProps
-->
