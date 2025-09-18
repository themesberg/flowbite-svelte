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
  currentPage={currentPage} 
  totalPages={totalPages} 
  onPageChange={handlePageChange}
  classes={{ 
    active: "bg-green-100 text-green-600" 
  }} 
/>