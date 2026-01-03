<script lang="ts">
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
</script>

<button data-testid="primary-trigger">Primary</button>
<Tooltip color="primary" data-testid="primary-tooltip">Primary color</Tooltip>

<button data-testid="blue-trigger">Blue</button>
<Tooltip color="blue" data-testid="blue-tooltip">Blue color</Tooltip>

<button data-testid="red-trigger">Red</button>
<Tooltip color="red" data-testid="red-tooltip">Red color</Tooltip>
