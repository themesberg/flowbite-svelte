---
layout: componentLayout
title: Svelte Textarea - Flowbite
breadcrumb_title: Svelte Textarea
component_title: Textarea
dir: Forms
description: Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants
---

<script>
  import { CompoAttributesViewer, DocBadgeList, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, A } from '$lib'

  const components = 'Textarea'
</script>

The textarea component is a multi-line text field input that can be used to receive longer chunks of text from the user in the form of a comment box, description field, and more.

## Setup

```svelte example hideOutput
<script>
  import { Textarea } from 'flowbite-svelte';
</script>
```

## Textarea example

Get started with the default example of a textarea component below.

```svelte example
<script>
  import { Textarea, Label } from 'flowbite-svelte';
</script>

<Label for="textarea-id" class="mb-2">Your message</Label>
<Textarea id="textarea-id" placeholder="Your message" rows="4" name="message" />
```

## WYSIWYG Editor

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

```svelte example
<script>
  import { Textarea, Toolbar, ToolbarGroup, ToolbarButton, Button } from 'flowbite-svelte';
  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PaperPlaneOutline } from 'flowbite-svelte-icons';
</script>

<form>
  <label for="editor" class="sr-only">Publish post</label>
  <Textarea id="editor" rows="8" class="mb-4" placeholder="Write a comment">
    <Toolbar slot="header" embedded>
      <ToolbarGroup>
        <ToolbarButton name="Attach file"><PaperClipOutline class="w-6 h-6 rotate-45" /></ToolbarButton>
        <ToolbarButton name="Embed map"><MapPinAltSolid class="w-6 h-6" /></ToolbarButton>
        <ToolbarButton name="Upload image"><ImageOutline class="w-6 h-6" /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarGroup>
        <ToolbarButton name="Format code"><CodeOutline class="w-6 h-6" /></ToolbarButton>
        <ToolbarButton name="Add emoji"><FaceGrinOutline class="w-6 h-6" /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarButton name="send" slot="end"><PaperPlaneOutline class="w-6 h-6 rotate-45" /></ToolbarButton>
    </Toolbar>
  </Textarea>
  <Button>Publish post</Button>
</form>
```

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

```svelte example class="space-y-4"
<script>
  import { Textarea, Toolbar, ToolbarGroup, ToolbarButton, Button } from 'flowbite-svelte';
  import { PaperClipOutline, MapPinAltSolid, ImageOutline } from 'flowbite-svelte-icons';
</script>

<form>
  <Textarea class="mb-4" placeholder="Write a comment">
    <div slot="footer" class="flex items-center justify-between">
      <Button type="submit">Post comment</Button>
      <Toolbar embedded>
        <ToolbarButton name="Attach file"><PaperClipOutline class="w-6 h-6" /></ToolbarButton>
        <ToolbarButton name="Set location"><MapPinAltSolid class="w-6 h-6" /></ToolbarButton>
        <ToolbarButton name="Upload image"><ImageOutline class="w-6 h-6" /></ToolbarButton>
      </Toolbar>
    </div>
  </Textarea>
</form>
<p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
  Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline"> Community Guidelines </a>
  .
</p>
```

## Chatroom input

If you want to build a chatroom component you will usually want to use a textarea element to allow users to write multi-line chunks of text.

```svelte example class="space-y-4"
<script>
  import { Textarea, Alert, ToolbarButton } from 'flowbite-svelte';
  import { ImageOutline, FaceGrinOutline, PaperPlaneOutline } from 'flowbite-svelte-icons';
</script>

<form>
  <label for="chat" class="sr-only">Your message</label>
  <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
      <ImageOutline class="w-6 h-6" />
      <span class="sr-only">Upload image</span>
    </ToolbarButton>
    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
      <FaceGrinOutline class="w-6 h-6" />
      <span class="sr-only">Add emoji</span>
    </ToolbarButton>
    <Textarea id="chat" class="mx-4 bg-white dark:bg-gray-800" rows="1" placeholder="Your message..." />
    <ToolbarButton type="submit" color="blue" class="rounded-full text-primary-600 dark:text-primary-500">
      <PaperPlaneOutline class="w-6 h-6 rotate-45" />
      <span class="sr-only">Send message</span>
    </ToolbarButton>
  </div>
</form>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Textarea styling

Use the `class` prop to overwrite the `textarea` tag.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Textarea](https://flowbite.com/docs/forms/textarea/)

<GitHubCompoLinks {components}/>
