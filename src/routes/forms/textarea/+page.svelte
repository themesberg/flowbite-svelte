<script lang="ts">
  import { Textarea, Label, Toolbar, ToolbarButton, ToolbarGroup, Button, Helper } from '$lib';
  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PaperPlaneOutline } from 'flowbite-svelte-icons';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'forms/textarea';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Textarea</H1>
<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default textarea</H2>

<CodeWrapper>
  <Label for="textarea-id" class="mb-2">Your message</Label>
  <Textarea id="textarea-id" placeholder="Your message" rows={4} name="message" />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/default.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>WYSIWYG Editor</H2>
<CodeWrapper>
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
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/wysiwyg-editor.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Comment box</H2>
<CodeWrapper>
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
  <Helper class="mt-4">
    Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">Community Guidelines</a>
    .
  </Helper>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/comment-box.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Chatroom input</H2>
<CodeWrapper>
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
      <ToolbarButton color="blue" class="rounded-full text-primary-600 dark:text-primary-500">
        <PaperPlaneOutline class="h-6 w-6 rotate-45" />
        <span class="sr-only">Send message</span>
      </ToolbarButton>
    </div>
  </form>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/chatroom-input.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
