<script lang="ts">
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
</script>

<button data-testid="arrow-trigger">With Arrow</button>
<Tooltip arrow={true} data-testid="arrow-tooltip">Tooltip with arrow</Tooltip>

<button data-testid="no-arrow-trigger">No Arrow</button>
<Tooltip arrow={false} data-testid="no-arrow-tooltip">Tooltip without arrow</Tooltip>
