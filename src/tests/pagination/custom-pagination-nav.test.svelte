<script lang="ts">
  import PaginationNav from "$lib/pagination/PaginationNav.svelte";

  let currentPage = $state(5);

  function handlePageChange(page: number) {
    currentPage = page;
  }
</script>

<PaginationNav {currentPage} totalPages={10} onPageChange={handlePageChange} previousLabel="Prev" nextLabel="Next Page">
  {#snippet prevContent()}
    <span>←</span>
  {/snippet}
  {#snippet nextContent()}
    <span>→</span>
  {/snippet}
</PaginationNav>
