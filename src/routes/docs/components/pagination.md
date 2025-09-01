---
layout: componentLayout
title: Svelte Pagination - Flowbite
breadcrumb_title: Svelte Pagination
component_title: Pagination
dir: Components
description: Use the Tailwind CSS pagination element to indicate a series of content across various pages
thumnailSize: w-48
---

<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { PaginationNav, Pagination, PaginationItem } from "flowbite-svelte";
</script>
```

## Default pagination

Use the following list of pagination items to indicate a series of content for your website.

### PaginationNav

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include Default.svelte}
```

### Pagination, PaginationItem

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include Default2.svelte}
```

## Pagination with icons

The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

### PaginationNav

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include Icons.svelte}
```

### Pagination, PaginationItem

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include Icons2.svelte}
```

## Previous and next

Use the following markup to show simple previous and next elements.

### PaginationNav

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include PreviousNext.svelte}
```

### Pagination, PaginationItem

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include PreviousNext2.svelte}
```

## Previous and next with icons

Use the following code to show simple previous and next elements with icons.

### PaginationNav

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include PreviousNextIcons.svelte}
```

### Pagination, PaginationItem

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include PreviousNextIcons2.svelte}
```

## Table data pagination

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

### PaginationNav

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include TableData.svelte}
```

### Pagination, PaginationItem

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include TableData2.svelte}
```

## Table data pagination with icons

You can use the following code to show the number of data shown inside a table element and also the previous and next action buttons coupled with icons.

### PaginationNav

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include TableDataIcons.svelte}
```

### Pagination, PaginationItem

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
{#include TableDataIcons2.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Pagination](https://flowbite.com/docs/components/pagination/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
