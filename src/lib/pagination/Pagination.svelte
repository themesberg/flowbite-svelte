<script lang="ts">
  import { pagination } from "./theme";
  import PaginationItem from "./PaginationItem.svelte";
  import type { PaginationProps, PaginationContextType } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";
  import { setPaginationContext } from "$lib/context";
  import clsx from "clsx";

  let { pages = [], previous, next, prevContent, nextContent, table, size, ariaLabel, ...restProps }: PaginationProps = $props();

  const theme = $derived(getTheme("pagination"));

  // Create context object
  const ctx: PaginationContextType = {
    get group() {
      return true;
    },
    get table() {
      return table;
    },
    get size() {
      return size;
    }
  };

  // Set context during initialization
  setPaginationContext(ctx);

  const paginationCls = $derived(pagination({ table, size, class: clsx(theme) }));
</script>

<nav aria-label={ariaLabel}>
  <ul class={paginationCls}>
    {#if typeof previous === "function"}
      <li {...restProps}>
        <PaginationItem {size} onclick={() => previous()} class={table ? "rounded-none rounded-l" : "rounded-none rounded-s-base"}>
          {#if prevContent}
            {@render prevContent()}
          {:else}
            Previous
          {/if}
        </PaginationItem>
      </li>
    {/if}
    {#each pages as { name, href, active, size }, index (href ?? index)}
      <li {...restProps}>
        <PaginationItem {size} {active} {href}>
          {name}
        </PaginationItem>
      </li>
    {/each}
    {#if typeof next === "function"}
      <li {...restProps}>
        <PaginationItem {size} onclick={() => next()} class={table ? "rounded-none rounded-r" : "rounded-e-base rounded-none"}>
          {#if nextContent}
            {@render nextContent()}
          {:else}
            Next
          {/if}
        </PaginationItem>
      </li>
    {/if}
  </ul>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PaginationProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1296)
## Props
@prop pages = []
@prop previous
@prop next
@prop prevContent
@prop nextContent
@prop table
@prop size
@prop ariaLabel
@prop ...restProps
-->
