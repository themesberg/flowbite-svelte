---
layout: componentLayout
title: Svelte Clipboard Manager
breadcrumb_title: Clipboard Manager
component_title: Clipboard Manager
dir: Extend
description: A versatile clipboard manager component for saving, organizing, and reusing text snippets. Features include persistent storage, search, pinning, text selection menu, sensitive data filtering, and optional modal display. Fully customizable with snippets and Tailwind styling.

---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'

  const components = 'ClipboardManager'
  const relatedLinks = ['/docs/components/clipboard'];
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { ClipboardManager } from  'flowbite-svelte';
</script>
```

## Usage Examples

See [examples](/docs-examples/extend/clipboard-manager) and [code](https://github.com/themesberg/flowbite-svelte/tree/main/src/routes/docs-examples/extend/clipboard-manager).

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components} dir="extend" />

## GitHub Links

<GitHubCompoLinks {components} dir="extend"/>

## LLM Link

<LlmLink />
