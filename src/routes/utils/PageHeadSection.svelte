<script lang="ts">
  import { Heading } from "$lib";
  import CompoDescription from "./CompoDescription.svelte";

  // export let dir: string;
  // export let breadcrumb_title: string;
  export let title: string;
  export let description: string;

  // dir;
  // breadcrumb_title;
</script>

<div class="border-b border-gray-200 pb-8 dark:border-gray-800">
  <Heading class="mb-2 inline-block font-extrabold tracking-tight text-gray-900 dark:text-white" tag="h1" customSize="text-3xl">
    {title}
  </Heading>

  <CompoDescription>{description}</CompoDescription>
</div>
