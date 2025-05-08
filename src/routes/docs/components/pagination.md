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
  import { Pagination, PaginationItem } from "flowbite-svelte";
</script>
```

## Default pagination

Use the following list of pagination items to indicate a series of content for your website.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { page } from "$app/state";
  import { Pagination } from "flowbite-svelte";

  let activeUrl = $derived(page.url.searchParams.get("page"));
  let pages = $state([
    { name: "1", href: "/docs/components/pagination?page=1" },
    { name: "2", href: "/docs/components/pagination?page=2" },
    { name: "3", href: "/docs/components/pagination?page=3" },
    { name: "4", href: "/docs/components/pagination?page=4" },
    { name: "5", href: "/docs/components/pagination?page=5" }
  ]);

  $effect(() => {
    pages.forEach((page) => {
      let splitUrl = page.href?.split("?");
      let queryString = splitUrl?.slice(1).join("?");
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get("page");
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  });

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<Pagination {pages} {previous} {next} />
<Pagination {pages} size="large" {previous} {next} />
```

## Pagination with icons

The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script lang="ts">
  import { Pagination } from "flowbite-svelte";
  import { ChevronLeftOutline, ChevronRightOutline } from "flowbite-svelte-icons";
  let pages = $state([
    { name: "1", href: "/docs/components/pagination?page=1", active: false },
    { name: "2", href: "/docs/components/pagination?page=2", active: false },
    { name: "3", href: "/docs/components/pagination?page=3", active: false },
    { name: "4", href: "/docs/components/pagination?page=4", active: false },
    { name: "5", href: "/docs/components/pagination?page=5", active: false }
  ]);
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<div class="flex flex-col items-center justify-center gap-3">
  <Pagination {pages} {previous} {next}>
    {#snippet prevContent()}
      <span class="sr-only">Previous</span>
      <ChevronLeftOutline class="h-5 w-5" />
    {/snippet}
    {#snippet nextContent()}
      <span class="sr-only">Next</span>
      <ChevronRightOutline class="h-5 w-5" />
    {/snippet}
  </Pagination>
</div>
```

## Previous and next

Use the following markup to show simple previous and next elements.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { Pagination, PaginationItem } from "flowbite-svelte";
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem onclick={previous}>Previous</PaginationItem>
  <PaginationItem onclick={next}>Next</PaginationItem>
</div>
<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem size="large" onclick={previous}>Previous</PaginationItem>
  <PaginationItem size="large" onclick={next}>Next</PaginationItem>
</div>
```

## Previous and next with icons

Use the following code to show simple previous and next elements with icons.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { Pagination, PaginationItem } from "flowbite-svelte";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem class="flex items-center" onclick={previous}>
    <ArrowLeftOutline class="me-2 h-3.5 w-3.5" />
    Previous
  </PaginationItem>
  <PaginationItem class="flex items-center" onclick={next}>
    Next
    <ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
  </PaginationItem>
</div>
<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem size="large" class="flex items-center" onclick={previous}>
    <ArrowLeftOutline class="me-2 h-5 w-5" />
    Previous
  </PaginationItem>
  <PaginationItem size="large" class="flex items-center" onclick={next}>
    Next
    <ArrowRightOutline class="ms-2 h-5 w-5" />
  </PaginationItem>
</div>
```

## Table data pagination

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { Pagination, PaginationItem } from "flowbite-svelte";

  let helper = { start: 1, end: 10, total: 100 };

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<div class="flex flex-col items-center justify-center gap-3">
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
      to
      <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
      of
      <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
      Entries
    </div>
    <Pagination table {previous} {next} />
    <Pagination table size="large" {previous} {next} />
  </div>
</div>
```

## Table data pagination with icons

You can use the following code to show the number of data shown inside a table element and also the previous and next action buttons coupled with icons.

```svelte example class="flex flex-col justify-center items-center gap-3" hideResponsiveButtons
<script>
  import { Pagination } from "flowbite-svelte";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  let helper = { start: 1, end: 10, total: 100 };

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<div class="flex flex-col items-center justify-center gap-3">
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
      to
      <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
      of
      <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
      Entries
    </div>

    <Pagination table {previous} {next}>
      {#snippet prevContent()}
        <div class="flex items-center gap-2 bg-gray-800 text-white">
          <ArrowLeftOutline class="me-2 h-5 w-5" />
          Prev
        </div>
      {/snippet}
      {#snippet nextContent()}
        <div class="flex items-center gap-2 bg-gray-800 text-white">
          Next
          <ArrowRightOutline class="ms-2 h-5 w-5" />
        </div>
      {/snippet}
    </Pagination>
  </div>
</div>
```

## Event example

```svelte example class="flex justify-center" hideResponsiveButtons
<script lang="ts">
  import { Pagination } from "flowbite-svelte";

  let pages = $state([{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }]);
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

<Pagination {pages} {previous} {next} onclick={handleClick} />
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Pagination](https://flowbite.com/docs/components/pagination/)

<GitHubCompoLinks />
