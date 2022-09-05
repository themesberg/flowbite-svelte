---
layout: componentLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Video, Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'

  import componentProps from '../props/Tooltip.json'
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
<Video src='/videos/flowbite.mp4' controls>
  <track src="flowbite.mp4" kind="captions" srclang="en" label="english_captions">
</Video>
</ExampleDiv>

<Htwo label="Autoplay" />

Use the autoplay attribute on the video component to automatically start the video when the page has been loaded.

<ExampleDiv>
<Video src='/videos/flowbite.mp4' autoplay controls>
  <track src="flowbite.mp4" kind="captions" srclang="en" label="english_captions">
</Video>
</ExampleDiv>

<Htwo label="Muted" />

Use the muted attribute together with the autoplay option to start the video while the sound is muted.

<ExampleDiv>
<Video src='/videos/flowbite.mp4' autoplay muted controls>
  <track src="flowbite.mp4" kind="captions" srclang="en" label="english_captions">
</Video>
</ExampleDiv>