<script lang="ts">
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
</script>

<button data-testid="click-trigger">Click me</button>
<Tooltip trigger="click" data-testid="click-tooltip">Tooltip on click</Tooltip>
