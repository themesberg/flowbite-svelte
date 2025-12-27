<script lang="ts">
  import PaginationNav from "$lib/pagination/PaginationNav.svelte";

  let currentPage = $state(1);

  function handlePageChange(page: number) {
    currentPage = page;
  }
</script>

<PaginationNav {currentPage} totalPages={5} onPageChange={handlePageChange} />
<div data-testid="current-page">{currentPage}</div>
