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
  import { TableProp, TableDefaultRow, CompoAttributesViewer, DocBadgeList } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'

  const components = 'Pagination, PaginationItem'
</script>

The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

## Setup

```svelte example hideOutput
<script>
  import { Pagination, PaginationItem } from 'flowbite-svelte';
</script>
```

## Default pagination

Use the following list of pagination items to indicate a series of content for your website.

```svelte example class="flex flex-col justify-center items-center gap-3"
<script>
  import { page } from '$app/stores';
  import { Pagination } from 'flowbite-svelte';

  $: activeUrl = $page.url.searchParams.get('page');
  let pages = [
    { name: 1, href: '/components/pagination?page=1' },
    { name: 2, href: '/components/pagination?page=2' },
    { name: 3, href: '/components/pagination?page=3' },
    { name: 4, href: '/components/pagination?page=4' },
    { name: 5, href: '/components/pagination?page=5' }
  ];

  $: {
    pages.forEach((page) => {
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  }

  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<Pagination {pages} on:previous={previous} on:next={next} />
<Pagination {pages} large on:previous={previous} on:next={next} />
```

## Pagination with icons

The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

```svelte example class="flex flex-col justify-center items-center gap-3"
<script>
  import { page } from '$app/stores';
  import { Pagination } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';

  $: activeUrl = $page.url.searchParams.get('page');
  let pages = [
    { name: 6, href: '/components/pagination?page=6' },
    { name: 7, href: '/components/pagination?page=7' },
    { name: 8, href: '/components/pagination?page=8' },
    { name: 9, href: '/components/pagination?page=9' },
    { name: 10, href: '/components/pagination?page=10' }
  ];

  $: {
    pages.forEach((page) => {
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  }

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
    <Icon name="chevron-left-outline" class="w-2.5 h-2.5" />
  </svelte:fragment>
  <svelte:fragment slot="next">
    <span class="sr-only">Next</span>
    <Icon name="chevron-right-outline" class="w-2.5 h-2.5" />
  </svelte:fragment>
</Pagination>

<Pagination {pages} large on:previous={previous} on:next={next} icon>
  <svelte:fragment slot="prev">
    <span class="sr-only">Previous</span>
    <Icon name="chevron-left-outline" class="w-3 h-3" />
  </svelte:fragment>
  <svelte:fragment slot="next">
    <span class="sr-only">Next</span>
    <Icon name="chevron-right-outline" class="w-3 h-3" />
  </svelte:fragment>
</Pagination>
```

## Previous and next

Use the following markup to show simple previous and next elements.

```svelte example class="flex flex-col justify-center items-center gap-3"
<script>
  import { Pagination, PaginationItem } from 'flowbite-svelte';
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
<div class="flex space-x-3">
  <PaginationItem large on:click={previous}>Previous</PaginationItem>
  <PaginationItem large on:click={next}>Next</PaginationItem>
</div>
```

## Previous and next with icons

Use the following code to show simple previous and next elements with icons.

```svelte example class="flex flex-col justify-center items-center gap-3"
<script>
  import { Pagination, PaginationItem } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<div class="flex space-x-3">
  <PaginationItem class="flex items-center" on:click={previous}>
    <Icon name="arrow-left-solid" class="mr-2 w-3.5 h-3.5" />
    Previous
  </PaginationItem>
  <PaginationItem class="flex items-center" on:click={next}>
    Next
    <Icon name="arrow-right-solid" class="ml-2 w-3.5 h-3.5" />
  </PaginationItem>
</div>
<div class="flex space-x-3">
  <PaginationItem large class="flex items-center" on:click={previous}>
    <Icon name="arrow-left-solid" class="mr-2 w-5 h-5" />
    Previous
  </PaginationItem>
  <PaginationItem large class="flex items-center" on:click={next}>
    Next
    <Icon name="arrow-right-solid" class="ml-2 w-5 h-5" />
  </PaginationItem>
</div>
```

## Table data pagination

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

```svelte example class="flex flex-col justify-center items-center gap-3"
<script>
  import { Pagination, PaginationItem } from 'flowbite-svelte';

  let helper = { start: 1, end: 10, total: 100 };

  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<div class="flex flex-col items-center justify-center gap-2">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
    to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of
    <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
    Entries
  </div>

  <Pagination table>
    <span slot="prev">Prev</span>
  </Pagination>
</div>
<div class="flex flex-col items-center justify-center gap-2">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
    to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of
    <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
    Entries
  </div>

  <Pagination table large>
    <span slot="prev">Prev</span>
  </Pagination>
</div>
```

## Table data pagination with icons

You can use the following code to show the number of data shown inside a table element and also the previous and next action buttons coupled with icons.

```svelte example class="flex flex-col justify-center items-center gap-3"
<script>
  import { Pagination } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
  let helper = { start: 1, end: 10, total: 100 };

  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<div class="flex flex-col items-center justify-center gap-2">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
    to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of
    <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
    Entries
  </div>

  <Pagination table>
    <div slot="prev" class="flex items-center gap-2 text-white bg-gray-800">
      <Icon name="arrow-left-outline" class="w-3.5 h-3.5 mr-2" />
      Prev
    </div>
    <div slot="next" class="flex items-center gap-2 text-white bg-gray-800">
      Next
      <Icon name="arrow-right-outline" class="w-3.5 h-3.5 ml-2" />
    </div>
  </Pagination>
</div>
<div class="flex flex-col items-center justify-center gap-2">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
    to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of
    <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
    Entries
  </div>

  <Pagination table large>
    <div slot="prev" class="flex items-center gap-2 text-white bg-gray-800">
      <Icon name="arrow-left-outline" class="w-3.5 h-3.5 mr-2" />
      Prev
    </div>
    <div slot="next" class="flex items-center gap-2 text-white bg-gray-800">
      Next
      <Icon name="arrow-right-outline" class="w-3.5 h-3.5 mr-2" />
    </div>
  </Pagination>
</div>
```

## Event example

```svelte example class="flex justify-center"
<script lang="ts">
  import { Pagination } from 'flowbite-svelte';
  
  let pages = [{ name: "1"}, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }];
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

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Pagination styling

- Use the `class` prop to overwrite the `ul` tag class.
- Use the `classNormal` prop to overwrite `normalClass`.
- Use the `classActive` prop to overwrite `activeClass`.

### PaginationItem styling

- Use the `class` prop to overwrite the default class.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Pagination](https://flowbite.com/docs/components/pagination/)
