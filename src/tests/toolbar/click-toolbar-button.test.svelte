<script lang="ts">
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";

  interface Props {
    onclick?: () => void;
  }

  let { onclick }: Props = $props();
</script>

<ToolbarButton data-testid="clickable-button" {onclick}>Click Me</ToolbarButton>
