<script lang="ts">
  import Toolbar from "$lib/toolbar/Toolbar.svelte";
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
</script>

<Toolbar data-testid="custom-class-toolbar" class="custom-toolbar-class">
  <ToolbarButton>Button</ToolbarButton>
</Toolbar>
