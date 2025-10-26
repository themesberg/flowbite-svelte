<script lang="ts">
  import { setContext } from "svelte";
  import type { TableSearchProps, TableSearchType } from "$lib/types";
  import clsx from "clsx";
  import { tableSearch } from "./theme";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, header, footer, divClass, inputValue = $bindable(), striped = false, hoverable = false, customColor = "", color = "default", innerDivClass, inputClass, searchClass, svgDivClass, svgClass, tableClass, class: className, classes, placeholder = "Search", ...restProps }: TableSearchProps = $props();

  warnThemeDeprecation("TableSearch", { divClass, innerDivClass, inputClass, searchClass, svgDivClass, svgClass, tableClass }, { divClass: "root", innerDivClass: "inner", inputClass: "input", searchClass: "search", svgDivClass: "svgDiv", svgClass: "svg", tableClass: "table" });
  const styling = $derived(
    classes ?? {
      root: divClass,
      inner: innerDivClass,
      input: inputClass,
      search: searchClass,
      svgDiv: svgDivClass,
      svg: svgClass,
      table: tableClass
    }
  );

  const theme = getTheme("tableSearch");

  // Generate theme styles - handle custom color case
  const themeColor = color === "custom" ? "default" : (color as "default" | "blue" | "green" | "red" | "yellow" | "purple" | "indigo" | "pink");

  const { root, inner, search, svgDiv, svg, input, table } = $derived(tableSearch({ color: themeColor, striped, hoverable }));

  const tableCls = $derived(table({ class: clsx(tableClass, theme?.table, className) }));

  // Handle custom color
  const finalTableClass = $derived(color === "custom" && customColor ? clsx(tableCls, customColor) : tableCls);

  const tableSearchCtx: TableSearchType = {
    striped,
    hoverable,
    color
  };

  setContext("tableCtx", tableSearchCtx);
</script>

<div class={root({ class: clsx(theme?.root, styling.root) })}>
  <div class={inner({ class: clsx(theme?.inner, styling.inner) })}>
    <label for="table-search" class="sr-only">Search</label>
    <div class={search({ class: clsx(theme?.search, styling.search) })}>
      <div class={svgDiv({ class: clsx(theme?.svgDiv, styling.svgDiv) })}>
        <svg class={svg({ class: clsx(theme?.svg, styling.svg) })} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
      <input bind:value={inputValue} type="text" id="table-search" class={input({ class: clsx(theme?.input, styling.input) })} {placeholder} />
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
[TableSearchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1702)
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
@prop classes
@prop placeholder = "Search"
@prop ...restProps
-->
