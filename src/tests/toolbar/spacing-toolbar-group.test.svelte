<script lang="ts">
  import Toolbar from "$lib/toolbar/Toolbar.svelte";
  import ToolbarGroup from "$lib/toolbar/ToolbarGroup.svelte";
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
</script>

<Toolbar>
  <ToolbarGroup data-testid="spacing-default" spacing="default">
    <ToolbarButton>Button 1</ToolbarButton>
  </ToolbarGroup>

  <ToolbarGroup data-testid="spacing-tight" spacing="tight">
    <ToolbarButton>Button 2</ToolbarButton>
  </ToolbarGroup>

  <ToolbarGroup data-testid="spacing-loose" spacing="loose">
    <ToolbarButton>Button 3</ToolbarButton>
  </ToolbarGroup>
</Toolbar>
