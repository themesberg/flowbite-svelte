<script lang="ts">
  import { PaginationNav } from "$lib";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };

  // new pagination
  let currentPage = $state(1);
  const totalPages = 100;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>

<h1 class="my-4 text-3xl">Pagination</h1>

<p>The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.</p>

<h2 class="my-4 text-2xl">Pagination</h2>

<div class="my-4 flex flex-col items-center justify-center gap-3 rounded border border-gray-200 p-4 dark:border-gray-600">
  <PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} />
  <PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} size="large" />
</div>

<h2 class="my-4 text-2xl">Pagination with icons</h2>

<div class="my-4 flex flex-col items-center justify-center gap-3 rounded border border-gray-200 p-4 dark:border-gray-600">
  <div class="flex flex-col items-center justify-center gap-3">
    <PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange}>
      {#snippet prevContent()}
        <span class="sr-only">Previous</span>
        <ArrowLeftOutline class="h-5 w-5" />
      {/snippet}
      {#snippet nextContent()}
        <span class="sr-only">Next</span>
        <ArrowRightOutline class="h-5 w-5" />
      {/snippet}
    </PaginationNav>
  </div>
</div>

<h2 class="my-4 text-2xl">Pagination Previous and next</h2>

<div class="my-4 flex flex-col items-center justify-center gap-3 rounded border border-gray-200 p-4 dark:border-gray-600">
  <PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} layout="navigation" />
</div>

<h2 class="my-4 text-2xl">Pagination - Previous and next with icons</h2>

<div class="my-4 flex flex-col items-center justify-center gap-3 rounded border border-gray-200 p-4 dark:border-gray-600">
  <PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} layout="navigation">
    {#snippet prevContent()}
      <ArrowLeftOutline class="h-5 w-5" />
      Previous
    {/snippet}
    {#snippet nextContent()}
      Next
      <ArrowRightOutline class="h-5 w-5" />
    {/snippet}
  </PaginationNav>
</div>

<h2 class="my-4 text-2xl">Pagination Table data pagination</h2>

<div class="my-4 flex flex-col items-center justify-center gap-3 rounded border border-gray-200 p-4 dark:border-gray-600">
  <PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} layout="table" />
</div>

<h2 class="my-4 text-2xl">Pagination Table data pagination with icons</h2>

<div class="my-4 flex flex-col items-center justify-center gap-3 rounded border border-gray-200 p-4 dark:border-gray-600">
  <PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} layout="table">
    {#snippet prevContent()}
      <ArrowLeftOutline class="h-5 w-5" />
      Previous
    {/snippet}
    {#snippet nextContent()}
      Next
      <ArrowRightOutline class="h-5 w-5" />
    {/snippet}
  </PaginationNav>
</div>
