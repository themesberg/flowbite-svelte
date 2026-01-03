<script lang="ts">
  import Toolbar from "$lib/toolbar/Toolbar.svelte";
  import ToolbarGroup from "$lib/toolbar/ToolbarGroup.svelte";
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
</script>

<Toolbar>
  <ToolbarGroup data-testid="position-start" position="first">
    <ToolbarButton>Start</ToolbarButton>
  </ToolbarGroup>

  <ToolbarGroup data-testid="position-middle" position="middle">
    <ToolbarButton>Middle</ToolbarButton>
  </ToolbarGroup>

  <ToolbarGroup data-testid="position-end" position="last">
    <ToolbarButton>End</ToolbarButton>
  </ToolbarGroup>
</Toolbar>
