<script>
  import { Clipboard } from "$lib";

  let clickCount = 0;

  function handleClick() {
    clickCount++;
    // You can test preventDefault by uncommenting this:
    // event.preventDefault();
  }
</script>

<Clipboard value="test" onclick={handleClick} data-testid="custom-handler-button">
  {#snippet children(success)}
    {success ? "Copied!" : `Copy (${clickCount})`}
  {/snippet}
</Clipboard>
