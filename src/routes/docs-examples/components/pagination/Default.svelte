<script lang="ts">
  import { PaginationNav } from "flowbite-svelte";
  import { onMount } from "svelte";

  let currentPage = $state(1);
  let isMobile = $state(false);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }

  function checkMobile() {
    isMobile = window.innerWidth <= 640;
  }

  onMount(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  });
</script>

<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} />

{#if !isMobile}
  <PaginationNav {currentPage} {totalPages} visiblePages={7} onPageChange={handlePageChange} />
  <PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} size="large" />
{/if}
