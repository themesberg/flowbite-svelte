<script lang="ts">
  import { getContext } from "svelte";
  import { TableHeadCell, type TableHeadProps as Props, tablehead, type TableCtxType, type HeadItemType } from ".";

  let { children, headerSlot, color, striped, noborder, class: className, headItems, defaultRow = true, ...restProps }: Props = $props();

  const tableCtx = getContext<TableCtxType>("tableCtx");
  // for reactivity with svelte context
  let compoColor = $derived(color ? color : tableCtx.color || "default");
  let compoStriped = $derived(striped ? striped : tableCtx.striped || false);
  let compoNoborder = $derived(noborder ? noborder : tableCtx.noborder || false);

  const base = $derived(tablehead({ color: compoColor, noborder: compoNoborder, striped: compoStriped, className }));

  function getItemText(item: HeadItemType): string {
    if (typeof item === "object" && "text" in item) {
      return item.text;
    }
    return String(item);
  }
</script>

<thead {...restProps} class={base}>
  {#if headItems}
    {#if headerSlot}
      {@render headerSlot()}
    {/if}
    <tr>
      {#each headItems as item}
        <TableHeadCell>
          {getItemText(item)}
        </TableHeadCell>
      {/each}
    </tr>
  {:else if children}
    {#if defaultRow}
      <tr>
        {@render children()}
      </tr>
    {:else}
      {@render children()}
    {/if}
  {/if}
</thead>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:headerSlot: any;
@props:color: any;
@props:striped: any;
@props:noborder: any;
@props:class: string;
@props:headItems: any;
@props:defaultRow: any = true;
-->
