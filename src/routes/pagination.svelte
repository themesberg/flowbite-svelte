<script>
  import { Pagination } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiHomeSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default pagination</span>
    <Card>
      <Pagination currentPage={1} totalPages={100} />
      <HighlightSvelte
        code={`<Pagination currentPage={1} totalPages={100} />
<!-- bind to get values -->`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Pagination with icons </span>
    <Card>
      <Pagination currentPage={1} showIcons={true} totalPages={100} />
      <HighlightSvelte code={`<Pagination currentPage={1} showIcons={true} totalPages={100} />`} />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Previous and next </span>
    <Card>
      <Pagination currentPage={1} layout="navigation" totalPages={100} />
      <HighlightSvelte code={`<Pagination currentPage={1} layout="navigation" totalPages={100} />`} />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Previous and next with icons </span>
    <Card>
      <Pagination currentPage={1} layout="navigation" totalPages={100} showIcons={true} />
      <HighlightSvelte code={`<Pagination currentPage={1} layout="navigation" totalPages={100} showIcons={true} />`} />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Table data navigation </span>
    <Card>
      <div class="flex items-center justify-center text-center">
        <Pagination currentPage={1} layout="table" totalPages={1000} />
      </div>
      <HighlightSvelte
        code={`<div class="flex items-center justify-center text-center">
  <Pagination currentPage={1} layout="table"  totalPages={1000} />
</div>`}
      />
    </Card>
  </div>
</div>
