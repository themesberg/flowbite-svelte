<script lang="ts">
  import PaginationNav from "$lib/pagination/PaginationNav.svelte";

  let currentPage = $state(1);

  function handlePageChange(page: number) {
    currentPage = page;
  }
</script>

<PaginationNav {currentPage} totalPages={10} onPageChange={handlePageChange} layout="table" />
