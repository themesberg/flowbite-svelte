---
layout: componentLayout
title: Svelte Textarea - Flowbite
breadcrumb_title: Svelte Textarea
component_title: Textarea
dir: Forms
description: Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants
---

<script>
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'

  const components = 'Textarea'
</script>

The textarea component is a multi-line text field input that can be used to receive longer chunks of text from the user in the form of a comment box, description field, and more.

## Setup

```svelte example hideOutput
<script>
  import { Textarea } from "flowbite-svelte";
</script>
```

## Textarea example

Get started with the default example of a textarea component below.

```svelte example
include Default.svelte}
```

## Clearable

```svelte example
include Clearable.svelte}
```

## Event

```svelte example
include Event.svelte}
```

## Accessing Textarea Element with elementRef

```svelte example
include ElementRef.svelte}
```

## WYSIWYG Editor

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

```svelte example
include Editor.svelte}
```

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

```svelte example class="space-y-4"
include Comment.svelte}
```

## Chatroom input

If you want to build a chatroom component you will usually want to use a textarea element to allow users to write multi-line chunks of text.

```svelte example class="space-y-4"
include Chatroom.svelte}
```

## Using Svelte's snapshot to preserve the input

```svelte example class="h-auto"
include Snapshot.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Textarea](https://flowbite.com/docs/forms/textarea/)

<GitHubCompoLinks {components}/>
