---
layout: componentLayout
title: Svelte Spinner - Flowbite
breadcrumb_title: Svelte Spinner (Loader)
component_title: Spinner
dir: Components
description: Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG
thumnailSize: w-48
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the user experience whenever data is being fetched from your server.

## Setup

```svelte example hideOutput
<script>
  import { Spinner } from 'flowbite-svelte';
</script>
```

## Default spinner

Use the following SVG element to show a loading animation:

```svelte example hideScript
<script>
  import { Spinner } from 'flowbite-svelte';
</script>

<Spinner />
```

## Colors

You can change the colors of the spinner element using the `color` prop.

```svelte example hideScript
<script>
  import { Spinner } from 'flowbite-svelte';
</script>

<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
```

## Sizes

Change the size of the spinner component using the `size` prop.

```svelte example hideScript
<script>
  import { Spinner } from 'flowbite-svelte';
</script>

<Spinner size={4} />
<Spinner size="6" />
<Spinner size={8} />
```

## Alignment

Because the spinner component is an inline HTML element it can easily be aligned on the left, center, or right side using the `text-{left|center|right}` utility classes:

```svelte example hideScript
<script>
  import { Spinner } from 'flowbite-svelte';
</script>

<div class="text-left"><Spinner /></div><div class="text-center"><Spinner /></div><div class="text-right"><Spinner /></div>
```

## Buttons

The spinner component can also be used inside elements such as buttons when submitting form data:

```svelte example
<script>
  import { Spinner, Button } from 'flowbite-svelte';
</script>

<div class="flex flex-wrap items-center gap-2">
  <Button>
    <Spinner class="me-3" size="4" color="white" />
    Loading ...
  </Button>
  <Button outline color="dark">
    <Spinner class="me-3" size="4" />
    Loading ...
  </Button>
</div>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Spinner styling

- Use the `class` prop to overwrite the default class.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Spinner (Loader)](https://flowbite.com/docs/components/spinner/)

<GitHubCompoLinks />
