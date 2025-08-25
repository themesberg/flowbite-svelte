<script>
  import { Toolbar, ToolbarButton, ToolbarGroup } from "flowbite-svelte";
  import { HomeOutline, EnvelopeOutline, ImageOutline, CogOutline } from "flowbite-svelte-icons";
</script>

<Toolbar color="green">
  <ToolbarGroup>
    <ToolbarButton color="green"><HomeOutline class="h-6 w-6" /></ToolbarButton>
    <ToolbarButton color="green"><EnvelopeOutline class="h-6 w-6" /></ToolbarButton>
    <ToolbarButton color="green"><ImageOutline class="h-6 w-6" /></ToolbarButton>
  </ToolbarGroup>
  <ToolbarGroup>
    <ToolbarButton color="green"><HomeOutline class="h-6 w-6" /></ToolbarButton>
    <ToolbarButton color="green"><EnvelopeOutline class="h-6 w-6" /></ToolbarButton>
    <ToolbarButton color="green"><ImageOutline class="h-6 w-6" /></ToolbarButton>
  </ToolbarGroup>
  {#snippet end()}
    <ToolbarButton color="green"><CogOutline class="h-6 w-6" /></ToolbarButton>
  {/snippet}
</Toolbar>
