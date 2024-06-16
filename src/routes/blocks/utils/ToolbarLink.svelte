<script>
  import { ToolbarButton, Tooltip } from 'flowbite-svelte';
  /** @type {string} */
  export let name;
</script>

<ToolbarButton {name} size="lg" target="_blank" rel="noreferrer" {...$$restProps}>
  <slot />
</ToolbarButton>
<Tooltip class="dark:bg-gray-900" placement="bottom">{name}</Tooltip>
