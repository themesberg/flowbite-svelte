---
layout: componentLayout
title: Svelte Progressradial
breadcrumb_title: Progressradial
component_title: Progressradial
dir: Extend
description: Use the progress radial component to show the progress of a process.
---

<script>
  import {  TableProp, TableDefaultRow, CompoAttributesViewer, Seealso } from '../../utils'
  import { P, A } from '$lib'
  const dirName = "progress"
  const relatedLinks = ['/docs/components/progress','/docs/extend/progressradial' ]
</script>

## Setup

Import the `Progressradial` component in a script tag.

```svelte example hideOutput
<script>
  import { Progressradial } from "flowbite-svelte";
</script>
```

## Progress

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
include Default.svelte}
```

## Colors and labelOutside

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
include Colors.svelte}
```

## Radius

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
include Radius.svelte}
```

## Thickness

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
include Thickness.svelte}
```

## Size

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
include Size.svelte}
```

## Animation

```svelte example class="grid grid-cols-1"
include Animation.svelte}
```

## Starting position

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
include StartingPosition.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>
