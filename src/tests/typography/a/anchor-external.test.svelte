<script lang="ts">
  import A from "$lib/typography/a/A.svelte";
</script>

<A href="https://example.com" target="_blank" rel="noopener noreferrer" onclick={(e) => e.preventDefault()}>External link</A>
