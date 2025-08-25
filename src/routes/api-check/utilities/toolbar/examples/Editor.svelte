<script>
  import { Textarea, Toolbar, ToolbarGroup, ToolbarButton, Button } from "flowbite-svelte";
  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PaperPlaneOutline } from "flowbite-svelte-icons";
</script>

<form>
  <label for="editor" class="sr-only">Publish post</label>
  <Textarea id="editor" rows={8} class="mb-4" placeholder="Write a comment">
    {#snippet header()}
      <Toolbar embedded>
        <ToolbarGroup>
          <ToolbarButton name="Attach file"><PaperClipOutline class="h-5 w-5 rotate-45" /></ToolbarButton>
          <ToolbarButton name="Embed map"><MapPinAltSolid class="h-5 w-5" /></ToolbarButton>
          <ToolbarButton name="Upload image"><ImageOutline class="h-5 w-5" /></ToolbarButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton name="Format code"><CodeOutline class="h-5 w-5" /></ToolbarButton>
          <ToolbarButton name="Add emoji"><FaceGrinOutline class="h-5 w-5" /></ToolbarButton>
        </ToolbarGroup>
        {#snippet end()}
          <ToolbarButton name="send"><PaperPlaneOutline class="h-5 w-5 rotate-45" /></ToolbarButton>
        {/snippet}
      </Toolbar>
    {/snippet}
  </Textarea>
  <Button>Publish post</Button>
</form>
