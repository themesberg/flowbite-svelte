---
layout: componentLayout
title: Svelte Scroll Spy
breadcrumb_title: Scroll Spy
component_title: Scroll Spy
dir: Extend
description: A navigation component that tracks scroll position and highlights the currently visible section. Supports smooth scrolling, sticky positioning, custom scroll containers, offset handling, and active state callbacks for building interactive page or documentation navigation.

---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'

  const components = 'ScrollSpy'
  // const relatedLinks = [''];
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { ScrollSpy } from  'flowbite-svelte';
</script>
```

## Usage Examples

See [examples](/docs-examples/extend/scroll-spy) and [code](https://github.com/themesberg/flowbite-svelte/tree/main/src/routes/docs-examples/extend/scroll-spy).


## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components} dir="extend" />

## GitHub Links

<GitHubCompoLinks {components} dir="extend"/>

## LLM Link

<LlmLink />