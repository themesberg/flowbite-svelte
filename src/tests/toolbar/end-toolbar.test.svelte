<script lang="ts">
  import Toolbar from "$lib/toolbar/Toolbar.svelte";
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
</script>

{#snippet endSnippet()}
  <div data-testid="end-content">End Content</div>
{/snippet}

<Toolbar data-testid="toolbar-with-end" end={endSnippet}>
  <ToolbarButton>Button</ToolbarButton>
</Toolbar>
