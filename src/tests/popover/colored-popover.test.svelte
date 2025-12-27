<script lang="ts">
  import Popover from "$lib/popover/Popover.svelte";

  let isOpen = $state(true);
</script>

<button id="colored-trigger">Click me</button>

<Popover title="Custom Color" bind:isOpen trigger="click" triggeredBy="#colored-trigger" color="blue" placement="bottom">
  <p>This popover has a custom blue color.</p>
</Popover>
