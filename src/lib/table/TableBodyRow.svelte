<script lang="ts">
  import { getContext } from "svelte";
  import { type TableBodyRowProps as Props, tablebodyrow, type TableCtxType } from "./";
  import clsx from "clsx";

  let { children, class: className, color, striped, hoverable, border, ...restProps }: Props = $props();

  const tableCtx = getContext<TableCtxType>("tableCtx");
  // for reactivity with svelte context
  let compoColor = $derived(color || tableCtx.color || "default");
  let compoHoverable = $derived(hoverable || tableCtx.hoverable || false);
  let compoStriped = $derived(striped || tableCtx.striped || false);
  let compoBorder = $derived(border || tableCtx.border || false);

  const base = $derived(tablebodyrow({ color: compoColor, hoverable: compoHoverable, striped: compoStriped, border: compoBorder, class: clsx(className) }));
</script>

<tr {...restProps} class={base}>
  {#if children}
    {@render children()}
  {/if}
</tr>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop class: className
@prop color
@prop striped
@prop hoverable
@prop border
@prop ...restProps
-->
