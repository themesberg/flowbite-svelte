# Svelte Textarea - Flowbite


The textarea component is a multi-line text field input that can be used to receive longer chunks of text from the user in the form of a comment box, description field, and more.

## Setup

```svelte
<script>
  import { Textarea } from "flowbite-svelte";
</script>
```

## Textarea example

Get started with the default example of a textarea component below.

```svelte
{#include Default.svelte}
```

## Clearable

```svelte
{#include Clearable.svelte}
```

## Event

```svelte
{#include Event.svelte}
```

## Accessing Textarea Element with elementRef

```svelte
{#include ElementRef.svelte}
```

## WYSIWYG Editor

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

```svelte
{#include Editor.svelte}
```

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

```svelte
{#include Comment.svelte}
```

## Chatroom input

If you want to build a chatroom component you will usually want to use a textarea element to allow users to write multi-line chunks of text.

```svelte
{#include Chatroom.svelte}
```

## Using Svelte's snapshot to preserve the input

```svelte
{#include Snapshot.svelte}
```

## Component data

### Textarea

#### Types

[TextareaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L948)

#### Props

- header
- footer
- addon
- value: $bindable()
- elementRef: $bindable()
- divClass
- innerClass
- headerClass
- footerClass
- addonClass
- disabled
- class: className
- classes
- clearable
- clearableSvgClass
- clearableColor: "none"
- clearableClass
- clearableOnClick
- textareaClass


## References

- [Flowbite Textarea](https://flowbite.com/docs/forms/textarea/)

<GitHubCompoLinks {components}/>
