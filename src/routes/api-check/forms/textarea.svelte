<script lang="ts">
  import { Textarea, Label, Toolbar, ToolbarGroup, ToolbarButton, Button, Alert } from "$lib";
  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PaperPlaneOutline } from "flowbite-svelte-icons";
  let textareaRef = $state() as HTMLTextAreaElement;
  let textContent = $state("This is some example text that will be selected when you click the button.");
</script>

<h1 class="my-4 text-3xl">Textarea</h1>

<p>The textarea component is a multi-line text field input that can be used to receive longer chunks of text from the user in the form of a comment box, description field, and more.</p>

<h2 class="my-4 text-2xl">Textarea example</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Label for="textarea-id" class="mb-2">Your message</Label>
  <Textarea id="textarea-id" placeholder="Your message" rows={4} name="message" />
</div>

<h2 class="my-4 text-2xl">Clearable</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Label for="textarea-id" class="mb-2">Your message</Label>
  <Textarea clearable id="textarea-clearable" placeholder="Your message" rows={4} name="message" />
</div>

<h2 class="my-4 text-2xl">Event</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Label for="textarea-id" class="mb-2">Your message</Label>
  <Textarea
    clearable
    clearableOnClick={() => {
      alert("Clicked clear button!");
    }}
    class="textarea-event"
    placeholder="Your message"
    rows={4}
    name="message"
  />
</div>

<h2 class="my-4 text-2xl">WYSIWYG Editor</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <form>
    <label for="editor" class="sr-only">Publish post</label>
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
            <ToolbarButton name="send"><PaperPlaneOutline class="h-6 w-6 rotate-45" /></ToolbarButton>
          {/snippet}
        </Toolbar>
      {/snippet}
    </Textarea>
    <Button>Publish post</Button>
  </form>
</div>

<h2 class="my-4 text-2xl">Comment box</h2>

<div class="my-4 space-y-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Chatroom input</h2>

<div class="my-4 space-y-4 rounded border p-4">
  <form>
    <label for="chat" class="sr-only">Your message</label>
    <div class="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">
      <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
        <ImageOutline class="h-6 w-6" />
        <span class="sr-only">Upload image</span>
      </ToolbarButton>
      <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
        <FaceGrinOutline class="h-6 w-6" />
        <span class="sr-only">Add emoji</span>
      </ToolbarButton>
      <Textarea id="chat" class="mx-4 bg-white dark:bg-gray-800" rows={1} placeholder="Your message..." />
      <ToolbarButton type="submit" color="blue" class="text-primary-600 dark:text-primary-500 rounded-full">
        <PaperPlaneOutline class="h-6 w-6 rotate-45" />
        <span class="sr-only">Send message</span>
      </ToolbarButton>
    </div>
  </form>
</div>

<h2>Accessing Textarea Element with elementRef</h2>
<div class="my-4 space-y-4 rounded border p-4">
  <Textarea bind:elementRef={textareaRef} bind:value={textContent} placeholder="Type something here..." />
  <Button
    onclick={() => {
      textareaRef?.focus();
      textareaRef?.setSelectionRange(0, textareaRef.value.length);
    }}
  >
    Select All Text
  </Button>
</div>
