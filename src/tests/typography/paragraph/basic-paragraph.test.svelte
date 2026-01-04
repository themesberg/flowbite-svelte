<script lang="ts">
  import P from "$lib/typography/paragraph/P.svelte";
</script>

<P data-testid="basic-paragraph">
  {#snippet children()}
    This is a basic paragraph.
  {/snippet}
</P>
