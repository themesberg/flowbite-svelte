<script lang="ts">
  import Popover from "$lib/popover/Popover.svelte";

  let isOpen = $state(true);
</script>

<button id="no-arrow-trigger">Click me</button>

<Popover title="No Arrow" bind:isOpen trigger="click" triggeredBy="#no-arrow-trigger" arrow={false}>
  <p>This popover has no arrow.</p>
</Popover>
