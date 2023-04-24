<script lang="ts">
  import { page } from '$app/stores';
  import PaginationItem from '$lib/paginations/PaginationItem.svelte';
  import { identity } from 'svelte/internal';
  import ArrowLeft from './icons/ArrowLeft.svelte';
  import ArrowRight from './icons/ArrowRight.svelte';

  const {
    data,
    url,
    params: { slug }
  } = $page;

  const components = Object.values(data.posts)
    .flatMap(identity)
    .filter((x) => x.meta.dir === data.dir)
    .map(({ path, meta }) => ({ path, name: meta.component_title }));

  const index = components.findIndex((x) => x.path === '/' + slug);

  function sibling(next: boolean) {
    const i = next ? index + 1 : index - 1,
      { path, name } = components[i],
      href = '' + new URL(path.slice(1), url);

    return { href, name };
  }
</script>

<div class="flex flex-col items-start gap-4 py-4">
  {#if index >= 0}
    <div class="flex flex-row justify-between gap-2.5 self-stretch">
      {#if index > 0}
        {@const { name, href } = sibling(false)}
        <PaginationItem
          {href}
          class="flex items-center gap-2.5  hover:text-primary-700  dark:hover:text-primary-700">
          <ArrowLeft />
          {name}
        </PaginationItem>
      {:else}
        <div />
      {/if}
      <div class="hidden sm:block">
        <slot />
      </div>
      {#if index < components.length - 1}
        {@const { name, href } = sibling(true)}
        <PaginationItem
          {href}
          class="flex items-center gap-2.5 hover:text-primary-700 dark: dark:hover:text-primary-700">
          {name}
          <ArrowRight />
        </PaginationItem>
      {:else}
        <div />
      {/if}
    </div>
  {/if}
  <div class="sm:hidden">
    <slot />
  </div>
</div>
