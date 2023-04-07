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

<Breadcrumb class="pt-24 pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="inline-block mb-2 font-extrabold tracking-tight text-gray-900 dark:text-white" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

{#if libFiles}
<ExampleDiv>
  <GitHubSourceList {libFiles} />
</ExampleDiv>
{/if}
