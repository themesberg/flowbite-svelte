---
layout: utilitiesLayout
title: Svelte Close Button - Flowbite
breadcrumb_title: Close button
dir: Utilities
---


<MetaTags
  title={breadcrumb_title}
  titleTemplate="%s | Flowbite-Svelte"
  description={title}
  openGraph={{
    title: `${title}`,
    description: `${title}`,
    images: [
      {
        url: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${breadcrumb_title}`,
        width: 800,
        height: 600,
        alt: `${title}`
      }
    ],
    site_name: 'Flowbite-Svelte'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `${title}`,
    description: `${title}`,
    image: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${breadcrumb_title}`,
    imageAlt: `${title}`
  }}
/>

<script>
	import {
		Htwo,
		ExampleDiv,
		GitHubSource,
		CompoDescription,
		TableProp,
		TableDefaultRow
	} from '../utils';
	import { MetaTags } from 'svelte-meta-tags';
	import { Breadcrumb, BreadcrumbItem, Heading, A } from '$lib';
	import { props as items } from '../props/CloseButton.json';
	let propHeader = ['Name', 'Type', 'Default'];
	let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
	let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>
The CloseButton components are used throughout the library and you can use it for your app as well
</CompoDescription>

<ExampleDiv>
	<GitHubSource href="utils/CloseButton.svelte">CloseButton</GitHubSource>
</ExampleDiv>

<Htwo label="CloseButton" />

Use `CloseButton` component to close a component.

```svelte example
<script>
	import { CloseButton } from 'flowbite-svelte'
	export let visible = true;
</script>

{#if visible}
	<div
		id="banner"
		tabindex="-1"
		class="flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800"
	>
		<p class="text-sm font-light text-gray-500 dark:text-gray-400">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ipsa culpa ea laudantium
			earum quis? Neque unde aliquam enim, distinctio repellendus delectus? Illo numquam ex fugit
			dolor esse, cumque nesciunt?
		</p>
		<CloseButton on:click={() => (visible = false)} />
	</div>
{/if}
```

<Htwo label="Props" />

The component has the following props, type, and default values. 
See <A class="hover:underline" href="/pages/types">the types page</A>
for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
	<TableDefaultRow {items} rowState="hover" />
</TableProp>
