<!-- src/routes/utilities/[slug]/+page.svelte -->
<script>
  export let data;
</script>

<svelte:component this={data.content} />
