---
layout: skeletonLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder, Breadcrumb, BreadcrumbItem } from '$lib'
  

  import componentProps from '../props/ListPlaceholder.json'
  import componentProps2 from '../props/Skeleton.json'
  import componentProps3 from '../props/TestimonialPlaceholder.json'
  import componentProps4 from '../props/TextPlaceholder.json'
  import componentProps5 from '../props/WidgetPlaceholder.json'

  let items = componentProps.props
  let items2 = componentProps2.props
  let items3 = componentProps3.props
  let items4 = componentProps4.props
  let items5 = componentProps5.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Skeleton</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Tailwind CSS Skeleton</h1>

<CompoDescription>The skeleton component can be used as an alternative loading indicator to the spinner by mimicking the content that will be loaded such as text, images, or video</CompoDescription>

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

<ExampleDiv>
<Skeleton />
</ExampleDiv>

```html
<Skeleton />
```

<Htwo label="Image placeholder " />

<ExampleDiv>
<ImagePlaceholder />
</ExampleDiv>

```html
<ImagePlaceholder />
```

<Htwo label="Video placeholder" />

<ExampleDiv>
<VideoPlaceholder />
</ExampleDiv>

```html
<VideoPlaceholder />
```

<Htwo label="Text placeholder" />

<ExampleDiv>
<TextPlaceholder />
</ExampleDiv>

```html
<TextPlaceholder />
```

<Htwo label="Card placeholder" />

<ExampleDiv>
<CardPlaceholder />
</ExampleDiv>

```html
<CardPlaceholder />
```

<Htwo label="Widget placeholder" />

<ExampleDiv>
<WidgetPlaceholder />
</ExampleDiv>

```html
<WidgetPlaceholder />
```

<Htwo label="List placeholder" />

<ExampleDiv>
<ListPlaceholder />
</ExampleDiv>

```html
<ListPlaceholder />
```

<Htwo label="Testimonial placeholder" />

<ExampleDiv>
<TestimonialPlaceholder />
</ExampleDiv>

```html
<TestimonialPlaceholder />
```


<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>ListPlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Skeleton</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TestimonialPlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TextPlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>WidgetPlaceholder</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>
