---
layout: componentLayout
title: Svelte Video - Flowbite
breadcrumb_title: Svelte Video
component_title: Video
dir: Components
description: Use the video component to configure an embedded video player using native HTML 5 functionality based on the utility classes from Tailwind CSS
thumnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Video } from "flowbite-svelte";
</script>
```

## Video player

Use this example to create a native browser video player and apply the w-full utility class from Tailwind CSS to span the full width of the parent container.

```svelte example hideScript
{#include Default.svelte}
```

## Autoplay

Use the autoplay attribute on the video component to automatically start the video when the page has been loaded.

```svelte example hideScript
{#include Autoplay.svelte}
```

## Muted

Use the muted attribute together with the autoplay option to start the video while the sound is muted.

```svelte example hideScript
{#include Muted.svelte}
```

## Sizes

Set the width and height of the video component using the `w-{size}` and `h-{size}` classes.

### Width

Use the `w-{size}` class to set the height of the video player.

```svelte example hideScript
{#include Width.svelte}
```

### Height

Use the `h-{size}` class to set the height of the video player.

```svelte example hideScript
{#include Height.svelte}
```

### Responsive

Use the following example to make the video responsive across all devices and viewports.

```svelte example hideScript
{#include Responsive.svelte}
```

### Custom styles

Customize the video player appearance using the utility classes from Tailwind CSS such as `rounded-{size}` or border to set rounded corners and border.

```svelte example hideScript
{#include Custom.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Video](https://flowbite.com/docs/components/video/)

<GitHubCompoLinks />
