<script>
  import Clipboard from "../Clipboard.svelte";
</script>

<Clipboard value="Hello &#x26; World" data-testid="hex-button">
  {#snippet children(success)}
    {success ? "Copied!" : "Copy Hex"}
  {/snippet}
</Clipboard>
