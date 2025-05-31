<script>
  import Clipboard from "../Clipboard.svelte";
</script>

<Clipboard value="" data-testid="empty-button">
  {#snippet children(success)}
    {success ? "Copied!" : "Copy Empty"}
  {/snippet}
</Clipboard>
