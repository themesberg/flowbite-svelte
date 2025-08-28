<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { HomeOutline, ChevronDoubleRightOutline } from "flowbite-svelte-icons";
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 px-5 py-3 dark:bg-gray-900">
  <BreadcrumbItem href="/" home>
    {#snippet icon()}
      <HomeOutline class="me-2 h-4 w-4" />
    {/snippet}Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/">
    {#snippet icon()}
      <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />
    {/snippet}
    Projects
  </BreadcrumbItem>
  <BreadcrumbItem>
    {#snippet icon()}
      <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />
    {/snippet}
    Flowbite Svelte
  </BreadcrumbItem>
</Breadcrumb>
