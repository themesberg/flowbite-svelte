<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import type { PageData } from "../$types";
  import CompoCard from "../utils/CompoCard.svelte";
  import Section from "./utils/Section.svelte";

  export let data: PageData;

  let components = [...data.posts.forms, ...data.posts.components, ...data.posts.typography].sort((a, b) => a.meta.component_title.localeCompare(b.meta.component_title));

  const INIT_COUNT = 18;
  let expanded: boolean = false;
</script>

<Section class="flex flex-col gap-8 sm:gap-12 lg:pt-24">
  <div class="flex flex-col items-center gap-4 sm:gap-4">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white">Svelte UI components</h2>
    <p class="mx-auto max-w-3xl text-center text-lg font-normal text-gray-500 dark:text-gray-400">
      Explore the whole collection of <span class="font-medium text-gray-900 dark:text-white">
        over {components.length} open-source
      </span>
      UI components and interactive elements built with Svelte and Flowbite
    </p>
  </div>

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
    {#each components.slice(0, INIT_COUNT) as { path, meta: { dir, component_title, thumnailSize } } (dir + path)}
      <CompoCard name={component_title} {thumnailSize} {dir} {path} />
    {/each}
    {#if expanded}
      {#each components.slice(INIT_COUNT) as { path, meta: { dir, component_title, thumnailSize } } (dir + path)}
        <CompoCard name={component_title} {thumnailSize} {dir} {path} />
      {/each}
    {/if}
  </div>

  {#if !expanded}
    <div class="mb-4 flex w-full justify-center">
      <Button size="md" class="hover:text-primary-600 focus:text-primary-600 whitespace-nowrap" color="alternative" onclick={() => (expanded = true)}>View all components</Button>
    </div>
  {/if}
</Section>
