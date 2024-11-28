<script>
  import {Theme} from '$lib';
  import {  Breadcrumb, BreadcrumbItem } from '$lib';
  import { themeConfig } from './theme.config';
</script>

<Theme theme={themeConfig}>
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
