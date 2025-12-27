<script lang="ts">
  import Popover from "$lib/popover/Popover.svelte";

  let isOpen = $state(true);
</script>

<button id="no-title-trigger">Click me</button>

<Popover bind:isOpen trigger="click" triggeredBy="#no-title-trigger">
  <p>Popover without a title.</p>
</Popover>
