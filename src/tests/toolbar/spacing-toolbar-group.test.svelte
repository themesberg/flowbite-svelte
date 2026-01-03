<script lang="ts">
  import Toolbar from "$lib/toolbar/Toolbar.svelte";
  import ToolbarGroup from "$lib/toolbar/ToolbarGroup.svelte";
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
</script>

<Toolbar>
  <ToolbarGroup data-testid="spacing-none" spacing="none">
    <ToolbarButton>Button 1</ToolbarButton>
  </ToolbarGroup>

  <ToolbarGroup data-testid="spacing-sm" spacing="sm">
    <ToolbarButton>Button 2</ToolbarButton>
  </ToolbarGroup>

  <ToolbarGroup data-testid="spacing-md" spacing="md">
    <ToolbarButton>Button 3</ToolbarButton>
  </ToolbarGroup>

  <ToolbarGroup data-testid="spacing-lg" spacing="lg">
    <ToolbarButton>Button 4</ToolbarButton>
  </ToolbarGroup>
</Toolbar>
