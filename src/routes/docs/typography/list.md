---
layout: componentLayout
title: Svelte Lists - Flowbite
breadcrumb_title: Svelte Lists
component_title: List
dir: Typography
description: Use the list component to show an unordered or ordered list of items based on multiple styles, layouts, and variants built with Tailwind CSS and Flowbite
thumnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
 
  const components = 'List, Li, DescriptionList'
</script>

Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.

## Setup

```html
<script lang="ts">
  import { List, Li } from "flowbite-svelte";
</script>
```

## Unordored list

Use this example to create a default unordered list of items.

```svelte example
{#include Unordered.svelte}
```

### Icons

This example can be used to apply custom icons instead of the default bullets for the list items.

```svelte example
{#include UnorderedIcons.svelte}
```

### Nested

Use this example to nested another list of items inside the parent list element.

```svelte example
{#include UnorderedNested.svelte}
```

### Unstyled

Use the `tag="dl"` prop to disable the list style bullets or numbers.

```svelte example
{#include UnorderedUnstyled.svelte}
```

## Ordered list

Use the `tag="ol"` prop to create an ordered list of items with numbers.

```svelte example
{#include Ordered.svelte}
```

### Nested

This example can be used to nest multiple lists into each other.

```svelte example
{#include OrderedNested.svelte}
```

## Description List

Create a description list by using the `tag="dl"` prop and set the term and name with the following example.

```svelte example
{#include Description.svelte}
```

## List with icon

Use this example to create a list of items with custom SVG icons instead of the default bullets.

```svelte example
{#include Icon.svelte}
```

## Advanced layout

This example can be used to show more details for each list item such as the user’s name, email and profile picture.

```svelte example
{#include Advanced.svelte}
```

## Horizontal List

Use this example to create a horizontally aligned list of items.

```svelte example
{#include Horizontal.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

## GitHub Links

<GitHubCompoLinks {components}/>

## LLM Link

<LlmLink />
