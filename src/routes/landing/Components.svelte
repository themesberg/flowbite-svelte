<script lang="ts">
  import type { PageData } from '../$types';
  import Button from '$lib/buttons/Button.svelte';
  import CompoCard from '../utils/CompoCard.svelte';

  export let data: PageData;
  let components = [
    ...data.posts.forms,
    ...data.posts.components,
    ...data.posts.typography,
    ...data.posts.experimental
  ].sort((a, b) => a.meta.component_title.localeCompare(b.meta.component_title));

</script>

<div class="w-full px-4 lg:px-20">
  <div class="flex flex-col items-center pt-6 sm:pt-8 lg:pt-24 gap-4 sm:gap-4 lg:mb-12 mb-8">
    <h2 class="tracking-tight font-extrabold text-3xl lg:text-4xl text-gray-900 dark:text-white">
      Svelte UI components
    </h2>
    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-center">
      Explore the whole collection of <span class="font-medium text-gray-900 dark:text-white"
        >over {components.length} open-source</span> UI components and interactive elements built with Svelte and Flowbite
    </p>
  </div>

  <div class="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 xl:grid-cols-3 pb-10">
    {#each components as { path, meta: { dir, component_title, thumnailSize } }}
      <CompoCard name={component_title} {thumnailSize} {dir} {path} />
    {/each}
  </div>

  <div class="w-full flex justify-center lg:mb-12 mb-8">
    <Button
      size="md"
      class="whitespace-nowrap hover:text-primary-600 focus:text-primary-600"
      href="/docs/components/accordion"
      color="alternative">
      View all components
    </Button>
  </div>

</div>
