<script lang="ts">
  import { page } from "$app/state";
  import { PaginationItem } from "$lib";
  import ArrowLeft from "./icons/ArrowLeft.svelte";
  import ArrowRight from "./icons/ArrowRight.svelte";

  // const identity = x => x;
  let { children = undefined } = $props();

  const {
    data,
    url,
    params: { slug }
  } = page;

  interface PostMeta {
    dir: string;
    component_title: string;
  }

  interface Post {
    path: string;
    meta: PostMeta;
  }

  const components = (Object.values(data.posts.posts) as Post[][])
    .flat()
    .filter((x): x is Post => x.meta && x.meta.dir === data.dir)
    .map(({ path, meta }) => ({ path, name: meta.component_title }));

  const index = components.findIndex((x) => x.path === "/" + slug);

  function sibling(next: boolean) {
    const i = next ? index + 1 : index - 1,
      { path, name } = components[i],
      href = "" + new URL(path.slice(1), url);

    return { href, name };
  }
</script>

<div class="flex flex-col items-start gap-4 py-4">
  {#if index >= 0}
    <div class="flex flex-row justify-between gap-2.5 self-stretch">
      {#if index > 0}
        {@const { name, href } = sibling(false)}
        <PaginationItem {href} class="hover:text-primary-700 dark:hover:text-primary-700 flex  items-center  gap-2.5">
          <ArrowLeft />
          {name}
        </PaginationItem>
      {:else}
        <div></div>
      {/if}
      <div class="hidden sm:block">
        {@render children?.()}
      </div>
      {#if index < components.length - 1}
        {@const { name, href } = sibling(true)}
        <PaginationItem {href} class="hover:text-primary-700 dark: dark:hover:text-primary-700 flex items-center gap-2.5">
          {name}
          <ArrowRight />
        </PaginationItem>
      {:else}
        <div></div>
      {/if}
    </div>
  {/if}
  <div class="sm:hidden">
    {@render children?.()}
  </div>
</div>
