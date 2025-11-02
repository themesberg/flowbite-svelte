---
layout: componentLayout
title: Svelte Split Pane
breadcrumb_title: Split Pane
component_title: Split Pane
dir: Extend
description: A flexible Svelte 5 component for creating resizable split panes with drag-to-resize, keyboard navigation, responsive layouts, and nested configurations. Perfect for dashboards, editors, and complex layouts requiring adjustable content areas.

---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'

  const components = 'SplitPane, Pane'
  // const relatedLinks = [''];
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { SplitPane, Pane } from  'flowbite-svelte';
</script>
```

## Usage Examples

See [examples](/docs-examples/extend/split-pane) and [code](https://github.com/themesberg/flowbite-svelte/tree/main/src/routes/docs-examples/extend/split-pane).


## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components} dir="extend" />

## GitHub Links

<GitHubCompoLinks {components} dir="extend"/>

## LLM Link

<LlmLink />