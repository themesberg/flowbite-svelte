<script lang="ts">
  import { Textarea, ToolbarButton } from "flowbite-svelte";
  import { ImageOutline, FaceGrinOutline, PaperPlaneOutline } from "flowbite-svelte-icons";
</script>

<form>
  <label for="chat" class="sr-only">Your message</label>
  <div class="flex items-center rounded-base bg-neutral-secondary-soft px-3 py-2">
    <ToolbarButton color="dark" class="text-body">
      <ImageOutline class="h-6 w-6" />
      <span class="sr-only">Upload image</span>
    </ToolbarButton>
    <ToolbarButton color="dark" class="text-body">
      <FaceGrinOutline class="h-6 w-6" />
      <span class="sr-only">Add emoji</span>
    </ToolbarButton>
    <Textarea id="chat" class="mx-4 w-full" classes={{ container: "w-full" }} rows={1} placeholder="Your message..." />
    <ToolbarButton type="submit" class="text-fg-brand ms-6 rounded-full hover:bg-brand-softer">
      <PaperPlaneOutline class="h-6 w-6 rotate-45" />
      <span class="sr-only">Send message</span>
    </ToolbarButton>
  </div>
</form>
