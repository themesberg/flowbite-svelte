<script lang="ts">
  import Pagination from "$lib/pagination/Pagination.svelte";

  const pages = [
    { name: "1", href: "#page-1", active: true },
    { name: "2", href: "#page-2", active: false }
  ];

  function handlePrevious() {}
  function handleNext() {}
</script>

<Pagination {pages} previous={handlePrevious} next={handleNext} size="large">
  {#snippet prevContent()}
    <span>Prev</span>
  {/snippet}
  {#snippet nextContent()}
    <span>Next Page</span>
  {/snippet}
</Pagination>
