<script lang="ts">
  import type { LinkType } from '$lib/types';
  /*  
    Inspired by 'svelte-toc'
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
      if(!x.childNodes[2]) console.log(x)
      return { href: '#' + x.childNodes[2].id, name: x?.childNodes[0]?.nodeValue ??"" };
    });
  }
</script>

{#if headings.length}
  <div class="flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block">
    <div class="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
      <div class="mb-8">
      <h4 class="pl-2.5 mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">On this page</h4>
      <nav id="TableOfContents">
        <ul>
          {#each headings as { href, name }}
            <li><a {href} class="block">{name}</a></li>
          {/each}
        </ul>
      </nav>
    </div>
    </div>
  </div>
{/if}
