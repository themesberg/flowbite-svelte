<script lang="ts">
  import { Textarea, Toolbar, ToolbarButton, ToolbarGroup, Label, Button } from '$lib';
  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PaperPlaneOutline } from 'flowbite-svelte-icons';
</script>

<form>
  <Label for="editor" class="sr-only">Publish post</Label>
  <Textarea id="editor" rows={8} class="mb-4" placeholder="Write a comment">
    {#snippet header()}
      <Toolbar embedded>
        <ToolbarGroup>
          <ToolbarButton name="Attach file"><PaperClipOutline class="h-6 w-6 rotate-45" /></ToolbarButton>
          <ToolbarButton name="Embed map"><MapPinAltSolid class="h-6 w-6" /></ToolbarButton>
          <ToolbarButton name="Upload image"><ImageOutline class="h-6 w-6" /></ToolbarButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton name="Format code"><CodeOutline class="h-6 w-6" /></ToolbarButton>
          <ToolbarButton name="Add emoji"><FaceGrinOutline class="h-6 w-6" /></ToolbarButton>
        </ToolbarGroup>
        {#snippet end()}
          <ToolbarButton name="Send"><PaperPlaneOutline class="h-6 w-6 rotate-45" /></ToolbarButton>
        {/snippet}
      </Toolbar>
    {/snippet}
  </Textarea>
  <Button class="mt-4">Publish post</Button>
</form>
