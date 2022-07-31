---
layout: skeletonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
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