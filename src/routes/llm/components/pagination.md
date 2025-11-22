# Svelte Pagination - Flowbite


The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

## Setup

```svelte
<script lang="ts">
  import { PaginationNav, Pagination, PaginationItem } from "flowbite-svelte";
</script>
```

## Default pagination

Use the following list of pagination items to indicate a series of content for your website.

### PaginationNav

```svelte
<script lang="ts">
  import { PaginationNav } from "flowbite-svelte";

  let currentPage = $state(1);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>

<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} />

<PaginationNav {currentPage} {totalPages} visiblePages={7} onPageChange={handlePageChange} />

<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} size="large" />
```

### Pagination, PaginationItem

```svelte
<script lang="ts">
  import { page } from "$app/state";
  import { Pagination } from "flowbite-svelte";

  let activeUrl = $derived(page.url.searchParams.get("page"));
  let pages = $state([
    { name: "1", href: "/docs/components/pagination?page=1", active: false },
    { name: "2", href: "/docs/components/pagination?page=2", active: false },
    { name: "3", href: "/docs/components/pagination?page=3", active: false },
    { name: "4", href: "/docs/components/pagination?page=4", active: false },
    { name: "5", href: "/docs/components/pagination?page=5", active: false }
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

### PaginationNav

```svelte
<script lang="ts">
  import { PaginationNav } from "flowbite-svelte";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";

  let currentPage = $state(1);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>

<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange}>
  {#snippet prevContent()}
    <span class="sr-only">Previous</span>
    <ArrowLeftOutline class="h-5 w-5" />
  {/snippet}
  {#snippet nextContent()}
    <span class="sr-only">Next</span>
    <ArrowRightOutline class="h-5 w-5" />
  {/snippet}
</PaginationNav>

<PaginationNav visiblePages={7} {currentPage} {totalPages} onPageChange={handlePageChange}>
  {#snippet prevContent()}
    <span class="sr-only">Previous</span>
    <ArrowLeftOutline class="h-5 w-5" />
  {/snippet}
  {#snippet nextContent()}
    <span class="sr-only">Next</span>
    <ArrowRightOutline class="h-5 w-5" />
  {/snippet}
</PaginationNav>
```

### Pagination, PaginationItem

```svelte
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

### PaginationNav

```svelte
<script lang="ts">
  import { PaginationNav } from "flowbite-svelte";
  let currentPage = $state(1);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>

<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} layout="navigation" />
<PaginationNav size="large" {currentPage} {totalPages} onPageChange={handlePageChange} layout="navigation" />
```

### Pagination, PaginationItem

```svelte
<script lang="ts">
  import { PaginationItem } from "flowbite-svelte";
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

### PaginationNav

```svelte
<script lang="ts">
  import { PaginationNav } from "flowbite-svelte";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  let currentPage = $state(1);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>

<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} layout="navigation">
  {#snippet prevContent()}
    <ArrowLeftOutline class="h-5 w-5" />
    Previous
  {/snippet}
  {#snippet nextContent()}
    Next
    <ArrowRightOutline class="h-5 w-5" />
  {/snippet}
</PaginationNav>

<PaginationNav size="large" {currentPage} {totalPages} onPageChange={handlePageChange} layout="navigation">
  {#snippet prevContent()}
    <ArrowLeftOutline class="h-5 w-5" />
    Previous
  {/snippet}
  {#snippet nextContent()}
    Next
    <ArrowRightOutline class="h-5 w-5" />
  {/snippet}
</PaginationNav>
```

### Pagination, PaginationItem

```svelte
<script lang="ts">
  import { PaginationItem } from "flowbite-svelte";
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

### PaginationNav

```svelte
<script lang="ts">
  import { PaginationNav } from "flowbite-svelte";

  let currentPage = $state(1);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>

<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} layout="table" />

<PaginationNav size="large" {currentPage} {totalPages} onPageChange={handlePageChange} layout="table" />
```

### Pagination, PaginationItem

```svelte
<script lang="ts">
  import { Pagination } from "flowbite-svelte";

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

### PaginationNav

```svelte
<script lang="ts">
  import { PaginationNav } from "flowbite-svelte";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";

  let currentPage = $state(1);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>

<PaginationNav {currentPage} {totalPages} onPageChange={handlePageChange} layout="table">
  {#snippet prevContent()}
    <ArrowLeftOutline class="h-5 w-5" />
    Previous
  {/snippet}
  {#snippet nextContent()}
    Next
    <ArrowRightOutline class="h-5 w-5" />
  {/snippet}
</PaginationNav>
```

### Pagination, PaginationItem

```svelte
<script lang="ts">
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

## Active class

Use the following example to add active class.

```svelte
<script lang="ts">
  import { PaginationNav } from "flowbite-svelte";

  let currentPage = $state(1);
  const totalPages = 20;

  function handlePageChange(page: number) {
    currentPage = page;
    // Additional logic here
    console.log("Page changed to:", page);
  }
</script>

<PaginationNav
  {currentPage}
  {totalPages}
  onPageChange={handlePageChange}
  classes={{
    active: "bg-green-100 dark:bg-green-700 text-green-600 dark:text-white"
  }}
/>
```

## Component data

### Pagination

#### Types

[PaginationProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1233)

#### Props

- pages: []
- previous
- next
- prevContent
- nextContent
- table
- size
- ariaLabel

### PaginationButton

#### Types

[PaginationButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1197)

#### Props

- children
- size
- onclick
- disabled: false
- class: className
- href
- active: false

### PaginationItem

#### Types

[PaginationItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1229)

#### Props

- children
- size
- class: className
- href
- active

### PaginationNav

#### Types

[PaginationNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1203)

#### Props

- currentPage: 1
- totalPages: 1
- visiblePages: 5
- // New prop to control visible pages
    onPageChange
- prevContent
- nextContent
- prevClass
- nextClass
- layout: "pagination"
- nextLabel: "Next"
- previousLabel: "Previous"
- ariaLabel: "Page navigation"
- size: "default"
- class: className
- classes
- spanClass
- tableDivClass


## References

- [Flowbite Pagination](https://flowbite.com/docs/components/pagination/)
