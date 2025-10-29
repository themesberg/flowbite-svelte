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

```svelte example
{#include Default.svelte}
```

## Jump to item
Demonstrates programmatic scrolling with buttons to jump to specific items by index.

```svelte example
{#include Jump.svelte}
```

## Variable Item Heights

Dynamically adjust item heights based on content using the `getItemHeight` prop.

```svelte example
{#include VariableHeights.svelte}
```

## Custom Styling

Apply custom styles, alternating row colors, and hover effects for enhanced visual design.

```svelte example
{#include CustomStyling.svelte}
```

## Loading State

Handle empty states and loading indicators while data is being fetched.

```svelte example
{#include LoadingState.svelte}
```

## Interactive Items

Add checkboxes, buttons, and other interactive elements to virtual list items.

```svelte example
{#include InteractiveItems.svelte}
```

## Large Dataset Performance

Demonstrates smooth scrolling and rendering performance with 100,000 items.

```svelte example
{#include LargeDataset.svelte}
```

## CSS containment to allow better optimization
CSS containment tells the browser that an element's internal layout is independent from the rest of the page, allowing better optimization and prevents layout thrashing when items are added/removed from the virtualized viewport. The browser can skip rendering work for contained elements that are off-screen.

### No containment

```svelte example
{#include NoContainment.svelte}
```

### With containment

Note: Containment may change behavior of position: sticky, overflow, and z-index stacking contexts inside items. 

Enable with `<VirtualList contained …>` or override via `classes.item`. 

```svelte example class="h-[600px]"
{#include OptinContainment.svelte}
```

### Override via classes

```svelte example
{#include ClassOverride.svelte}
```