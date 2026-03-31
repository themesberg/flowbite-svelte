<script lang="ts">
  import { Toolbar, ToolbarButton, Textarea, Button } from "flowbite-svelte";
  import { PaperClipOutline, MapPinAltSolid, ImageOutline } from "flowbite-svelte-icons";
</script>

<form class="mb-4">
  <Textarea placeholder="Write a comment">
    {#snippet footer()}
      <div class="flex items-center justify-between">
        <Button type="submit">Post comment</Button>
        <Toolbar embedded>
          <ToolbarButton name="Attach file"><PaperClipOutline class="h-5 w-5 rotate-45" /></ToolbarButton>
          <ToolbarButton name="Embed map"><MapPinAltSolid class="h-5 w-5" /></ToolbarButton>
          <ToolbarButton name="Upload image"><ImageOutline class="h-5 w-5" /></ToolbarButton>
        </Toolbar>
      </div>
    {/snippet}
  </Textarea>
</form>
<p class="text-body ms-auto text-xs">
  Remember, contributions to this topic should follow our <a href="/" class="text-fg-brand hover:underline">Community Guidelines</a>
  .
</p>
