---
layout: componentLayout
title: Svelte Pagination - Flowbite
breadcrumb_title: Svelte Pagination
component_title: Pagination
dir: Components
description: Use the Tailwind CSS pagination element to indicate a series of content across various pages
thumnailSize: w-48
---

<script lang="ts">
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  import { props as items1 } from '../../props/Pagination.json'
  import { props as items2 } from '../../props/PaginationItem.json'

  const events = ["on:blur","on:click","on:focus","on:keydown","on:keypress","on:keyup","on:mouseenter","on:mouseleave","on:mouseover"];
</script>



The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

## Setup

```svelte example hideOutput
<script>
  import { Pagination, PaginationItem } from 'flowbite-svelte'
</script>
```

## Default pagination

Use the following list of pagination items to indicate a series of content for your website.

```svelte example class="flex justify-center"
<script>
  import { page } from '$app/stores';
  import { Pagination } from 'flowbite-svelte'

  $: activeUrl = $page.url.searchParams.get('page')
  let pages = [
    { name: 1, href: '/components/pagination?page=1'},
    { name: 2, href: '/components/pagination?page=2'},
    { name: 3, href: '/components/pagination?page=3'},
    { name: 4, href: '/components/pagination?page=4'},
    { name: 5, href: '/components/pagination?page=5'}
  ];

  $:{ 
      pages.forEach((page)=>{
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if ( hrefValue === activeUrl){
        page.active=true
      }else{
        page.active=false
      }
    })
      pages=pages
  }

  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<Pagination {pages} on:previous={previous} on:next={next} />
```

## Pagination with icons

The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

```svelte example class="flex justify-center"
<script>
  import { page } from '$app/stores';
  import { Pagination, ChevronLeft, ChevronRight } from 'flowbite-svelte'

  $: activeUrl = $page.url.searchParams.get('page')
  let pages = [
    { name: 6, href: '/components/pagination?page=6'},
    { name: 7, href: '/components/pagination?page=7'},
    { name: 8, href: '/components/pagination?page=8'},
    { name: 9, href: '/components/pagination?page=9'},
    { name: 10, href: '/components/pagination?page=10'}
  ];

  $:{
    pages.forEach((page)=>{
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if ( hrefValue === activeUrl){
        page.active=true
      }else{
        page.active=false
      }
    })
    pages=pages
  }

  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<Pagination {pages} on:previous={previous} on:next={next} icon  >
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

## Previous and next

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

## Previous and next with icons

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

## Table data pagination

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

## Table data pagination with icons

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

## Event example

```svelte example class="flex justify-center"
<script lang="ts">
  import { Pagination } from 'flowbite-svelte';

  let pages = [{ name: 1}, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }];
  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
  const handleClick = () => {
    alert('Page clicked');
  };
</script>

<Pagination {pages} on:previous={previous} on:next={next} on:click={handleClick} />
```

## Props

<p>The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.</p>

### Pagination

<TableProp>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

### PaginationItem

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

## Forwarded Events

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4">Pagination, PaginationItem</Heading>

<DocBadgeList items={events} />


## References

<P>
  <A href="https://flowbite.com/docs/components/pagination/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Pagination</A
  >
</P>
