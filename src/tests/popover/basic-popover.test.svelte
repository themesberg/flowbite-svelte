<script lang="ts">
  import Popover from "$lib/popover/Popover.svelte";

  let isOpen = $state(true);
</script>

<button id="trigger">Hover me</button>

<Popover title="Popover Title" bind:isOpen trigger="click" triggeredBy="#trigger">
  <p>This is the popover content.</p>
</Popover>
