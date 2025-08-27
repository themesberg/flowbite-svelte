<script>
  import { Toolbar, ToolbarButton, ToolbarGroup } from "flowbite-svelte";
  import { HomeOutline, EnvelopeOutline, ImageOutline } from "flowbite-svelte-icons";
</script>

<Toolbar color="red">
  <ToolbarButton color="red"><HomeOutline class="h-6 w-6" /></ToolbarButton>
  <ToolbarButton color="red"><EnvelopeOutline class="h-6 w-6" /></ToolbarButton>
  <ToolbarButton color="red"><ImageOutline class="h-6 w-6" /></ToolbarButton>
</Toolbar>
<Toolbar color="blue">
  <ToolbarButton color="blue"><HomeOutline class="h-6 w-6" /></ToolbarButton>
  <ToolbarButton color="blue"><EnvelopeOutline class="h-6 w-6" /></ToolbarButton>
  <ToolbarButton color="blue"><ImageOutline class="h-6 w-6" /></ToolbarButton>
</Toolbar>
