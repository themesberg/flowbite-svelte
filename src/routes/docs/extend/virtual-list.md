---
layout: componentLayout
title: Svelte Virtual List
breadcrumb_title: Virtual List
component_title: Virtual List
dir: Extend
description: A performant Svelte 5 virtual list component that efficiently renders large datasets by only displaying visible items. Supports variable item heights, smooth scrolling with RAF optimization, and programmatic scroll-to-index functionality.
---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'

  const components = 'VirtualList'
  const relatedLinks = ['/docs/components/list-group'];
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { VirtualList } from "flowbite-svelte";
</script>
```

## Default single and multiple
Basic virtual list displaying 5,000 items with variable text lengths. Only visible items are rendered for optimal performance.

```svelte example class="flex flex-col space-y-4"
{#include Default.svelte}
```

## Jump to item
Demonstrates programmatic scrolling with buttons to jump to specific items by index.

```svelte example class="flex flex-col space-y-4"
{#include Jump.svelte}
```

## Variable Item Heights

Dynamically adjust item heights based on content using the `getItemHeight` prop.

```svelte example class="flex flex-col space-y-4"
{#include VariableHeights.svelte}
```

## Custom Styling

Apply custom styles, alternating row colors, and hover effects for enhanced visual design.

```svelte example class="flex flex-col space-y-4"
{#include CustomStyling.svelte}
```

## Loading State

Handle empty states and loading indicators while data is being fetched.

```svelte example class="flex flex-col space-y-4"
{#include LoadingState.svelte}
```

## Interactive Items

Add checkboxes, buttons, and other interactive elements to virtual list items.

```svelte example class="flex flex-col space-y-4"
{#include InteractiveItems.svelte}
```

## Large Dataset Performance

Demonstrates smooth scrolling and rendering performance with 100,000 items.

```svelte example class="flex flex-col space-y-4"
{#include LargeDataset.svelte}
```