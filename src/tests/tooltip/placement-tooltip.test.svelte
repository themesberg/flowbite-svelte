<script lang="ts">
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
</script>

<button data-testid="top-trigger">Top</button>
<Tooltip placement="top" data-testid="top-tooltip">Top placement</Tooltip>

<button data-testid="bottom-trigger">Bottom</button>
<Tooltip placement="bottom" data-testid="bottom-tooltip">Bottom placement</Tooltip>

<button data-testid="left-trigger">Left</button>
<Tooltip placement="left" data-testid="left-tooltip">Left placement</Tooltip>

<button data-testid="right-trigger">Right</button>
<Tooltip placement="right" data-testid="right-tooltip">Right placement</Tooltip>
