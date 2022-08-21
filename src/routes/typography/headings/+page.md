---
layout: typographyLayout
---

<script>
	import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow } from '../../utils'
	import { H1, H2, P, Highlight, Button, Breadcrumb, BreadcrumbItem } from '$lib';
	import { Home } from 'svelte-heros';
	
	
	let propHeader = ['Name', 'Type', 'Default']

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/typography/">Typography</BreadcrumbItem>
	<BreadcrumbItem>Headings</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Headings</h1>

<CompoDescription>The heading component defines six levels of title elements from H1 to H6 that are used as titles and subtitles on a web page based on multiple styles and layouts</CompoDescription>


<ExampleDiv>
	<GitHubSource href="typography/H1.svelte">H1</GitHubSource>
	<GitHubSource href="typography/H2.svelte">H2</GitHubSource>
	<GitHubSource href="typography/P.svelte">P</GitHubSource>
	<GitHubSource href="typography/Highlight.svelte">Highlight</GitHubSource>
</ExampleDiv>

Get started with the heading component to define titles and subtitles on a web page and also improve the on-page SEO metrics of your website by targeting high-traffic keywords on Google.

At least one unique H1 tag should be available for each page on your website with the next tags starting from H2 to H6 for each section. Choose from a collection of custom heading components based on multiple styles and layouts built with the utility classes from Tailwind CSS.

<Htwo label="Setup" />

```html
<script>
	import {  H1, H2, P, Highlight } from 'flowbite-svelte'
</script>
```

<Htwo label="Default heading" />

Use this example of a H1 heading in the context of a paragraph and CTA button for landing pages.

<ExampleDiv>
	<H1 color='text-blue-500' class="mb-4 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</H1>
	<P class="mb-6 lg:text-xl sm:px-16 xl:px-24 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
</ExampleDiv>

<Htwo label="Second-level heading" />

Use this example of a second-level H2 heading as the main subtitle for each section of your web page.

<ExampleDiv>
<H2>Payments tool for companies</H2>
<P class="my-4">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</P>
<P class="mb-4 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</P>
</ExampleDiv>