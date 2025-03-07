<script lang="ts">
  import { getContext } from "svelte";
  import { type TableBodyRowProps as Props, tablebodyrow, type TableCtxType, type TableColrType } from "./";
  import clsx from "clsx";

  let { children, class: className, color, striped, hoverable, border, ...restProps }: Props = $props();

  const tableCtx = getContext<TableCtxType>("tableCtx");
  // for reactivity with svelte context
  let compoColor = $derived(color ? color : tableCtx.color || "default");
  let compoHoverable = $derived(hoverable ? hoverable : tableCtx.hoverable || false);
  let compoStriped = $derived(striped ? striped : tableCtx.striped || false);
  let compoBorder = $derived(border ? border : tableCtx.border || false);

  const base = $derived(tablebodyrow({ color: compoColor as TableColrType, hoverable: compoHoverable, striped: compoStriped, border: compoBorder, class: clsx(className) }));
</script>

<tr {...restProps} class={base}>
  {#if children}
    {@render children()}
  {/if}
</tr>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:class: string;
@props:color: any;
@props:striped: any;
@props:hoverable: any;
@props:border: any;
-->
