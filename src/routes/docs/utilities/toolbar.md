---
layout: componentLayout
title: Svelte Toolbar - Flowbite
breadcrumb_title: Svelte Toolbar
component_title: Toolbar
dir: Utilities
description: Use the following Tailwind CSS powered toolbars to show groups of tool buttons
---

<script>
	import { CompoAttributesViewer, GitHubCompoLinks } from '../../utils';
  import { Toolbar, ToolbarButton, ToolbarGroup, Avatar, Button, Textarea, Heading, A } from '$lib'

  const components = 'Toolbar, ToolbarButton, ToolbarGroup'
</script>

## Setup

```svelte example hideOutput
<script>
  import { Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
</script>
```

## Default toolbar

```svelte example
<script>
  import { Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
  import { HomeOutline, EnvelopeOutline, ImageOutline } from 'flowbite-svelte-icons';
</script>

<Toolbar>
  <ToolbarButton><HomeOutline class="w-6 h-6" /></ToolbarButton>
  <ToolbarButton><EnvelopeOutline class="w-6 h-6" /></ToolbarButton>
  <ToolbarButton><ImageOutline class="w-6 h-6" /></ToolbarButton>
</Toolbar>
```

## Colored toolbars

```svelte example class="space-y-4"
<script>
  import { Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
  import { HomeOutline, EnvelopeOutline, ImageOutline } from 'flowbite-svelte-icons';
</script>

<Toolbar color="red">
  <ToolbarButton color="red"><HomeOutline class="w-6 h-6" /></ToolbarButton>
  <ToolbarButton color="red"><EnvelopeOutline class="w-6 h-6" /></ToolbarButton>
  <ToolbarButton color="red"><ImageOutline class="w-6 h-6" /></ToolbarButton>
</Toolbar>
<Toolbar color="blue">
  <ToolbarButton color="blue"><HomeOutline class="w-6 h-6" /></ToolbarButton>
  <ToolbarButton color="blue"><EnvelopeOutline class="w-6 h-6" /></ToolbarButton>
  <ToolbarButton color="blue"><ImageOutline class="w-6 h-6" /></ToolbarButton>
</Toolbar>
```

## Toolbar with groups

```svelte example
<script>
  import { Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
  import { HomeOutline, EnvelopeOutline, ImageOutline, CogOutline } from 'flowbite-svelte-icons';
</script>

<Toolbar color="green">
  <ToolbarGroup>
    <ToolbarButton color="green"><HomeOutline class="w-6 h-6" /></ToolbarButton>
    <ToolbarButton color="green"><EnvelopeOutline class="w-6 h-6" /></ToolbarButton>
    <ToolbarButton color="green"><ImageOutline class="w-6 h-6" /></ToolbarButton>
  </ToolbarGroup>
  <ToolbarGroup>
    <ToolbarButton color="green"><HomeOutline class="w-6 h-6" /></ToolbarButton>
    <ToolbarButton color="green"><EnvelopeOutline class="w-6 h-6" /></ToolbarButton>
    <ToolbarButton color="green"><ImageOutline class="w-6 h-6" /></ToolbarButton>
  </ToolbarGroup>
  <ToolbarButton slot="end" color="green"><CogOutline class="w-6 h-6" /></ToolbarButton>
</Toolbar>
```

## WYSIWYG Editor

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

```svelte example
<script>
  import { Textarea, Toolbar, ToolbarGroup, ToolbarButton, Button } from 'flowbite-svelte';
  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PapperPlaneOutline } from 'flowbite-svelte-icons';
</script>

<form>
  <label for="editor" class="sr-only">Publish post</label>
  <Textarea id="editor" rows="8" class="mb-4" placeholder="Write a comment">
    <Toolbar slot="header" embedded>
      <ToolbarGroup>
        <ToolbarButton name="Attach file"><PaperClipOutline class="w-5 h-5 rotate-45" /></ToolbarButton>
        <ToolbarButton name="Embed map"><MapPinAltSolid class="w-5 h-5" /></ToolbarButton>
        <ToolbarButton name="Upload image"><ImageOutline class="w-5 h-5" /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarGroup>
        <ToolbarButton name="Format code"><CodeOutline class="w-5 h-5" /></ToolbarButton>
        <ToolbarButton name="Add emoji"><FaceGrinOutline class="w-5 h-5" /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarButton name="send" slot="end"><PapperPlaneOutline class="w-5 h-5 rotate-45" /></ToolbarButton>
    </Toolbar>
  </Textarea>
  <Button>Publish post</Button>
</form>
```

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

```svelte example class="space-y-4"
<script>
  import { Toolbar, ToolbarButton, ToolbarGroup, Textarea, Button } from 'flowbite-svelte';
  import { PaperClipOutline, MapPinAltSolid, ImageOutline } from 'flowbite-svelte-icons';
</script>

<form>
  <Textarea class="mb-4" placeholder="Write a comment">
    <div slot="footer" class="flex items-center justify-between">
      <Button type="submit">Post comment</Button>
      <Toolbar embedded>
        <ToolbarButton name="Attach file"><PaperClipOutline class="w-5 h-5 rotate-45" /></ToolbarButton>
        <ToolbarButton name="Embed map"><MapPinAltSolid class="w-5 h-5" /></ToolbarButton>
        <ToolbarButton name="Upload image"><ImageOutline class="w-5 h-5" /></ToolbarButton>
      </Toolbar>
    </div>
  </Textarea>
</form>
<p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
  Remember, contributions to this topic should follow our <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline"> Community Guidelines </a>
  .
</p>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Toolbar styling

- Use the `class` prop to overwrite the `div` tag class.

### ToolbarButton styling

- Use the `class` prop to overwrite the `button` tag class.

### ToolbarGroup styling

- Use the `class` prop to overwrite `divClass`.

## Component data

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
