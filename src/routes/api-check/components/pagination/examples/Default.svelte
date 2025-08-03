<script lang="ts">
  import { PaginationNav } from "flowbite-svelte";

  let currentPage = $state(1);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>

<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} />

<PaginationNav {currentPage} {totalPages} visiblePages={7} onPageChange={handlePageChange} />

<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} size="large" />