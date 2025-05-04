<script lang="ts">
  import { Pagination, PaginationItem, type PaginationItemProps } from "$lib";
  import { ChevronLeftOutline, ChevronRightOutline, ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";

  let activeUrl = $derived(page.url.searchParams.get("page"));
  let pages: PaginationItemProps[] = $state([
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

  let pagesWithoutHref = $state([
    { name: "1", href: "/docs/components/pagination?page=1", active: false },
    { name: "2", href: "/docs/components/pagination?page=2", active: false },
    { name: "3", href: "/docs/components/pagination?page=3", active: false },
    { name: "4", href: "/docs/components/pagination?page=4", active: false },
    { name: "5", href: "/docs/components/pagination?page=5", active: false }
  ]);

  let helper = { start: 1, end: 10, total: 100 };

  const handleClick = () => {
    alert("Page clicked");
  };
</script>

<h1 class="my-4 text-3xl">Pagination</h1>

<p>The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.</p>

<h2 class="my-4 text-2xl">Default pagination</h2>

<div class="example-container flex flex-col items-center justify-center gap-3">
  <Pagination {pages} {previous} {next} />
  <Pagination {pages} size="large" {previous} {next} />
</div>

<h2 class="my-4 text-2xl">Pagination with icons</h2>

<div class="example-container flex flex-col items-center justify-center gap-3">
  <div class="flex flex-col items-center justify-center gap-3">
    <Pagination pages={pagesWithoutHref} {previous} {next}>
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
</div>

<h2 class="my-4 text-2xl">Previous and next</h2>

<div class="example-container flex flex-col items-center justify-center gap-3">
  <div class="flex space-x-3 rtl:space-x-reverse">
    <PaginationItem onclick={previous}>Previous</PaginationItem>
    <PaginationItem onclick={next}>Next</PaginationItem>
  </div>
  <div class="flex space-x-3 rtl:space-x-reverse">
    <PaginationItem size="large" onclick={previous}>Previous</PaginationItem>
    <PaginationItem size="large" onclick={next}>Next</PaginationItem>
  </div>
</div>

<h2 class="my-4 text-2xl">Previous and next with icons</h2>

<div class="example-container flex flex-col items-center justify-center gap-3">
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
</div>

<h2 class="my-4 text-2xl">Table data pagination</h2>

<div class="example-container flex flex-col items-center justify-center gap-3">
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
</div>

<h2 class="my-4 text-2xl">Table data pagination with icons</h2>

<div class="example-container flex flex-col items-center justify-center gap-3">
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
</div>

<h2 class="my-4 text-2xl">Event example</h2>

<div class="example-container flex justify-center">
  <Pagination pages={pagesWithoutHref} {previous} {next} onclick={handleClick} />
</div>
