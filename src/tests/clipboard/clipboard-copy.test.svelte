<script lang="ts">
  import { Clipboard } from "$lib";
</script>

<Clipboard value="Hello, World!" data-testid="copy-button">
  {#snippet children(success)}
    {success ? "Copied!" : "Copy"}
  {/snippet}
</Clipboard>
