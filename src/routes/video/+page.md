---
layout: componentLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Video, Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'

  import componentProps from '../props/Video.json'
  // Props table
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Video</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">Video</Heading>

<Htwo label="Video player" />

Use this example to create a native browser video player and apply the w-full utility class from Tailwind CSS to span the full width of the parent container.

<ExampleDiv>
<Video src='/videos/flowbite.mp4' controls trackSrc='flowbite.mp4' />
</ExampleDiv>

```html
<Video src='/videos/flowbite.mp4' controls trackSrc='flowbite.mp4' />
```

<Htwo label="Autoplay" />

Use the autoplay attribute on the video component to automatically start the video when the page has been loaded.

<ExampleDiv>
<Video src='/videos/flowbite.mp4' autoplay controls trackSrc='flowbite.mp4' />
</ExampleDiv>

```html
<Video src='/videos/flowbite.mp4' autoplay controls trackSrc='flowbite.mp4' />
```

<Htwo label="Muted" />

Use the muted attribute together with the autoplay option to start the video while the sound is muted.

<ExampleDiv>
<Video src='/videos/flowbite.mp4' autoplay muted controls trackSrc='flowbite.mp4' />
</ExampleDiv>

```html
<Video src='/videos/flowbite.mp4' autoplay muted controls trackSrc='flowbite.mp4' />
```

<Htwo label="Sizes" />

Set the width and height of the video component using the `w-{size}` and `h-{size}` classes.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Width</Heading>

Use the `w-{size}` class to set the height of the video player.

<ExampleDiv>
<Video src='/videos/flowbite.mp4' controls class='w-96' trackSrc='flowbite.mp4' />
</ExampleDiv>

```html
<Video src='/videos/flowbite.mp4' controls class='w-96' trackSrc='flowbite.mp4' />
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Height</Heading>

Use the `h-{size}` class to set the height of the video player.

<ExampleDiv>
<Video src='/videos/flowbite.mp4' controls class='h-80' trackSrc='flowbite.mp4' />
</ExampleDiv>

```html
<Video src='/videos/flowbite.mp4' controls class='h-80' trackSrc='flowbite.mp4' />
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Responsive
</Heading>

Use the following example to make the video responsive across all devices and viewports.

<ExampleDiv>
<Video src='/videos/flowbite.mp4' controls class='w-full max-w-full h-auto' trackSrc='flowbite.mp4' />
</ExampleDiv>

```html
<Video src='/videos/flowbite.mp4' controls class='w-full max-w-full h-auto' trackSrc='flowbite.mp4' />
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Custom styles
</Heading>

Customize the video player appearance using the utility classes from Tailwind CSS such as `rounded-{size}` or border to set rounded corners and border.

<ExampleDiv>
<Video src='/videos/flowbite.mp4' controls class='w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700' trackSrc='flowbite.mp4' />
</ExampleDiv>

```html
<Video src='/videos/flowbite.mp4' controls class='w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700' trackSrc='flowbite.mp4' />
```


<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/video/" target="_blank" class="link"
    >Flowbite Tooltip</A>
</P>