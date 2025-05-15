<script lang="ts">
  import { getContext } from "svelte";
  import { TableHeadCell, tablehead } from ".";
  import type { TableHeadProps, TableCtxType, HeadItemType } from "$lib/types";
  import clsx from "clsx";

  let { children, headerSlot, color, striped, border, class: className, headItems, defaultRow = true, ...restProps }: TableHeadProps = $props();

  const tableCtx = getContext<TableCtxType>("tableCtx");
  // for reactivity with svelte context
  let compoColor = $derived(color ? color : tableCtx.color || "default");
  let compoStriped = $derived(striped ? striped : tableCtx.striped || false);
  let compoBorder = $derived(border ? border : tableCtx.border || false);

  const base = $derived(tablehead({ color: compoColor, border: compoBorder, striped: compoStriped, class: clsx(className) }));

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
[Go to docs](https://flowbite-svelte.com/)
## Type
[TableHeadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1470)
## Props
@prop children
@prop headerSlot
@prop color
@prop striped
@prop border
@prop class: className
@prop headItems
@prop defaultRow = true
@prop ...restProps
-->
