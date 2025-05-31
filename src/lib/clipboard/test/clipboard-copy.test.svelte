<script>
  import Clipboard from '../Clipboard.svelte';
</script>

<Clipboard value="Hello, World!" data-testid="copy-button">
  {#snippet children(success)}
    {success ? 'Copied!' : 'Copy'}
  {/snippet}
</Clipboard>
