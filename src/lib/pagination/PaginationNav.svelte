<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { paginationnav } from "./theme";
  import { type PaginationNavProps, PaginationButton } from "$lib";

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
    prevClass,
    nextClass,
    layout = "pagination",
    nextLabel = "Next",
    previousLabel = "Previous",
    ariaLabel = "Page navigation",
    size = "default",
    class: className,
    spanClass,
    tableDivClass,
    ...restProps
  }: PaginationNavProps = $props();

  // Set context values for child components
  setContext("group", true);
  setContext("size", size);
  setContext("table", layout === "table");

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

  const { base, tableDiv, tableSpan, prevItem, nextItem } = $derived(paginationnav({ layout }));
</script>

<nav aria-label={ariaLabel} {...restProps}>
  {#if layout === "table"}
    <div class={twMerge(tableDiv(), clsx(tableDivClass))}>
      Showing <span class={twMerge(tableSpan(), clsx(spanClass))}>{currentPage}</span>
      of
      <span class={twMerge(tableSpan(), clsx(spanClass))}>{totalPages}</span>
      Entries
    </div>
  {/if}

  <ul class={twMerge(base(), clsx(className))}>
    <li {...restProps}>
      <PaginationButton onclick={goToPreviousPage} disabled={currentPage === 1} class={twMerge(prevItem(), clsx(prevClass))}>
        {#if prevContent}
          {@render prevContent()}
        {:else}
          {previousLabel}
        {/if}
      </PaginationButton>
    </li>
    {#if layout === "pagination" && pageNumbers.length > 0}
      {#each pageNumbers as page}
        <li aria-current={page === currentPage ? "page" : undefined}>
          <PaginationButton active={page === currentPage} onclick={() => onPageChange(page)}>
            {page}
          </PaginationButton>
        </li>
      {/each}
    {/if}
    <li {...restProps}>
      <PaginationButton onclick={goToNextPage} disabled={currentPage === totalPages} class={twMerge(nextItem(), clsx(nextClass))}>
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
[PaginationNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1172)
## Props
@prop currentPage = 1
@prop totalPages = 1
@prop visiblePages = 5
@prop onPageChange
@prop prevContent
@prop nextContent
@prop prevClass
@prop nextClass
@prop layout = "pagination"
@prop nextLabel = "Next"
@prop previousLabel = "Previous"
@prop ariaLabel = "Page navigation"
@prop size = "default"
@prop class: className
@prop spanClass
@prop tableDivClass
@prop ...restProps
-->
