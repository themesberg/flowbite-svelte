---
layout: componentLayout
title: Svelte Video - Flowbite
breadcrumb_title: Video
dir: Components
description: Use the video component to configure an embedded video player using native HTML 5 functionality based on the utility classes from Tailwind CSS
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, PageHeadSection, TableProp, TableDefaultRow, MetaTag } from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  import { props as items } from '../props/Video.json'
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  // lib files
  const libFiles = import.meta.glob('../../lib/video/*.svelte')
</script>

<PageHeadSection {dir} {breadcrumb_title} {title} {description} {libFiles}/>

<Htwo label="Setup" />

```html
<script>
  import { Video } from 'flowbite-svelte';
</script>
```

<Htwo label="Video player" />

Use this example to create a native browser video player and apply the w-full utility class from Tailwind CSS to span the full width of the parent container.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' controls trackSrc='flowbite.mp4' />
```

<Htwo label="Autoplay" />

Use the autoplay attribute on the video component to automatically start the video when the page has been loaded.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' autoplay controls trackSrc='flowbite.mp4' />
```

<Htwo label="Muted" />

Use the muted attribute together with the autoplay option to start the video while the sound is muted.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' autoplay muted controls trackSrc='flowbite.mp4' />
```

<Htwo label="Sizes" />

Set the width and height of the video component using the `w-{size}` and `h-{size}` classes.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Width</Heading>

Use the `w-{size}` class to set the height of the video player.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' controls class='w-96' trackSrc='flowbite.mp4' />
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Height</Heading>

Use the `h-{size}` class to set the height of the video player.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' controls class='h-80' trackSrc='flowbite.mp4' />
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Responsive
</Heading>

Use the following example to make the video responsive across all devices and viewports.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' controls class='w-full max-w-full h-auto' trackSrc='flowbite.mp4' />
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Custom styles
</Heading>

Customize the video player appearance using the utility classes from Tailwind CSS such as `rounded-{size}` or border to set rounded corners and border.

```svelte example hideScript
<script>
  import { Video } from 'flowbite-svelte'
</script>

<Video src='/videos/flowbite.mp4' controls class='w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700' trackSrc='flowbite.mp4' />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <A href="/pages/types">types 
 page</A> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/video/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Tooltip</A>
</P>