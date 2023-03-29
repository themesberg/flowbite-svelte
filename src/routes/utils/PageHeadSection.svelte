<script lang='ts'>
  import { Breadcrumb, BreadcrumbItem, Heading } from '$lib'; 
  import CompoDescription from './CompoDescription.svelte';
  import ExampleDiv from './ExampleDiv.svelte';
  import GitHubSourceList from './GitHubSourceList.svelte';

  export let dir: string;
  export let breadcrumb_title: string;
  export let title: string;
  export let description: string;
  export let libFiles:any;
</script>

<Breadcrumb class="pt-28 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<ExampleDiv>
  <GitHubSourceList {libFiles} />
</ExampleDiv>
