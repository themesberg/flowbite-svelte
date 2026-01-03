<script lang="ts">
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
</script>

<ToolbarButton data-testid="button-with-name" name="Button Name">Content</ToolbarButton>

<ToolbarButton data-testid="button-with-aria-label" aria-label="Custom Label">Content</ToolbarButton>

<ToolbarButton data-testid="button-with-aria-expanded" aria-expanded="true">Expanded</ToolbarButton>
