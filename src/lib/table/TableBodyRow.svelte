<script lang="ts">
  import { getContext } from "svelte";
  import { tableBodyRow } from ".";
  import type { TableBodyRowProps, TableCtxType } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, color, striped, hoverable, border, ...restProps }: TableBodyRowProps = $props();

  const theme = getTheme("tableBodyRow");

  const tableCtx = getContext<TableCtxType>("tableCtx");
  // for reactivity with svelte context
  let compoColor = $derived(color || tableCtx.color || "default");
  let compoHoverable = $derived(hoverable || tableCtx.hoverable || false);
  let compoStriped = $derived(striped || tableCtx.striped || false);
  let compoBorder = $derived(border || tableCtx.border || false);

  const base = $derived(tableBodyRow({ color: compoColor, hoverable: compoHoverable, striped: compoStriped, border: compoBorder, class: clsx(theme, className) }));
</script>

<tr {...restProps} class={base}>
  {#if children}
    {@render children()}
  {/if}
</tr>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TableBodyRowProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1644)
## Props
@prop children
@prop class: className
@prop color
@prop striped
@prop hoverable
@prop border
@prop ...restProps
-->
