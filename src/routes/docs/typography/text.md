---
layout: componentLayout
title: Svelte Text - Flowbite
breadcrumb_title: Svelte Text
component_title: Text
dir: Typography
description: Learn how to customize text-related styles and properties such as font size, font style, text decoration, font weight and more
thumnailSize: w-64
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
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

### Leading normal

Use the `height="normal"` (default) prop to set default line height.

```svelte example hideScript
{#include LeadingNormal.svelte}
```

### Leading relaxed

Use the `height="relaxed"` prop to increase the space between lines.

```svelte example hideScript
{#include LeadingRelaxed.svelte}
```

### Leading loose

Use the `height="loose"` prop to set a large amount of space between text lines.

```svelte example hideScript
{#include LeadingLoose.svelte}
```

## Text Align

### Left

```svelte example hideScript
{#include Left.svelte}
```

### Center

```svelte example hideScript
{#include Center.svelte}
```

### Right

Use the `align="right"` prop to align the text element to the right side of the page.

```svelte example hideScript
{#include Right.svelte}
```

### Text justify

Use the `justify` prop to justify the text content.

```svelte example hideScript
{#include TextJustify.svelte}
```

## Whitespace

Configure the whitespace behaviour of inline text elements using the `whitespace` prop.

### Normal

Use the `whitespace="normal"` prop to set the default whitespace behaviour.

```svelte example hideScript
{#include WhitespaceNormal.svelte}
```

### Nowrap

Use the `whitespace="nowrap"` prop to prevent text being added to a new line when the full width has been reached.

```svelte example class="overflow-y-scroll" hideScript
{#include WhitespaceNowrap.svelte}
```

### Pre line

Use the `whitespace="preline'` prop to add whitespace exactly how it has been set from the source code.

```svelte example hideScript
{#include WhitespacePreline.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
