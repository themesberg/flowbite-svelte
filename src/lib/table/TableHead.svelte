<script lang="ts">
  import { getContext } from "svelte";
  import { TableHeadCell, type TableHeadProps as Props, tablehead, type TableCtxType, type HeadItemType } from ".";
  import clsx from "clsx";

  let { children, headerSlot, color, striped, border, class: className, headItems, defaultRow = true, ...restProps }: Props = $props();

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
## Props
@props: children: any;
@props:headerSlot: any;
@props:color: any;
@props:striped: any;
@props:border: any;
@props:class: string;
@props:headItems: any;
@props:defaultRow: any = true;
-->
