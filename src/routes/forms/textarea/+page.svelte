<script lang="ts">
  import {
    Textarea,
    Label,
    Toolbar,
    ToolbarGroup,
    ToolbarButton,
    Button
  } from '$lib';
  import {
    PaperClipOutline,
    MapPinAltSolid,
    ImageOutline,
    CodeOutline,
    FaceGrinOutline,
    PaperPlaneOutline
  } from 'flowbite-svelte-icons';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Textarea</H1>
<p>
  The textarea component is a multi-line text field input that can be used to
  receive longer chunks of text from the user in the form of a comment box,
  description field, and more.
</p>
<H2>Textarea example</H2>
<p>Get started with the default example of a textarea component below.</p>
<CodeWrapper>
  <Label for="textarea-id" class="mb-2">Your message</Label>
  <Textarea
    id="textarea-id"
    placeholder="Your message"
    rows={4}
    name="message"
  />
</CodeWrapper>

<H2>WYSIWYG Editor</H2>
<CodeWrapper>
  <form>
    <label for="editor" class="sr-only">Publish post</label>
    <Textarea id="editor" rows={8} class="mb-4" placeholder="Write a comment">
      {#snippet header()}
        <Toolbar embedded>hekko</Toolbar>
      {/snippet}
    </Textarea>
    <Button>Publish post</Button>
  </form>
</CodeWrapper>

<CodeWrapper>
  <Toolbar>hello</Toolbar>
</CodeWrapper>
