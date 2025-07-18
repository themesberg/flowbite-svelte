<script lang="ts">
  import { setContext } from "svelte";
  import type { TableSearchProps, TableSearchType } from "$lib/types";
  import clsx from "clsx";
  import { tableSearch, type TableSearchTheme } from ".";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, header, footer, divClass, inputValue = $bindable(), striped = false, hoverable = false, customColor = "", color = "default", innerDivClass, inputClass, searchClass, svgDivClass, svgClass, tableClass, class: className, placeholder = "Search", ...restProps }: TableSearchProps = $props();

  const theme = getTheme("tableSearch");

  // Generate theme styles - handle custom color case
  const themeColor = color === "custom" ? "default" : (color as "default" | "blue" | "green" | "red" | "yellow" | "purple" | "indigo" | "pink");

  const styles = tableSearch({ color: themeColor, striped, hoverable });

  // Apply custom classes or use theme defaults
  const rootClass = styles.root({ class: clsx((theme as TableSearchTheme)?.root, divClass) });
  const innerDivCls = styles.innerDiv({ class: clsx((theme as TableSearchTheme)?.innerDiv, innerDivClass) });
  const searchContainerCls = styles.searchContainer({ class: clsx((theme as TableSearchTheme)?.searchContainer, searchClass) });
  const svgContainerCls = styles.svgContainer({ class: clsx((theme as TableSearchTheme)?.svgContainer, svgDivClass) });
  const svgCls = styles.svg({ class: clsx((theme as TableSearchTheme)?.svg, svgClass) });
  const inputCls = styles.input({ class: clsx((theme as TableSearchTheme)?.input, inputClass) });
  const tableCls = styles.table({ class: clsx(tableClass, (theme as TableSearchTheme)?.table, className) });

  // Handle custom color
  const finalTableClass = color === "custom" && customColor ? clsx(tableCls, customColor) : tableCls;

  const tableSearchCtx: TableSearchType = {
    striped,
    hoverable,
    color
  };

  setContext("tableCtx", tableSearchCtx);
</script>

<div class={rootClass}>
  <div class={innerDivCls}>
    <label for="table-search" class="sr-only">Search</label>
    <div class={searchContainerCls}>
      <div class={svgContainerCls}>
        <svg class={svgCls} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
      <input bind:value={inputValue} type="text" id="table-search" class={inputCls} {placeholder} />
    </div>
    {#if header}
      {@render header()}
    {/if}
  </div>
  <table {...restProps} class={finalTableClass}>
    {#if children}
      {@render children()}
    {/if}
  </table>
  {#if footer}
    {@render footer()}
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TableSearchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1667)
## Props
@prop children
@prop header
@prop footer
@prop divClass
@prop inputValue = $bindable()
@prop striped = false
@prop hoverable = false
@prop customColor = ""
@prop color = "default"
@prop innerDivClass
@prop inputClass
@prop searchClass
@prop svgDivClass
@prop svgClass
@prop tableClass
@prop class: className
@prop placeholder = "Search"
@prop ...restProps
-->
