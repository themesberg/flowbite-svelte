---
layout: componentLayout
title: Svelte Heading - Flowbite
breadcrumb_title: Svelte Heading
component_title: Heading
dir: Typography
description: The heading component defines six levels of title elements from H1 to H6 that are used as titles and subtitles on a web page based on multiple styles and layouts
thumnailSize: w-72
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { A, Heading, Breadcrumb, BreadcrumbItem } from '$lib';

  const components = 'Heading, P, A, Mark, Secondary'
</script>

Get started with the heading component to define titles and subtitles on a web page and also improve the on-page SEO metrics of your website by targeting high-traffic keywords on Google.

At least one unique `h1` tag should be available for each page on your website with the next tags starting from H2 to H6 for each section. Choose from a collection of custom heading components based on multiple styles and layouts built with the utility classes from Tailwind CSS.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Heading, P, A, Mark, Secondary } from "flowbite-svelte";
</script>
```

## Default heading

Use this example of a `h1` heading in the context of a paragraph and CTA button for landing pages.

```svelte example
{#include Default.svelte}
```

## Second-level heading

Use this example of a second-level `h2` heading as the main subtitle for each section of your web page.

```svelte example
{#include SecondLevel.svelte}
```

## Highlighted heading

Use this example to highlight a certain portion of the heading text with a different color.

```svelte example
{#include Highlighted.svelte}
```

## Heading mark

This example can be used to mark one part of the heading text with a solid background for highlighting.

```svelte example
{#include Mark.svelte}
```

## Heading gradient

Use this example to highlight a portion of the heading text by using a gradient style.

```svelte example
{#include Gradient.svelte}
```

## Heading underline

Get started with this example to underline an important part of the heading component using the `underline` prop in the `Span` component.

```svelte example
{#include Underline.svelte}
```

## Breadcrumb context

Get started with this example to position a breadcrumb component above the heading component.

```svelte example
{#include Breadcrumb.svelte}
```

## Badge context

Use this example to show a badge component inside the heading text element as a secondary indicator.

```svelte example
{#include Badge.svelte}
```

## Secondary text

This example can be used to add a secondary text inside the main heading component.

```svelte example
{#include Secondary.svelte}
```

## Sizes

The heading component has six levels of importance starting from H1 which has to be unique on the page and has the greatest weight of importance all the way to H6.

### Heading one (h1)

Use the `tag="h1"` as the most important text element to indicate the title of your web page.

```svelte example
{#include H1.svelte}
```

### Heading two (h2)

The `tag="h2"` can be used as subtitles of the page’s sections.

```svelte example
{#include H2.svelte}
```

### Heading three (h3)

The `tag="h3"` can be used as subtitles of the page’s sections.

```svelte example
{#include H3.svelte}
```

### Heading four (h4)

The `tag="h4"` can be used as subtitles of the page’s sections.

```svelte example
{#include H4.svelte}
```

### Heading five (h5)

The `tag="h5"` can be used as subtitles of the page’s sections.

```svelte example
{#include H5.svelte}
```

### Heading six (h6)

The `tag="h6"` can be used as subtitles of the page’s sections.

```svelte example
{#include H6.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
