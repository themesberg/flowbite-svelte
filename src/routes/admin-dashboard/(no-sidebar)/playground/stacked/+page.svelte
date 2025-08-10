<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import MetaTag from '../../../utils/MetaTag.svelte';
  import { Playground } from 'flowbite-svelte-admin-dashboard';

  const path: string = '/playground/stacked';
  const description: string = 'Playground stacked example - Flowbite Svelte Admin Dashboard';
  const metaTitle: string = 'Flowbite Svelte Admin Dashboard - Playground stacked';
  const subtitle: string = 'Playground stacked';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<div id="main-content" class="relative mx-auto h-full w-full max-w-screen-2xl overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900">
  <Playground title="Create something awesome here">
    {#snippet breadcrumb()}
      <Breadcrumb class="mb-5">
        <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
        <BreadcrumbItem href="/">Playground</BreadcrumbItem>
        <BreadcrumbItem>Stacked</BreadcrumbItem>
      </Breadcrumb>
    {/snippet}
  </Playground>
</div>
