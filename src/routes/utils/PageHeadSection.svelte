<script lang="ts">
  import { Heading } from "$lib";
  import CompoDescription from "./CompoDescription.svelte";
  type Props = {
    title: string;
    description: string;
  }

  let { title, description }: Props = $props()

</script>

<div class="border-b border-gray-200 pb-8 dark:border-gray-800">
  <Heading class="mb-2 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white" tag="h1">
    {title}
  </Heading>

  <CompoDescription>{description}</CompoDescription>
</div>
