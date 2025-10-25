---
layout: componentLayout
title: Svelte Virtual List
breadcrumb_title: Virtual List
component_title: Virtual List
dir: Extend
description: Use the VirtualList to ...
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

```svelte example class="flex flex-col space-y-4"
{#include Default.svelte}
```

## Jump to item

```svelte example class="flex flex-col space-y-4"
{#include Jump.svelte}
```
