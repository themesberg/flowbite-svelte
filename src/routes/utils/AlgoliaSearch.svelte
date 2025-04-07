<script lang="ts">
  import "@docsearch/css";
  import docsearch from "@docsearch/js";

  const init = (searchContainer: HTMLElement) => {
    // Algolia docsearch
    docsearch({
      container: searchContainer,
      appId: "JWUQIZ9PGE",
      indexName: "flowbite-svelte-next",
      apiKey: "db6396bd138ab613540d2a2bc07f958d",
      placeholder: "Search documentation"
    });
  };
</script>

<div use:init id="docsearch" class="hidden xl:block ms-3 xl:ps-4"></div>
