<script lang="ts">
  import Toolbar from "$lib/toolbar/Toolbar.svelte";
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
</script>

<Toolbar data-testid="embedded-toolbar" embedded={true}>
  <ToolbarButton>Embedded</ToolbarButton>
</Toolbar>

<Toolbar data-testid="non-embedded-toolbar" embedded={false}>
  <ToolbarButton>Non-embedded</ToolbarButton>
</Toolbar>
