<script lang="ts">
  import Toolbar from "$lib/toolbar/Toolbar.svelte";
  import ToolbarGroup from "$lib/toolbar/ToolbarGroup.svelte";
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
</script>

<Toolbar>
  <ToolbarGroup data-testid="padding-none" padding="none">
    <ToolbarButton>None</ToolbarButton>
  </ToolbarGroup>

  <ToolbarGroup data-testid="padding-default" padding="default">
    <ToolbarButton>Default</ToolbarButton>
  </ToolbarGroup>
</Toolbar>
