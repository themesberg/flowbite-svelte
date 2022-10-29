---
layout: componentLayout
title: Svelte Pagination - Flowbite
breadcrumb_title: Pagination
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
        width: 1200,
        height: 630,
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

<script lang="ts">
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
import { MetaTags } from 'svelte-meta-tags';
  import { Breadcrumb, BreadcrumbItem, Badge, Heading, P, A } from '$lib'
  ;
  
  import { props as items1 } from '../props/Pagination.json'
  import { props as items2 } from '../props/PaginationItem.json'
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

<CompoDescription>Use the Tailwind CSS pagination element to indicate a series of content across various pages</CompoDescription>

<ExampleDiv>
<GitHubSource href="pagination/Pagination.svelte">Pagination</GitHubSource>
<GitHubSource href="pagination/PaginationItem.svelte">Previous</GitHubSource>
</ExampleDiv>

The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

<Htwo label="Setup" />

```html
<script>
  import { Pagination, PaginationItem } from 'flowbite-svelte'
</script>
```

<Htwo label="Default pagination" />

Use the following list of pagination items to indicate a series of content for your website.

```svelte example class="flex justify-center flex-col gap-4"
<script>
  import { Pagination } from 'flowbite-svelte'
  let pages = [
    { name: 1, href: '/'},
    { name: 2, href: '/'},
    { name: 3, href: '/'},
    { name: 4, href: '/'},
    { name: 5, href: '/'}
  ];
  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<Pagination {pages} on:previous={previous} on:next={next} />
```

<Htwo label="Pagination with icons" />

The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

```svelte example class="flex justify-center"
<script>
  import { Pagination, ChevronLeft, ChevronRight } from 'flowbite-svelte'
  let pages = [
    { name: 1, href: '/' },
    { name: 2, href: '/' },
    { name: 3, href: '/' },
    { name: 4, href: '/' },
    { name: 5, href: '/' }
  ];
  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<Pagination {pages} on:previous={previous} on:next={next} icon>
  <svelte:fragment slot="prev">
    <span class="sr-only">Previous</span>
    <ChevronLeft class="w-5 h-5"/>
  </svelte:fragment>
  <svelte:fragment slot="next">
    <span class="sr-only">Next</span>
    <ChevronRight class="w-5 h-5"/>
  </svelte:fragment>
</Pagination>
```

<Htwo label="Previous and next" />

Use the following markup to show simple previous and next elements.

```svelte example class="flex justify-center"
<script>
  import { Pagination, PaginationItem } from 'flowbite-svelte'
  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<div class="flex space-x-3">
  <PaginationItem on:click={previous}>Previous</PaginationItem>
  <PaginationItem on:click={next}>Next</PaginationItem>
</div>
```

<Htwo label="Previous and next with icons" />

Use the following code to show simple previous and next elements with icons.


```svelte example class="flex justify-center"
<script>
  import { Pagination, PaginationItem } from 'flowbite-svelte'
  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<div class="flex space-x-3">
  <PaginationItem class="flex items-center" on:click={previous}>
    <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"/></svg>
    Previous
  </PaginationItem>
  <PaginationItem class="flex items-center" on:click={next}>
    Next
    <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
  </PaginationItem>
</div>
```

<Htwo label="Table data pagination" />

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

```svelte example 
<script>
  import { Pagination, PaginationItem } from 'flowbite-svelte'

  let helper = {start: 1, end: 10, total: 100}

  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<div class="flex flex-col items-center justify-center">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span> to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span> Entries
  </div>

  <Pagination table>
    <span slot="prev">Prev</span>
  </Pagination>
</div>
```

<Htwo label="Table data pagination with icons" />

You can use the following code to show the number of data shown inside a table element and also the previous and next action buttons coupled with icons.

```svelte example
<script>
  import { Pagination } from 'flowbite-svelte'

  let helper = {start: 1, end: 10, total: 100}

  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<div class="flex flex-col items-center justify-center">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span> to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span> Entries
  </div>

  <Pagination table>
    <div slot="prev" class="flex items-center gap-2">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"/></svg>
      Prev
    </div>
    <div slot="next" class="flex items-center gap-2">
      Next
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
    </div>
  </Pagination>
</div>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <A href="/pages/types">types 
 page</A> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Pagination</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>PaginationItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events" />

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4">Pagination, PaginationItem</Heading>

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keypress</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
<Badge large={true}>on:mouseover</Badge>
</div>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/pagination/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Pagination</A
  >
</P>
