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
    {#each headItems as item}
      <TableHeadCell>
        {getItemText(item)}
      </TableHeadCell>
    {/each}
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
@props: children: Snippet;
@props:headerSlot: Snippet;
@props:color: "primary" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "orange" | "amber" | "lime" | "emerald" | "teal" | "cyan" | "sky" | "violet" | "fuchsia" | "rose" | "secondary" | "default" | undefined;
@props:striped: boolean;
@props:hoverable: boolean;
@props:noborder: boolean;
@props:class: string;
@props:headItems: string | number | {
  text: string[];
@props:defaultRow: boolean = true;
-->
