<script lang="ts">
  import { Textarea, Toolbar, ToolbarGroup, ToolbarButton, Button } from "flowbite-svelte";
  import { PaperClipOutline, MapPinAltSolid, ImageOutline } from "flowbite-svelte-icons";
</script>

<form>
  <Textarea class="mb-4" placeholder="Write a comment">
    {#snippet footer()}
      <div class="flex items-center justify-between">
        <Button type="submit">Post comment</Button>
        <Toolbar embedded>
          <ToolbarButton name="Attach file"><PaperClipOutline class="h-6 w-6" /></ToolbarButton>
          <ToolbarButton name="Set location"><MapPinAltSolid class="h-6 w-6" /></ToolbarButton>
          <ToolbarButton name="Upload image"><ImageOutline class="h-6 w-6" /></ToolbarButton>
        </Toolbar>
      </div>
    {/snippet}
  </Textarea>
</form>
<p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
  Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline">Community Guidelines</a>
  .
</p>
