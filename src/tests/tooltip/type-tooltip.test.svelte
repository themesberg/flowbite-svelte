<script lang="ts">
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
</script>

<button data-testid="dark-trigger">Dark Type</button>
<Tooltip type="dark" data-testid="dark-tooltip">Dark tooltip</Tooltip>

<button data-testid="light-trigger">Light Type</button>
<Tooltip type="light" data-testid="light-tooltip">Light tooltip</Tooltip>

<button data-testid="auto-trigger">Auto Type</button>
<Tooltip type="auto" data-testid="auto-tooltip">Auto tooltip</Tooltip>
