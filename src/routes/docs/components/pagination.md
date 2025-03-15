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
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

## Setup

```svelte example hideOutput
<script>
  import { Pagination, PaginationItem } from "flowbite-svelte-next";
</script>
```

## Default pagination

Use the following list of pagination items to indicate a series of content for your website.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { page } from "$app/stores";
  import { Pagination } from "flowbite-svelte-next";

  $: activeUrl = $page.url.searchParams.get("page");
  let pages = [
    { name: 1, href: "/components/pagination?page=1" },
    { name: 2, href: "/components/pagination?page=2" },
    { name: 3, href: "/components/pagination?page=3" },
    { name: 4, href: "/components/pagination?page=4" },
    { name: 5, href: "/components/pagination?page=5" }
  ];

  $: {
    pages.forEach((page) => {
      let splitUrl = page.href.split("?");
      let queryString = splitUrl.slice(1).join("?");
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get("page");
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  }

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<Pagination {pages} on:previous={previous} on:next={next} />
<Pagination {pages} large on:previous={previous} on:next={next} />
```

## Pagination with icons

The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { page } from "$app/stores";
  import { Pagination } from "flowbite-svelte-next";
  import { ChevronLeftOutline, ChevronRightOutline } from "flowbite-svelte-icons";

  $: activeUrl = $page.url.searchParams.get("page");
  let pages = [
    { name: 6, href: "/components/pagination?page=6" },
    { name: 7, href: "/components/pagination?page=7" },
    { name: 8, href: "/components/pagination?page=8" },
    { name: 9, href: "/components/pagination?page=9" },
    { name: 10, href: "/components/pagination?page=10" }
  ];

  $: {
    pages.forEach((page) => {
      let splitUrl = page.href.split("?");
      let queryString = splitUrl.slice(1).join("?");
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get("page");
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  }

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<Pagination {pages} on:previous={previous} on:next={next} icon>
  <svelte:fragment slot="prev">
    <span class="sr-only">Previous</span>
    <ChevronLeftOutline class="h-2.5 w-2.5" />
  </svelte:fragment>
  <svelte:fragment slot="next">
    <span class="sr-only">Next</span>
    <ChevronRightOutline class="h-2.5 w-2.5" />
  </svelte:fragment>
</Pagination>

<Pagination {pages} large on:previous={previous} on:next={next} icon>
  <svelte:fragment slot="prev">
    <span class="sr-only">Previous</span>
    <ChevronLeftOutline class="h-6 w-6" />
  </svelte:fragment>
  <svelte:fragment slot="next">
    <span class="sr-only">Next</span>
    <ChevronRightOutline class="h-6 w-6" />
  </svelte:fragment>
</Pagination>
```

## Previous and next

Use the following markup to show simple previous and next elements.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { Pagination, PaginationItem } from "flowbite-svelte-next";
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem on:click={previous}>Previous</PaginationItem>
  <PaginationItem on:click={next}>Next</PaginationItem>
</div>
<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem large on:click={previous}>Previous</PaginationItem>
  <PaginationItem large on:click={next}>Next</PaginationItem>
</div>
```

## Previous and next with icons

Use the following code to show simple previous and next elements with icons.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { Pagination, PaginationItem } from "flowbite-svelte-next";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem class="flex items-center" on:click={previous}>
    <ArrowLeftOutline class="me-2 h-3.5 w-3.5" />
    Previous
  </PaginationItem>
  <PaginationItem class="flex items-center" on:click={next}>
    Next
    <ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
  </PaginationItem>
</div>
<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem large class="flex items-center" on:click={previous}>
    <ArrowLeftOutline class="me-2 h-5 w-5" />
    Previous
  </PaginationItem>
  <PaginationItem large class="flex items-center" on:click={next}>
    Next
    <ArrowRightOutline class="ms-2 h-5 w-5" />
  </PaginationItem>
</div>
```

## Table data pagination

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { Pagination, PaginationItem } from "flowbite-svelte-next";

  let helper = { start: 1, end: 10, total: 100 };

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
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

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { Pagination } from "flowbite-svelte-next";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  let helper = { start: 1, end: 10, total: 100 };

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
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
    <div slot="prev" class="flex items-center gap-2 bg-gray-800 text-white">
      <ArrowLeftOutline class="me-2 h-3.5 w-3.5" />
      Prev
    </div>
    <div slot="next" class="flex items-center gap-2 bg-gray-800 text-white">
      Next
      <ArrowRightOutline class="ms-2 h-6 w-6" />
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
    <div slot="prev" class="flex items-center gap-2 bg-gray-800 text-white">
      <ArrowLeftOutline class="me-2 h-3.5 w-3.5" />
      Prev
    </div>
    <div slot="next" class="flex items-center gap-2 bg-gray-800 text-white">
      Next
      <ArrowRightOutline class="me-2 h-6 w-6" />
    </div>
  </Pagination>
</div>
```

## Event example

```svelte example class="flex justify-center" hideResponsiveButtons
<script lang="ts">
  import { Pagination } from "flowbite-svelte-next";

  let pages = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }];
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  const handleClick = () => {
    alert("Page clicked");
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

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Pagination](https://flowbite.com/docs/components/pagination/)

<GitHubCompoLinks />
