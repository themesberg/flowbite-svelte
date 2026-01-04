<script lang="ts">
  import A from "$lib/typography/a/A.svelte";
</script>

<A href="https://example.com" onclick={(e) => e.preventDefault()} data-sveltekit-preload-data="off">Link content</A>
