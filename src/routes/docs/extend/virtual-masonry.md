---
layout: componentLayout
title: Svelte Virtual Masonry
breadcrumb_title: Virtual Masonry
component_title: Virtual Masonry
dir: Extend
description: A virtualized Svelte component rendering an efficient masonry/Pinterest layout. It calculates item positions and uses windowing (overscan) to display only visible items from a large dataset, optimizing performance.

---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'

  const components = 'VirtualMasonry'
  const relatedLinks = ['/docs/components/gallery']
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { VirtualMasonry } from "flowbite-svelte";
</script>
```

## Usage Examples

See [examples](/docs-examples/extend/virtual-masonry) and [code](https://github.com/themesberg/flowbite-svelte/tree/main/src/routes/docs-examples/extend/virtual-masonry).

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components} dir="extend" />

## GitHub Links

<GitHubCompoLinks {components} dir="extend"/>

## LLM Link

<LlmLink />