---
layout: skeletonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import CompoDescription from '../utils/CompoDescription.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder, Breadcrumb, BreadcrumbItem } from "$lib/index"
  import { Home } from 'svelte-heros'
  // import componentProps from '../props/Kbd.json'

  // let items = componentProps.props

  // let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
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