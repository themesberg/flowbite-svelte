<form>
  <Label for="editor" class="sr-only">Publish post</Label>
  <Textarea id="editor" rows={8} class="mb-4" placeholder="Write a comment">
    {#snippet header()}
      <Toolbar embedded>
        <ToolbarGroup>
          <ToolbarButton name="Attach file"><PaperClipOutline class="w-6 h-6 rotate-45" /></ToolbarButton>
          <ToolbarButton name="Embed map"><MapPinAltSolid class="w-6 h-6" /></ToolbarButton>
          <ToolbarButton name="Upload image"><ImageOutline class="w-6 h-6" /></ToolbarButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton name="Format code"><CodeOutline class="w-6 h-6" /></ToolbarButton>
          <ToolbarButton name="Add emoji"><FaceGrinOutline class="w-6 h-6" /></ToolbarButton>
        </ToolbarGroup>
        {#snippet end()}
        <ToolbarButton name="Send"><PaperPlaneOutline class="w-6 h-6 rotate-45" /></ToolbarButton>
        {/snippet}
      </Toolbar>
    {/snippet}
  </Textarea>
  <Button class="mt-4">Publish post</Button>
</form>