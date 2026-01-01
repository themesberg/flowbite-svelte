<script lang="ts">
  import { setTableContext } from "$lib/context";
  import type { TableSearchProps, TableContextType } from "$lib/types";
  import clsx from "clsx";
  import { tableSearch } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let {
    children,
    header,
    footer,
    inputValue = $bindable(),
    striped = false,
    hoverable = false,
    customColor = "",
    color = "default",
    class: className,
    classes,
    placeholder = "Search",
    ...restProps
  }: TableSearchProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("tableSearch"));

  const themeColor = $derived(color === "custom" ? "default" : (color as "default" | "blue" | "green" | "red" | "yellow" | "purple" | "indigo" | "pink"));

  const { root, inner, search, iconContainer, icon, input, table } = $derived(tableSearch({ color: themeColor, striped, hoverable }));

  const tableCls = $derived(table({ class: clsx(theme?.table, styling?.table) }));

  // Handle custom color
  const finalTableClass = $derived(color === "custom" && customColor ? clsx(tableCls, customColor) : tableCls);

  const tableSearchCtx = $derived<TableContextType>({
    striped,
    hoverable,
    color: themeColor
  });

  $effect(() => {
    setTableContext(tableSearchCtx);
  });
</script>

<div class={root({ class: clsx(theme?.root, className) })} data-scope="table-search" data-part="root">
  <div class={inner({ class: clsx(theme?.inner, styling?.inner) })} data-part="inner">
    <label for="table-search" class="sr-only">Search</label>
    <div class={search({ class: clsx(theme?.search, styling?.search) })} data-part="search">
      <div class={iconContainer({ class: clsx(theme?.iconContainer, styling?.iconContainer) })} data-part="icon-container">
        <svg class={icon({ class: clsx(theme?.icon, styling?.icon) })} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-part="icon">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
      <input bind:value={inputValue} type="text" id="table-search" class={input({ class: clsx(theme?.input, styling?.input) })} {placeholder} data-part="input" />
    </div>
    {#if header}
      {@render header()}
    {/if}
  </div>
  <table {...restProps} class={finalTableClass} data-part="table">
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
[TableSearchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1691)
## Props
@prop children
@prop header
@prop footer
@prop inputValue = $bindable()
@prop striped = false
@prop hoverable = false
@prop customColor = ""
@prop color = "default"
@prop class: className
@prop classes
@prop placeholder = "Search"
@prop ...restProps
-->
