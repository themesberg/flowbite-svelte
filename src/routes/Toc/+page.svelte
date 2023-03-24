<script lang="ts">
  import type { LinkType } from '$lib/types';
  /*  Inspired by 'svelte-toc'
        Simplified version of Table of Contents.
    */
  import { onMount } from 'svelte';

  export let headingSelector = `main :where(h2.htwo)`;
  let headings: LinkType[] = [];

  onMount(() => {
    const observer: MutationObserver = new MutationObserver(toc);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  });

  function toc() {
    if (typeof document === `undefined`) return; // for SSR
    headings = [...document.querySelectorAll<HTMLElement>(headingSelector)].map((x: HTMLElement) => {
      return { href: '#' + x.id, name: x.innerText };
    });
  }
</script>

{#if headings.length}
  <div class="hidden flex-none w-56 xl:text-sm xl:block text-gray-500 dark:text-gray-400">
    <div class="flex flex-col justify-between overflow-y-auto max-h-screen pt-16 pb-16 px-8 top-20 sticky">
      <h5
        class="mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">
        On this page
      </h5>
      <nav id="TableOfContents" class="mb-8">
        <ul>
          {#each headings as { href, name }}
            <li><a {href} class="block py-1">{name}</a></li>
          {/each}
        </ul>
      </nav>
    </div>
  </div>
{/if}
