---
layout: componentLayout
title: Svelte Breadcrumb - Flowbite
breadcrumb_title: Svelte Breadcrumb
component_title: Breadcrumb
dir: Components
description: Show the location of the current page in a hierarchical structure using the breadcrumb components
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
  const relatedLinks = [
    '/docs/components/navbar',
    '/docs/components/sidebar',
    '/docs/components/pagination',
    '/docs/typography/heading'
  ];
</script>

The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>
```

## Default Breadcrumb

Use the following breadcrumb example to show the hierarchical structure of pages. The default style has a transparent background that works well in most contexts and doesn't distract from the main content.

```svelte example hideScript
{#include Default.svelte}
```

## Solid Breadcrumb

You can alternatively also use the breadcrumb components with a solid background.

The colored background helps the breadcrumb stand out and can be customized to match your brand colors.

```svelte example hideScript
{#include Solid.svelte}
```

## Icons

Use the `icon` snippet to change icons.

```svelte example
{#include Icons.svelte}
```

## Accessibility

The Breadcrumb component follows accessibility best practices:

- **Semantic HTML**: Uses `<nav>` and `<ol>` elements for proper structure
- **ARIA Labels**: Includes `aria-label="breadcrumb"` on the navigation element
- **Keyboard Navigation**: All links are keyboard accessible
- **Screen Readers**: The hierarchical structure is properly announced
- **Current Page**: The last item (current page) should not be a link
- **Clear Labels**: Each breadcrumb item should have descriptive text
- **Focus Indicators**: Clear focus states for keyboard users

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Breadcrumb](https://flowbite.com/docs/components/breadcrumb/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
