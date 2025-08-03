<script lang="ts">
  import { PaginationNav } from "flowbite-svelte";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  let currentPage = $state(1);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>

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

<PaginationNav size="large" {currentPage} {totalPages} onPageChange={handlePageChange} layout="navigation">
  {#snippet prevContent()}
    <ArrowLeftOutline class="h-5 w-5" />
    Previous
  {/snippet}
  {#snippet nextContent()}
    Next
    <ArrowRightOutline class="h-5 w-5" />
  {/snippet}
</PaginationNav>