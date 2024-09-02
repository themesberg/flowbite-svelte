<form>
  <Textarea class="mb-4" placeholder="Write a comment">
    {#snippet footer()}
    <div class="flex items-center justify-between">
      <Button type="submit">Post comment</Button>
      <Toolbar embedded>
        <ToolbarButton name="Attach file"><PaperClipOutline class="w-6 h-6" /></ToolbarButton>
        <ToolbarButton name="Set location"><MapPinAltSolid class="w-6 h-6" /></ToolbarButton>
        <ToolbarButton name="Upload image"><ImageOutline class="w-6 h-6" /></ToolbarButton>
      </Toolbar>
    </div>
    {/snippet}
  </Textarea>
</form>
<Helper class="mt-4">
  Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline"> Community Guidelines </a>.
</Helper>