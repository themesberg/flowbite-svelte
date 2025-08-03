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

<PaginationNav visiblePages={7} {currentPage} {totalPages} onPageChange={handlePageChange}>
  {#snippet prevContent()}
    <span class="sr-only">Previous</span>
    <ArrowLeftOutline class="h-5 w-5" />
  {/snippet}
  {#snippet nextContent()}
    <span class="sr-only">Next</span>
    <ArrowRightOutline class="h-5 w-5" />
  {/snippet}
</PaginationNav>