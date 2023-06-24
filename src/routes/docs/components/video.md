---
layout: componentLayout
title: Svelte Video - Flowbite
breadcrumb_title: Svelte Video
component_title: Video
dir: Components
description: Use the video component to configure an embedded video player using native HTML 5 functionality based on the utility classes from Tailwind CSS
thumnailSize: w-64
---

<script>
  import { TableProp, TableDefaultRow, } from '../../utils'
  import { Heading, P, A } from '$lib'
  import { props as items } from '../../props/Video.json'
</script>

## Setup

```svelte example hideOutput
<script>
  import { Video } from 'flowbite-svelte';
</script>
```

## Video player

Use this example to create a native browser video player and apply the w-full utility class from Tailwind CSS to span the full width of the parent container.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' controls trackSrc='flowbite.mp4' />
```

## Autoplay

Use the autoplay attribute on the video component to automatically start the video when the page has been loaded.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' autoplay controls trackSrc='flowbite.mp4' />
```

## Muted

Use the muted attribute together with the autoplay option to start the video while the sound is muted.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' autoplay muted controls trackSrc='flowbite.mp4' />
```

## Sizes

Set the width and height of the video component using the `w-{size}` and `h-{size}` classes.

### Width

Use the `w-{size}` class to set the height of the video player.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' controls class='w-96' trackSrc='flowbite.mp4' />
```

### Height

Use the `h-{size}` class to set the height of the video player.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' controls class='h-80' trackSrc='flowbite.mp4' />
```

### Responsive

Use the following example to make the video responsive across all devices and viewports.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' controls class='w-full max-w-full h-auto' trackSrc='flowbite.mp4' />
```

### Custom styles

Customize the video player appearance using the utility classes from Tailwind CSS such as `rounded-{size}` or border to set rounded corners and border.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' controls class='w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700' trackSrc='flowbite.mp4' />
```

## Props

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

- Use the `class` prop to overwrite the `video` tag class.

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

## References

- [Flowbite Video](https://flowbite.com/docs/components/video/)
