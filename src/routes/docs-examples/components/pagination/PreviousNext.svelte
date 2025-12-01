<script lang="ts">
  import { PaginationNav, P } from "flowbite-svelte";
  let currentPage = $state(1);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>
<P>Showing {currentPage} of {totalPages} Entries</P>
<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} layout="navigation" />
<PaginationNav size="large" {currentPage} {totalPages} onPageChange={handlePageChange} layout="navigation" />
