<script lang="ts">
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
  import Tooltip from "$lib/tooltip/Tooltip.svelte";

  let { children, name, class: className, ...restProps } = $props();
</script>

<ToolbarButton {name} size="lg" target="_blank" rel="noreferrer" {...restProps} class={className}>
  {@render children()}
</ToolbarButton>
<Tooltip class="dark:bg-gray-900" placement="bottom">{name}</Tooltip>
