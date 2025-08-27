<script>
  import { ToolbarButton, Tooltip } from "flowbite-svelte";

  let { children, name, ...restProps } = $props();
</script>

<ToolbarButton {name} size="lg" target="_blank" rel="noreferrer" {...restProps}>
  {@render children()}
</ToolbarButton>
<Tooltip class="dark:bg-gray-900" placement="bottom">{name}</Tooltip>
