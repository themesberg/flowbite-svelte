<script>
  import { Button, Textarea, Toolbar, ToolbarButton } from 'flowbite-svelte';
  import { ImageSolid, MapPinAltSolid, PaperClipOutline } from 'flowbite-svelte-icons';
  import { setContext } from 'svelte';

  setContext('background', false);
</script>

<form>
  <Textarea rows={8} placeholder="Write your message" required>
    {#snippet footer()}
      <div class="flex items-center justify-between">
        <Button type="submit" size="xs">Post comment</Button>
        <Toolbar embedded class="text-gray-500 dark:text-gray-300">
          <ToolbarButton class="p-2 hover:text-gray-900 dark:hover:text-white">
            <PaperClipOutline size="md" />
            <span class="sr-only">Attach file</span>
          </ToolbarButton>
          <ToolbarButton class="p-2 hover:text-gray-900 dark:hover:text-white">
            <MapPinAltSolid size="md" />
            <span class="sr-only">Set location</span>
          </ToolbarButton>
          <ToolbarButton class="p-2 hover:text-gray-900 dark:hover:text-white">
            <ImageSolid size="md" />
            <span class="sr-only">Upload image</span>
          </ToolbarButton>
        </Toolbar>
      </div>
    {/snippet}
  </Textarea>
</form>
