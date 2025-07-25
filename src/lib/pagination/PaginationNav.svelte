<script lang="ts">
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { paginationNav, type PaginationNavTheme } from "./theme";
  import { type PaginationNavProps, PaginationButton } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

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
    classes,
    spanClass,
    tableDivClass,
    ...restProps
  }: PaginationNavProps = $props();

  warnThemeDeprecation("PaginationNav", { prevClass, nextClass, spanClass, tableDivClass }, { prevClass: "prev", nextClass: "next", spanClass: "span", tableDivClass: "tableDiv" });
  const styling = $derived(classes ?? { prev: prevClass, next: nextClass, span: spanClass, tableDiv: tableDivClass });

  const theme = getTheme("paginationNav");

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

  const { base, tableDiv, span, prev, next } = $derived(paginationNav({ layout }));
</script>

<nav aria-label={ariaLabel} {...restProps}>
  {#if layout === "table"}
    <div class={tableDiv({ class: clsx((theme as PaginationNavTheme)?.tableDiv, styling.tableDiv) })}>
      Showing <span class={span({ class: clsx((theme as PaginationNavTheme)?.span, styling.span) })}>{currentPage}</span>
      of
      <span class={span({ class: clsx((theme as PaginationNavTheme)?.span, styling.span) })}>{totalPages}</span>
      Entries
    </div>
  {/if}

  <ul class={base({ class: clsx((theme as PaginationNavTheme)?.base, className) })}>
    <li {...restProps}>
      <PaginationButton onclick={goToPreviousPage} disabled={currentPage === 1} class={prev({ class: clsx((theme as PaginationNavTheme)?.prev, styling.prev) })}>
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
      <PaginationButton onclick={goToNextPage} disabled={currentPage === totalPages} class={next({ class: clsx((theme as PaginationNavTheme)?.next, styling.next) })}>
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
[PaginationNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1164)
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
@prop classes
@prop spanClass
@prop tableDivClass
@prop ...restProps
-->
