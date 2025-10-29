<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  /*  
    Inspired by 'svelte-toc'
    Simplified version of Table of Contents.
    */
  import type { LinkType } from "$lib/types";
  import { tick } from "svelte";

  const aClass =
    "inline-block border-s border-white duration-200 hover:text-gray-900 transition-none dark:hover:text-white hover:border-gray-300 after:content-['#'] after:text-primary-700 dark:after:text-primary-700 dark:border-gray-900 dark:hover:border-gray-700 after:ms-2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-100";

  let { extract = (x: HTMLElement) => ({ name: x.textContent ?? "" }), headingSelector }: { extract: (x: HTMLElement) => LinkType; headingSelector: string } = $props();

  let headings: LinkType[] = $state([]);

  function indent(name: string | undefined) {
    return name === "H2" ? "ps-2.5" : "ps-6";
  }

  function toc(_: any) {
    // Delay initalization to post page load
    tick().then(() => {
      if (typeof document === `undefined`) return; // for SSR
      headings = [...document.querySelectorAll<HTMLElement>(headingSelector)].map(extract).filter((x) => x.name);
    });
  }

  afterNavigate(toc);
</script>

<svelte:document use:toc />

<div class="me-auto hidden w-64 flex-none ps-8 xl:block xl:text-sm">
  {#if headings.length}
    <div class="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-between overflow-y-auto pb-6">
      <div class="mb-40">
        <h4 class="my-4 ps-2.5 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white">On this page</h4>
        <nav>
          <ul class="space-y-2.5 overflow-x-hidden font-medium text-gray-500 dark:text-gray-400">
            {#each headings as { rel, href, name }}
              <li>
                <a {href} class="{indent(rel)} {aClass}">{name}</a>
              </li>
            {/each}
          </ul>
        </nav>
      </div>
    </div>
  {/if}
</div>
