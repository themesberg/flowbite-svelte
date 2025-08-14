<script lang="ts">
  import { setContext } from "svelte";
  import { table as tableCls, TableHead, TableBody } from ".";
  import clsx from "clsx";
  import { type TableProps, type TableCtxType } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, footerSlot, captionSlot, items, divClass, striped, hoverable, border = true, shadow, color = "default", class: className, classes, ...restProps }: TableProps = $props();

  warnThemeDeprecation("Table", { divClass }, { divClass: "div" });
  const styling = $derived(
    classes ?? {
      div: divClass
    }
  );
  const theme = getTheme("table");

  const { div, table } = $derived(tableCls({ color, shadow }));

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

<div class={div({ class: clsx(theme?.div, styling.div) })}>
  <table {...restProps} class={table({ class: clsx(theme?.table, className) })}>
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
[TableProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1627)
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
@prop classes
@prop ...restProps
-->
