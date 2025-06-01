<script>
  import { Clipboard } from "$lib";
</script>

<Clipboard value="" data-testid="empty-button">
  {#snippet children(success)}
    {success ? "Copied!" : "Copy Empty"}
  {/snippet}
</Clipboard>
