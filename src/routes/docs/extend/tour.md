---
layout: componentLayout
title: Svelte Tour
breadcrumb_title: Tour
component_title: Tour
dir: Extend
description: A guided product tour component that highlights elements, positions tooltips with Floating UI, supports step navigation, overlay masking, scrolling, theming, and callbacks for skip and completion.

---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'

  const components = 'Tour'
  // const relatedLinks = [''];
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Tour } from  'flowbite-svelte';
</script>
```

## Usage Examples

See [examples](/docs-examples/extend/tour) and [code](https://github.com/themesberg/flowbite-svelte/tree/main/src/routes/docs-examples/extend/tour).


## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components} dir="extend" />

## GitHub Links

<GitHubCompoLinks {components} dir="extend"/>

## LLM Link

<LlmLink />