<script lang="ts">
  import { Select, Label, Button, Pagination, PaginationItem, type PaginationItemProps } from '$lib';
  import { ChevronLeftOutline, ChevronRightOutline, ArrowLeftOutline, ArrowRightOutline } from 'flowbite-svelte-icons';
  import { page } from '$app/stores';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let activeUrl = $state($page.url.searchParams.get('page'));
  let pages = $state([
    { name: '1', href: '/components/pagination?page=1', active: false },
    { name: '2', href: '/components/pagination?page=2', active: false },
    { name: '3', href: '/components/pagination?page=3', active: false },
    { name: '4', href: '/components/pagination?page=4', active: false },
    { name: '5', href: '/components/pagination?page=5', active: false }
  ]);
  let helper = { start: 1, end: 10, total: 100 };

  $effect(() => {
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
  });
  let pagenationSize: PaginationItemProps['size'] = $state('default');
  const changeSize = () => {
    pagenationSize = pagenationSize === 'large' ? 'default' : 'large';
  };
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

<H1>Pagination</H1>
<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default pagination</H2>
<CodeWrapper class="flex flex-col items-center justify-center gap-3">
  <div class="h-12">
    <Pagination {pages} {previous} {next} size={pagenationSize} />
  </div>
  <Button onclick={changeSize}>
    {#if pagenationSize === 'default'}
      Large
    {:else}
      Default
    {/if}
  </Button>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-pagination.md'] as string} />

<H2>Pagination with icons</H2>
<CodeWrapper class="flex flex-col items-center justify-center gap-3">
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
</CodeWrapper>
<HighlightCompo code={modules['./md/pagination-with-icons.md'] as string} />

<H2>Previous and next</H2>
<CodeWrapper class="flex flex-col items-center justify-center gap-3">
  <div class="flex space-x-3 rtl:space-x-reverse">
    <PaginationItem onclick={previous}>Previous</PaginationItem>
    <PaginationItem onclick={next}>Next</PaginationItem>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/previous-and-next.md'] as string} />

<H2>Previous and next with icons</H2>
<CodeWrapper class="flex flex-col items-center justify-center gap-3">
  <div class="flex space-x-3 rtl:space-x-reverse">
    <PaginationItem class="flex items-center" onclick={previous}>
      <ArrowLeftOutline class="me-2 h-5 w-5" />
      Previous
    </PaginationItem>
    <PaginationItem class="flex items-center" onclick={next}>
      Next
      <ArrowRightOutline class="ms-2 h-5 w-5" />
    </PaginationItem>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/previous-and-next-with-icons.md'] as string} />

<H2>Table data pagination</H2>
<CodeWrapper class="flex flex-col items-center justify-center gap-3">
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
</CodeWrapper>

<HighlightCompo code={modules['./md/table-data-pagination.md'] as string} />

<H2>Table data pagination with icons</H2>
<CodeWrapper class="flex flex-col items-center justify-center gap-3">
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
</CodeWrapper>

<HighlightCompo code={modules['./md/table-data-pagination-with-icons.md'] as string} />

<H2>Event example</H2>
<CodeWrapper class="flex flex-col items-center justify-center gap-3">
  <Pagination {pages} {previous} {next} onclick={handleClick} />
</CodeWrapper>

<HighlightCompo code={modules['./md/event-example.md'] as string} />
