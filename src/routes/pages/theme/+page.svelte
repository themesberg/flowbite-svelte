<script>
  import Theme from "./Theme.svelte";
  import { Breadcrumb, BreadcrumbItem } from "$lib";
</script>

<Theme>
  <div class="overflow-x-scroll p-2 sm:p-6">
    <Breadcrumb>
      <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
      <BreadcrumbItem href="/">Projects</BreadcrumbItem>
      <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
    </Breadcrumb>
  </div>
</Theme>

<div class="overflow-x-scroll p-2 sm:p-6">
  <Breadcrumb>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
  </Breadcrumb>
</div>
