<script lang="ts">
  import { Button, TableSearch } from 'flowbite-svelte';
  import type { PageData } from '../$types';
  import CompoCard from './CompoCard.svelte';
  import Section from './Section.svelte';

  export let data: PageData;
  export let section;

  const sectionPosts = section !== undefined ? data.posts[section] : Object.values(data.posts).flat();

  let searchTerm = '';
  // const flattened_posts = Object.values(data.posts).flat()
  let components;
  $: {
    const searchTermLower = searchTerm.toLowerCase();
    components = sectionPosts.filter((obj) => {
      if (obj.meta && obj.meta.breadcrumb_title) {
        const breadcrumbTitleLower = obj.meta.breadcrumb_title.toLowerCase();
        const pathDoesNotIncludePage = obj.path.indexOf('/+page') === -1;
        // return breadcrumbTitleLower.indexOf(searchTermLower) !== -1;
        const breadcrumbTitleIncludesSearchTerm = breadcrumbTitleLower.indexOf(searchTermLower) !== -1;
        return breadcrumbTitleIncludesSearchTerm && pathDoesNotIncludePage;
      }
      return false;
    });
    // console.log('components', components);
  }

  const INIT_COUNT = 18;
  let expanded: boolean = true;
</script>

<Section class="mx-auto max-w-8xl">
  <TableSearch placeholder="Search by name" hoverable={true} bind:inputValue={searchTerm} divClass="relative overflow-x-auto mx-auto max-w-8xl">
    <slot name="header" />
    <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
      {#each components.slice(0, INIT_COUNT) as { path, meta: { dir, breadcrumb_title, no_of_components } } (dir + path)}
        <CompoCard name={breadcrumb_title} {no_of_components} {dir} {path} />
      {/each}
      {#if expanded}
        {#each components.slice(INIT_COUNT) as { path, meta: { dir, breadcrumb_title, no_of_components } } (dir + path)}
          <CompoCard name={breadcrumb_title} {no_of_components} {dir} {path} />
        {/each}
      {/if}
    </div>

    {#if !expanded}
      <div class="w-full flex justify-center mb-4">
        <Button size="md" class="whitespace-nowrap hover:text-primary-600 focus:text-primary-600" color="alternative" on:click={() => (expanded = true)}>View all components</Button>
      </div>
    {/if}
  </TableSearch>
</Section>
