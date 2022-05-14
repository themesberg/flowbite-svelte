<script>
  import { Breadcrumb, BreadcrumbItem } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiHomeSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default breadcrumb</span>
    <Card>
      <Breadcrumb aria-label="Default breadcrumb example">
        <BreadcrumbItem href="#" icon={HiHomeSolid}>Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
        <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
      </Breadcrumb>
      <HighlightSvelte
        code={`<Breadcrumb aria-label="Default breadcrumb example">
  <BreadcrumbItem href="#" icon={HiHomeSolid}>Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Solid background</span>
    <Card>
      <Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
        <BreadcrumbItem href="#" icon={HiHomeSolid}>Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
        <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
      </Breadcrumb>
      <HighlightSvelte
        code={`<Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
  <BreadcrumbItem href="#" icon={HiHomeSolid}>Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>`}
      />
    </Card>
  </div>
</div>
