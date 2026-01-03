<script lang="ts">
  import Toolbar from "$lib/toolbar/Toolbar.svelte";
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
</script>

<Toolbar data-testid="color-primary" color="primary">
  <ToolbarButton>Primary</ToolbarButton>
</Toolbar>

<Toolbar data-testid="color-blue" color="blue">
  <ToolbarButton>Blue</ToolbarButton>
</Toolbar>

<Toolbar data-testid="color-dark" color="dark">
  <ToolbarButton>Dark</ToolbarButton>
</Toolbar>

<Toolbar data-testid="color-green" color="green">
  <ToolbarButton>Green</ToolbarButton>
</Toolbar>

<Toolbar data-testid="color-red" color="red">
  <ToolbarButton>Red</ToolbarButton>
</Toolbar>
