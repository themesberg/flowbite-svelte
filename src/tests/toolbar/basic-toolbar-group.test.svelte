<script lang="ts">
  import Toolbar from "$lib/toolbar/Toolbar.svelte";
  import ToolbarGroup from "$lib/toolbar/ToolbarGroup.svelte";
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
</script>

<Toolbar>
  <ToolbarGroup data-testid="basic-toolbar-group">
    <ToolbarButton>Button 1</ToolbarButton>
    <ToolbarButton>Button 2</ToolbarButton>
  </ToolbarGroup>
</Toolbar>
