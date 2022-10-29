---
layout: componentLayout
title: Svelte Breadcrumb - Flowbite
breadcrumb_title: Breadcrumb
dir: Components
---


<MetaTags
  title={breadcrumb_title}
  titleTemplate="%s | Flowbite-Svelte"
  description={title}
  facebook={{
  appId: '453670756870545'
}}
openGraph={{
  type: 'website',
  url:`https://flowbite-svelte.com/${dir.toLowerCase()}/${breadcrumb_title.toLowerCase().replaceAll(' ', '-')}`,
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
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
import { MetaTags } from 'svelte-meta-tags';
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  import { props as breadcrumbProps } from '../props/Breadcrumb.json'
  import { props as breadcrumbItemProps } from '../props/BreadcrumbItem.json'
  let propHeader = ['Name', 'Type', 'Default']
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>Show the location of the current page in a hierarchical structure using the breadcrumb components</CompoDescription>

<ExampleDiv>
<GitHubSource href="breadcrumbs/Breadcrumb.svelte">Breadcrumb</GitHubSource>
<GitHubSource href="breadcrumbs/BreadcrumbItem.svelte">BreadcrumbItem</GitHubSource>
</ExampleDiv>

The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.

<Htwo label="Setup" />

```html
<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>
```

<Htwo label="Default Breadcrumb" />

Use the following breadcrumb example to show the hierarchical structure of pages.

```svelte example hideScript
<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>
<Breadcrumb aria-label="Default breadcrumb example">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

<Htwo label="Solid Breadcrumb" />

You can alternatively also use the breadcrumb components with a solid background.

```svelte example hideScript
<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>
<Breadcrumb aria-label="Solid background breadcrumb example" solid>
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

<Htwo label="Icons" />

Use the `icon` slot to change icons.

```svelte example hideScript
<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>
<Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
  <BreadcrumbItem href="/" home>
  <svelte:fragment slot="icon">
  <svg 
  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
  </svelte:fragment>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">
    <svelte:fragment slot="icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 dark:text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
      </svg>
  </svelte:fragment>
  Projects</BreadcrumbItem>
  <BreadcrumbItem>
    <svelte:fragment slot="icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 dark:text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
      </svg>
    </svelte:fragment>
  Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Breadcrumb</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={breadcrumbProps} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>BreadcrumbItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={breadcrumbItemProps} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/breadcrumb/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Breadcrumb</A
  >
</P>
