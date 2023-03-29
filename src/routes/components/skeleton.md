---
layout: componentLayout
title: Svelte Skeleton - Flowbite
breadcrumb_title: Skeleton
dir: Components
description: The skeleton component can be used as an alternative loading indicator to the spinner by mimicking the content that will be loaded such as text, images, or video
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, PageHeadSection, TableProp, TableDefaultRow, MetaTag } from '../utils'
  
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
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
</script>

<Breadcrumb class="pt-28 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<ExampleDiv>
<GitHubSource href="skeleton/CardPlaceholder.svelte">CardPlaceholder</GitHubSource>
<GitHubSource href="skeleton/ImagePlaceholder.svelte">ImagePlaceholder</GitHubSource>
<GitHubSource href="skeleton/CardPlaceListPlaceholderholder.svelte">ListPlaceholder</GitHubSource>
<GitHubSource href="skeleton/Skeleton.svelte">Skeleton</GitHubSource>
<GitHubSource href="skeleton/TestimonialPlaceholder.svelte">TestimonialPlaceholder</GitHubSource>
<GitHubSource href="skeleton/TextPlaceholder.svelte">TextPlaceholder</GitHubSource>
<GitHubSource href="skeleton/VideoPlaceholder.svelte">VideoPlaceholder</GitHubSource>
<GitHubSource href="skeleton/WidgetPlaceholder.svelte">WidgetPlaceholder</GitHubSource>
</ExampleDiv>

Use the skeleton component to indicate a loading status with placeholder elements that look very similar to the type of content that is being loaded such as paragraphs, heading, images, videos, and more.

<Htwo label="Setup" />

```html
<script>
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder } from 'flowbite-svelte'
</script>
```

<Htwo label="Default skeleton" />

```svelte example
<script>
  import { Skeleton } from 'flowbite-svelte'
</script>

<Skeleton />
```

<Htwo label="Image placeholder " />

```svelte example
<script>
  import { ImagePlaceholder } from 'flowbite-svelte'
</script>

<ImagePlaceholder />
```

<Htwo label="Video placeholder" />

```svelte example
<script>
  import { VideoPlaceholder } from 'flowbite-svelte'
</script>

<VideoPlaceholder />
```

<Htwo label="Text placeholder" />

```svelte example
<script>
  import { TextPlaceholder } from 'flowbite-svelte'
</script>

<TextPlaceholder />
```

<Htwo label="Card placeholder" />

```svelte example
<script>
  import { CardPlaceholder } from 'flowbite-svelte'
</script>

<CardPlaceholder />
```

<Htwo label="Widget placeholder" />

```svelte example
<script>
  import { WidgetPlaceholder } from 'flowbite-svelte'
</script>

<WidgetPlaceholder />
```

<Htwo label="List placeholder" />

```svelte example
<script>
  import { ListPlaceholder } from 'flowbite-svelte'
</script>

<ListPlaceholder />
```

<Htwo label="Testimonial placeholder" />

```svelte example
<script>
  import { TestimonialPlaceholder } from 'flowbite-svelte'
</script>

<TestimonialPlaceholder />
```

<Htwo label="Props" />

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

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/skeleton/" target="_blank" rel="noreferrer" class="link"
    >Tailwind CSS Skeleton</A
  >
</P>
