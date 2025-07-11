<script lang="ts">
  import { setContext } from "svelte";
  import { table as tableCls, TableHead, TableBody } from ".";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import type { TableProps, TableCtxType } from "$lib";

  let { children, footerSlot, captionSlot, items, divClass = "relative overflow-x-auto", striped, hoverable, border = true, shadow, color = "default", class: className, ...restProps }: TableProps = $props();

  const { base, table } = $derived(tableCls({ color, shadow }));

  let tableCtx: TableCtxType = {
    get striped() {
      return striped;
    },
    get hoverable() {
      return hoverable;
    },
    get border() {
      return border;
    },
    get color() {
      return color;
    }
  };

  setContext("tableCtx", tableCtx);
  let headItems = $derived(items && items.length > 0 ? Object.keys(items[0]).map((key) => ({ text: key.charAt(0).toUpperCase() + key.slice(1) })) : []);

  let bodyItems = $derived(items && items.length > 0 ? items.map((item) => Object.values(item)) : []);
</script>

<div class={twMerge(base(), clsx(divClass))}>
  <table {...restProps} class={twMerge(table(), clsx(className))}>
    {#if captionSlot}
      {@render captionSlot()}
    {/if}
    {#if items && items.length > 0}
      <TableHead {headItems} />
      <TableBody {bodyItems} />
    {:else if children}
      {@render children()}
    {/if}
    {#if footerSlot}
      {@render footerSlot()}
    {/if}
  </table>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TableProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1649)
## Props
@prop children
@prop footerSlot
@prop captionSlot
@prop items
@prop divClass = "relative overflow-x-auto"
@prop striped
@prop hoverable
@prop border = true
@prop shadow
@prop color = "default"
@prop class: className
@prop ...restProps
-->
