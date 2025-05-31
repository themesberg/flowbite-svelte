<script>
  import Clipboard from "../Clipboard.svelte";
</script>

<Clipboard value="test" embedded={true} data-testid="embedded-button">
  {#snippet children(success)}
    {success ? "Copied!" : "Copy Embedded"}
  {/snippet}
</Clipboard>
