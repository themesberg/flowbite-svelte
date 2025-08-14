---
layout: componentLayout
title: Svelte Advanced Tables - Flowbite Svelte Blocks
breadcrumb_title: Advanced Tables
no_of_components: 1 free components
dir: application
pkg: Flowbite Svelte Blocks
description: Get started with a collection of advanced table components based on multiple layouts and styles to show a complex set of data using rows and columns built with Tailwind CSS.
---

## Default table

Use this free example of a table component with a search bar, filter dropdown, and a dataset of rows and columns to show complex data in your application.

```svelte example
<script lang="ts">
  import { TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch, Button, Dropdown, DropdownItem, Checkbox, ButtonGroup, List, Li } from "flowbite-svelte";
  import { Section } from "flowbite-svelte-blocks";
  import paginationData from "../utils/advancedTable.json";
  import { PlusOutline, ChevronDownOutline, FilterSolid, ChevronRightOutline, ChevronLeftOutline } from "flowbite-svelte-icons";

  let divClass = "bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden";
  let innerDivClass = "flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4";
  let searchClass = "w-full md:w-1/2 relative";

  let searchTerm = $state("");
  let currentPosition = $state(0);
  const itemsPerPage = 10;
  const showPage = 5;
  let totalPages = $state(0);
  let pagesToShow: number[] = $state([]);
  let totalItems = paginationData.length;
  let startPage: number;
  let endPage: number = $state(10);

  const updateDataAndPagination = () => {
    let currentPageItems = paginationData.slice(currentPosition, currentPosition + itemsPerPage);
    renderPagination(currentPageItems.length);
  };

  const loadNextPage = () => {
    if (currentPosition + itemsPerPage < paginationData.length) {
      currentPosition += itemsPerPage;
      updateDataAndPagination();
    }
  };

  const loadPreviousPage = () => {
    if (currentPosition - itemsPerPage >= 0) {
      currentPosition -= itemsPerPage;
      updateDataAndPagination();
    }
  };

  const renderPagination = (totalItems: number) => {
    totalPages = Math.ceil(paginationData.length / itemsPerPage);
    const currentPage = Math.ceil((currentPosition + 1) / itemsPerPage);

    startPage = currentPage - Math.floor(showPage / 2);
    startPage = Math.max(1, startPage);
    endPage = Math.min(startPage + showPage - 1, totalPages);

    pagesToShow = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const goToPage = (pageNumber: number) => {
    currentPosition = (pageNumber - 1) * itemsPerPage;
    updateDataAndPagination();
  };

  let startRange = $derived(currentPosition + 1);
  let endRange = $derived(Math.min(currentPosition + itemsPerPage, totalItems));

  $effect(() => {
    // Call renderPagination when the component initially mounts
    renderPagination(paginationData.length);
  });

  let currentPageItems = $derived(paginationData.slice(currentPosition, currentPosition + itemsPerPage));
  let filteredItems = $derived(paginationData.filter((item) => item.product_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
</script>

<Section name="advancedTable" sectionClass="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
  <TableSearch placeholder="Search" hoverable={true} bind:inputValue={searchTerm} {divClass} {innerDivClass} {searchClass}>
    {#snippet header()}
      <div class="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-y-0 md:space-x-3">
        <Button>
          <PlusOutline class="mr-2 h-3.5 w-3.5" />Add product
        </Button>
        <Button color="alternative">Actions<ChevronDownOutline class="ml-2 h-3 w-3 " /></Button>
        <Dropdown simple class="w-44 divide-y divide-gray-100">
          <DropdownItem>Mass Edit</DropdownItem>
          <DropdownItem>Delete all</DropdownItem>
        </Dropdown>
        <Button color="alternative">Filter<FilterSolid class="ml-2 h-3 w-3 " /></Button>
        <Dropdown class="w-48 space-y-2 p-3 text-sm">
          <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
          <List tag="dl">
            <Li>
              <Checkbox>Apple (56)</Checkbox>
            </Li>
            <Li>
              <Checkbox>Microsoft (16)</Checkbox>
            </Li>
            <Li>
              <Checkbox>Razor (49)</Checkbox>
            </Li>
            <Li>
              <Checkbox>Nikon (12)</Checkbox>
            </Li>
            <Li>
              <Checkbox>BenQ (74)</Checkbox>
            </Li>
          </List>
        </Dropdown>
      </div>
    {/snippet}
    <TableHead>
      <TableHeadCell class="px-4 py-3" scope="col">Product name</TableHeadCell>
      <TableHeadCell class="px-4 py-3" scope="col">Brand</TableHeadCell>
      <TableHeadCell class="px-4 py-3" scope="col">Category</TableHeadCell>
      <TableHeadCell class="px-4 py-3" scope="col">Price</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      {#if searchTerm !== ""}
        {#each filteredItems as item (item.id)}
          <TableBodyRow>
            <TableBodyCell class="px-4 py-3">{item.product_name}</TableBodyCell>
            <TableBodyCell class="px-4 py-3">{item.brand}</TableBodyCell>
            <TableBodyCell class="px-4 py-3">{item.category}</TableBodyCell>
            <TableBodyCell class="px-4 py-3">{item.price}</TableBodyCell>
          </TableBodyRow>
        {/each}
      {:else}
        {#each currentPageItems as item (item.id)}
          <TableBodyRow>
            <TableBodyCell class="px-4 py-3">{item.product_name}</TableBodyCell>
            <TableBodyCell class="px-4 py-3">{item.brand}</TableBodyCell>
            <TableBodyCell class="px-4 py-3">{item.category}</TableBodyCell>
            <TableBodyCell class="px-4 py-3">{item.price}</TableBodyCell>
          </TableBodyRow>
        {/each}
      {/if}
    </TableBody>
    {#snippet footer()}
      <div class="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span class="font-semibold text-gray-900 dark:text-white">{startRange}-{endRange}</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white">{totalItems}</span>
        </span>
        <ButtonGroup>
          <Button onclick={loadPreviousPage} disabled={currentPosition === 0}><ChevronLeftOutline size="xs" class="m-1.5" /></Button>
          {#each pagesToShow as pageNumber}
            <Button onclick={() => goToPage(pageNumber)}>{pageNumber}</Button>
          {/each}
          <Button onclick={loadNextPage} disabled={totalPages === endPage}><ChevronRightOutline size="xs" class="m-1.5" /></Button>
        </ButtonGroup>
      </div>
    {/snippet}
  </TableSearch>
</Section>
```
