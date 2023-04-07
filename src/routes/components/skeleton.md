---
layout: componentLayout
title: Svelte Skeleton - Flowbite
breadcrumb_title: Skeleton
dir: Components
description: The skeleton component can be used as an alternative loading indicator to the spinner by mimicking the content that will be loaded such as text, images, or video
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { PageHeadSection, TableProp, TableDefaultRow, MetaTag } from '../utils'
  import { P, A } from '$lib'
  import { props as items1 }  from '../props/CardPlaceholder.json'
  import { props as items2 }  from '../props/ImagePlaceholder.json'
  import { props as items3 }  from '../props/ListPlaceholder.json'
  import { props as items4 }  from '../props/Skeleton.json'
  import { props as items5 }  from '../props/TestimonialPlaceholder.json'
  import { props as items6 }  from '../props/TextPlaceholder.json'
  import { props as items7 }  from '../props/VideoPlaceholder.json'
  import { props as items8 }  from '../props/WidgetPlaceholder.json'
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  // lib files
  const libFiles = import.meta.glob('../../lib/skeleton/*.svelte')
</script>

<PageHeadSection {dir} {breadcrumb_title} {title} {description} {libFiles}/>

Use the skeleton component to indicate a loading status with placeholder elements that look very similar to the type of content that is being loaded such as paragraphs, images, videos, and more.

## Setup

```html
<script>
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder } from 'flowbite-svelte'
</script>
```

## Default skeleton

```svelte example
<script>
  import { Skeleton } from 'flowbite-svelte'
</script>

  <Skeleton size="sm" class="my-8" />
  <Skeleton size="md" class="my-8" />
  <Skeleton size="lg" class="my-8" />
  <Skeleton size="xl" class="my-8" />
  <Skeleton size="xxl" class="mt-8 mb-2.5" />
```

## Image placeholder 

```svelte example
<script>
  import { ImagePlaceholder } from 'flowbite-svelte'
</script>

<ImagePlaceholder />
<ImagePlaceholder imgHeight={60} class='mt-8'/>
```

## Video placeholder

```svelte example
<script>
  import { VideoPlaceholder } from 'flowbite-svelte'
</script>

<VideoPlaceholder />
<VideoPlaceholder size='md' class='mt-8'/>
<VideoPlaceholder size='lg' class='mt-8'/>
<VideoPlaceholder size='xl' class='mt-8'/>
<VideoPlaceholder size='xxl' class='mt-8'/>
```

## Text placeholder

```svelte example
<script>
  import { TextPlaceholder } from 'flowbite-svelte'
</script>

<TextPlaceholder />
<TextPlaceholder size='md' class='mt-8'/>
<TextPlaceholder size='lg' class='mt-8'/>
<TextPlaceholder size='xl' class='mt-8'/>
<TextPlaceholder size='xxl' class='mt-8'/>
```

## Card placeholder

```svelte example
<script>
  import { CardPlaceholder } from 'flowbite-svelte'
</script>

<CardPlaceholder />
<CardPlaceholder size='md' class='mt-8'/>
<CardPlaceholder size='lg' class='mt-8'/>
<CardPlaceholder size='xl' class='mt-8'/>
<CardPlaceholder size='xxl' class='mt-8'/>
```

## Widget placeholder

```svelte example
<script>
  import { WidgetPlaceholder } from 'flowbite-svelte'
</script>

<WidgetPlaceholder />
```

## List placeholder

```svelte example
<script>
  import { ListPlaceholder } from 'flowbite-svelte'
</script>

<ListPlaceholder />
```

## Testimonial placeholder

```svelte example
<script>
  import { TestimonialPlaceholder } from 'flowbite-svelte'
</script>

<TestimonialPlaceholder />
```

## Props

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>CardPlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>ImagePlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>ListPlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Skeleton</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TestimonialPlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TextPlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>VideoPlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items7} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>WidgetPlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items8} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/skeleton/" target="_blank" rel="noreferrer" class="link"
    >Tailwind CSS Skeleton</A
  >
</P>
