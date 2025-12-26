<script lang="ts">
  import Pagination from "$lib/pagination/Pagination.svelte";

  const pages = [
    { name: "1", href: "/page/1", active: false },
    { name: "2", href: "/page/2", active: true },
    { name: "3", href: "/page/3", active: false }
  ];

  function handlePrevious() {}
  function handleNext() {}
</script>

<Pagination {pages} previous={handlePrevious} next={handleNext} table />
