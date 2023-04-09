<script lang="ts">
  import type { LinkType } from '$lib/types';
  /*  
    Inspired by 'svelte-toc'
    Simplified version of Table of Contents.
  */
  import { onMount } from 'svelte';

  export let headingSelector = `#mainContent > :where(h2, h3)`;
  let headings: LinkType[] = [];

  onMount(() => {
    const observer: MutationObserver = new MutationObserver(toc);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  });

  function extract(x: HTMLElement) {
    if (x.firstElementChild)
      return { rel: x.tagName, href: '#' + x.firstElementChild?.id, name: x?.firstChild?.nodeValue ?? '' };
    return { rel: '', href: '', name: '' };
  }

  function indent(name: string | undefined) {
    return name === 'H2' ? '' : 'pl-3';
  }

  function toc() {
    if (typeof document === `undefined`) return; // for SSR
    headings = [...document.querySelectorAll<HTMLElement>(headingSelector)]
      .map(extract)
      .filter((x) => x.href);
  }
</script>

{#if headings.length}
  <div class="flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block">
    <div class="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
      <div class="mb-8">
        <h4
          class="pl-2.5 mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">
          On this page
        </h4>
        <nav id="TableOfContents">
          <ul>
            {#each headings as { rel, href, name }}
              <li class={indent(rel)}><a {href} class="block">{name}</a></li>
            {/each}
          </ul>
        </nav>
      </div>
    </div>
  </div>
{/if}
