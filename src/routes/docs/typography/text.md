---
layout: componentLayout
title: Svelte Text - Flowbite
breadcrumb_title: Svelte Text
component_title: Text
dir: Typography
description: Learn how to customize text-related styles and properties such as font size, font style, text decoration, font weight and more
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { A, Heading } from '$lib'

  const components = 'P, Span'

  // lib files
  // const libFilesArray = [
  //   import.meta.glob("$lib/typography/P.svelte"),
  //   import.meta.glob("$lib/typography/Span.svelte"),
  // ];
  // const libFiles = { ...libFilesArray[0], ...libFilesArray[1] };
</script>

Get started with a collection of text customization examples to learn how to update the size, font weight, style, decoration and spacing of inline text elements.

## Font size

Use this example to set the font size of inline text elements using the `size` prop.

```svelte example class="flex flex-wrap items-center space-x-4 rtl:space-x-reverse"
{#include FontSize.svelte}
```

## Font weight

This example can be used to the font weight of an inline text element using the `weight` prop.

```svelte example class="flex flex-wrap items-center space-x-4 rtl:space-x-reverse" hideScript
{#include FontWeight.svelte}
```

## Text color

Use the `class` prop to set the color of the inline text.

```svelte example class="flex flex-wrap items-center space-x-4 rtl:space-x-reverse" hideScript
{#include TextColor.svelte}
```

## Letter spacing

Increase or decrease the spacing between letters using the `space` prop.

```svelte example class="flex flex-wrap items-center rtl:space-x-reverse" hideScript
{#include LetterSpacing.svelte}
```

## Text decoration

### Underline

Update the text decoration style using the `underline` and `class` props.

```svelte example
{#include Underline.svelte}
```

### Line through

Set a strikethrough line on a text element using the `line-through` class.

```svelte example
{#include LineThrough.svelte}
```

### Uppercase

Force uppercase characters for a given portion of text using the uppercase class.

```svelte example
{#include Uppercase.svelte}
```

## Font style

Set italic or non italic styles with the props.

### Italic

Use the `italic` prop to set italic font style to a text element.

```svelte example hideScript
{#include Italic.svelte}
```

### Normal

Text elements by default are non-italic.

```svelte example hideScript
{#include Normal.svelte}
```

## Line Height

Set the height between lines using the `height` prop.

```svelte example
{#include LineHeight.svelte}
```

## Text Align

Align the text using the `align` prop or the `justify` prop.

```svelte example
{#include TextAlign.svelte}
```

## Whitespace

Configure the whitespace behaviour of inline text elements using the `whitespace` prop.

```svelte example
{#include Whitespace.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

## GitHub Links

<GitHubCompoLinks {components}/>

## LLM Link

<LlmLink />
