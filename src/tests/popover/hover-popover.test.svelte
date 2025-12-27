<script lang="ts">
  import Popover from "$lib/popover/Popover.svelte";

  let isOpen = $state(true);
</script>

<button id="hover-trigger">Hover me</button>

<Popover bind:isOpen trigger="hover" triggeredBy="#hover-trigger">
  <p>Popover with hover trigger</p>
</Popover>
