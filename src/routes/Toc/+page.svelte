<script lang="ts">
  /*  
  Inspired by 'svelte-toc'
  Simplified version of Table of Contents.
  */
  import type { LinkType } from '$lib/types';
  import { onMount } from 'svelte';

  const aClass =
    "border-l border-white duration-200 hover:text-gray-900 transition-none dark:hover:text-white hover:border-gray-300 after:content-['#'] after:text-primary-700 dark:after:text-primary-700 dark:border-gray-900 dark:hover:border-gray-700 after:ml-2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-100";

  export let extract: (x: HTMLElement) => LinkType = (x: HTMLElement) => ({ name: x.textContent ?? '' });

  export let headingSelector: string;

  let headings: LinkType[] = [];

  onMount(() => {
    const observer: MutationObserver = new MutationObserver(toc);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  });

  function indent(name: string | undefined) {
    return name === 'H2' ? 'pl-2.5' : 'pl-6';
  }

  function toc() {
    if (typeof document === `undefined`) return; // for SSR

    headings = [...document.querySelectorAll<HTMLElement>(headingSelector)]
      .map(extract)
      .filter((x) => x.name);
  }
</script>

<div class="flex-none hidden w-64 pl-8 xl:text-sm xl:block right-0">
  {#if headings.length}
    <div class="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
      <div class="mb-8">
        <h4
          class="pl-2.5 mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">
          On this page
        </h4>
        <nav>
          <ul class="overflow-x-hidden font-medium text-gray-500 dark:text-gray-400">
            {#each headings as { rel, href, name }}
              <li class="py-2">
                <a {href} class="{indent(rel)} {aClass}">{name}</a>
              </li>
            {/each}
          </ul>
        </nav>
      </div>
    </div>
  {/if}
</div>
