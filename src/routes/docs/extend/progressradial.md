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
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial progress={20} />
<Progressradial progress="40" />
<Progressradial progress={65} />
<Progressradial progress="83" />
```

## Colors and labelOutside

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial progress={65} labelOutside="default" />
<Progressradial color="secondary" progress="65" labelOutside="secondary" />
<Progressradial color="gray" progress="65" labelOutside="gray" />
<Progressradial color="red" progress="65" labelOutside="red" />
<Progressradial color="orange" progress="65" labelOutside="orange" />
<Progressradial color="amber" progress="65" labelOutside="amber" />
<Progressradial color="yellow" progress="65" labelOutside="yellow" />
<Progressradial color="lime" progress="65" labelOutside="lime" />
<Progressradial color="green" progress="65" labelOutside="green" />
<Progressradial color="emerald" progress="65" labelOutside="emerald" />
<Progressradial color="teal" progress="65" labelOutside="teal" />
<Progressradial color="cyan" progress="65" labelOutside="cyan" />
<Progressradial color="sky" progress="65" labelOutside="sky" />
<Progressradial color="blue" progress="65" labelOutside="blue" />
<Progressradial color="indigo" progress="65" labelOutside="indigo" />
<Progressradial color="violet" progress="65" labelOutside="violet" />
<Progressradial color="purple" progress="65" labelOutside="purple" />
<Progressradial color="fuchsia" progress="65" labelOutside="fuchsia" />
<Progressradial color="pink" progress="65" labelOutside="pink" />
<Progressradial color="rose" progress="65" labelOutside="rose" />
```

## Radius

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial radius={10} />
<Progressradial radius={15} />
<Progressradial radius={20} />
<Progressradial radius={25} />
```

## Thickness

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial />
<Progressradial thickness={5} />
<Progressradial thickness={10} />
<Progressradial thickness={15} />
```

## Size

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial size="w-20 h-20" />
<Progressradial size="w-28 h-28" />
<Progressradial size="w-32 h-32" />
<Progressradial size="w-40 h-40" />
```

## Animation

```svelte example class="grid grid-cols-1"
<script>
  import { Progressradial, Button } from "flowbite-svelte";
  import { sineOut } from "svelte/easing";
  let progress = $state(45);
</script>

<Progressradial {progress} animate precision={1} labelOutside="Animation" labelInside tweenDuration={1000} easing={sineOut} />
<Button onclick={() => (progress = `${Math.round(Math.random() * 100)}`)} class="mx-auto mt-8 w-24">Randomize</Button>
```

## Starting position

```svelte example class="grid grid-cols-2 sm:grid-cols-4"
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial />
<Progressradial progress={50} startingPosition="right" />
<Progressradial progress={50} startingPosition="bottom" />
<Progressradial progress={50} startingPosition="left" />
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>
