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

<PaginationNav
  {currentPage}
  {totalPages}
  onPageChange={handlePageChange}
  classes={{
    active: "bg-green-100 dark:bg-green-700 text-green-600 dark:text-white"
  }}
/>
