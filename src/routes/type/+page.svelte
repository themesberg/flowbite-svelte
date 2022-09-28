<script lang="ts">
  import { ExampleDiv } from '../utils';
  import { Breadcrumb, BreadcrumbItem, Heading } from '$lib';
  import type { PageData } from './$types';
  export let data: PageData;
  let dir = 'Pages';
  let breadcrumb_title = 'Types';
  let title = 'Types';
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<ExampleDiv tag="pre" class="dark:text-white">
  {data.types}
</ExampleDiv>
