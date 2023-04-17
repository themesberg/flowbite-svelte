<script>
  import ToolbarButton from '$lib/toolbar/ToolbarButton.svelte';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';

  /** @type {string} */
  export let name;
</script>

<ToolbarButton {name} size="lg" target="_blank" rel="noreferrer" {...$$restProps}>
  <slot />
</ToolbarButton>
<Tooltip class="dark:bg-gray-900" placement="bottom">{name}</Tooltip>
