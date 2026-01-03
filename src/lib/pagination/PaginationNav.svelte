<script lang="ts">
  import clsx from "clsx";
  import { paginationNav } from "./theme";
  import type { PaginationNavProps, PaginationContextType } from "$lib";
  import PaginationButton from "./PaginationButton.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { setPaginationContext } from "$lib/context";

  function paginationRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  let {
    currentPage = 1,
    totalPages = 1,
    visiblePages = 5, // New prop to control visible pages
    onPageChange,
    prevContent,
    nextContent,
    layout = "pagination",
    nextLabel = "Next",
    previousLabel = "Previous",
    ariaLabel = "Page navigation",
    size = "default",
    class: className,
    classes,
    ...restProps
  }: PaginationNavProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("paginationNav"));

  // Create context object
  const ctx: PaginationContextType = {
    get group() {
      return true;
    },
    get size() {
      return size;
    },
    get table() {
      return layout === "table";
    }
  };

  // Set context during initialization
  setPaginationContext(ctx);

  // Calculate visible pages range using Svelte 5 derived values
  const halfVisiblePages = $derived(Math.floor(visiblePages / 2));
  const lastPage = $derived(Math.min(Math.max(layout === "pagination" ? currentPage + halfVisiblePages : currentPage + halfVisiblePages * 2, visiblePages), totalPages));
  const firstPage = $derived(Math.max(1, lastPage - visiblePages + 1));

  // Generate array of page numbers to display
  const pageNumbers = $derived(paginationRange(firstPage, lastPage));

  // Navigation helper functions
  function goToNextPage() {
    onPageChange(Math.min(currentPage + 1, totalPages));
  }

  function goToPreviousPage() {
    onPageChange(Math.max(currentPage - 1, 1));
  }

  const { base, tableInfo, pageNumber, prev, next } = $derived(paginationNav({ layout }));
</script>

<nav aria-label={ariaLabel} data-scope="pagination-nav" {...restProps}>
  {#if layout === "table"}
    <div data-part="table-info" class={tableInfo({ class: clsx(theme?.tableInfo, styling?.tableInfo) })}>
      Showing <span data-part="page-number" class={pageNumber({ class: clsx(theme?.pageNumber, styling?.pageNumber) })}>{currentPage}</span>
      of
      <span data-part="page-number" class={pageNumber({ class: clsx(theme?.pageNumber, styling?.pageNumber) })}>{totalPages}</span>
      Entries
    </div>
  {/if}

  <ul data-part="base" class={base({ class: clsx(theme?.base, className) })}>
    <li>
      <PaginationButton data-part="prev" onclick={goToPreviousPage} disabled={currentPage === 1} class={prev({ class: clsx(theme?.prev, styling?.prev) })}>
        {#if prevContent}
          {@render prevContent()}
        {:else}
          {previousLabel}
        {/if}
      </PaginationButton>
    </li>
    {#if layout === "pagination" && pageNumbers.length > 0}
      {#each pageNumbers as page (page)}
        <li aria-current={page === currentPage ? "page" : undefined}>
          <PaginationButton active={page === currentPage} onclick={() => onPageChange(page)}>
            {page}
          </PaginationButton>
        </li>
      {/each}
    {/if}
    <li>
      <PaginationButton data-part="next" onclick={goToNextPage} disabled={currentPage === totalPages} class={next({ class: clsx(theme?.next, styling?.next) })}>
        {#if nextContent}
          {@render nextContent()}
        {:else}
          {nextLabel}
        {/if}
      </PaginationButton>
    </li>
  </ul>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PaginationNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1162)
## Props
@prop currentPage = 1
@prop totalPages = 1
@prop visiblePages = 5
@prop onPageChange
@prop prevContent
@prop nextContent
@prop layout = "pagination"
@prop nextLabel = "Next"
@prop previousLabel = "Previous"
@prop ariaLabel = "Page navigation"
@prop size = "default"
@prop class: className
@prop classes
@prop ...restProps
-->
