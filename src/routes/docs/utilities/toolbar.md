---
layout: componentLayout
title: Svelte Toolbar - Flowbite
breadcrumb_title: Svelte Toolbar
component_title: Toolbar
dir: Utilities
description: Use the following Tailwind CSS powered toolbars to show groups of tool buttons
---

<script lang="ts">
	import { CompoAttributesViewer, GitHubCompoLinks, LlmLink } from '../../utils';
  import { Toolbar, ToolbarButton, ToolbarGroup, Avatar, Button, Textarea, Heading, A } from '$lib'

  const components = 'Toolbar, ToolbarButton, ToolbarGroup'
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Toolbar, ToolbarButton, ToolbarGroup } from "flowbite-svelte";
</script>
```

## Default toolbar

```svelte example
{#include Default.svelte}
```

## Colored toolbars

```svelte example class="space-y-4"
{#include Colored.svelte}
```

## Toolbar with groups

```svelte example
{#include Groups.svelte}
```

## WYSIWYG Editor

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

```svelte example
{#include Editor.svelte}
```

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

```svelte example class="space-y-4"
{#include CommentBox.svelte}
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

## GitHub Links

<GitHubCompoLinks {components}/>

## LLM Link

<LlmLink />
