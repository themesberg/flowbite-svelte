<script lang="ts">
  import { Heading } from "flowbite-svelte";
  import CompoDescription from "./CompoDescription.svelte";
  interface Props {
    dir?: string;
    breadcrumb_title?: string;
    title?: string;
    description?: string;
  }
  let { title, description }: Props = $props();
</script>

<div class="pb-8">
  <Heading class="mb-2 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white" tag="h1">
    {title}
  </Heading>

  <CompoDescription>{description}</CompoDescription>
</div>
