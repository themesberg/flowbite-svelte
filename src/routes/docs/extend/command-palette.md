---
layout: componentLayout
title: Svelte Command Palette
breadcrumb_title: Command Palette
component_title: Command Palette
dir: Extend
description: AAA.

---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'

  const components = 'CommandPalette'
  // const relatedLinks = [''];
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { CommandPalette } from  'flowbite-svelte';
</script>
```

## Usage Examples

See [examples](/docs-examples/extend/command-palette) and [code](https://github.com/themesberg/flowbite-svelte/tree/main/src/routes/docs-examples/extend/command-palette).


## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components} dir="extend" />

## GitHub Links

<GitHubCompoLinks {components} dir="extend"/>

## LLM Link

<LlmLink />