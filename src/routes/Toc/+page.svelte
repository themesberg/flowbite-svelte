<script lang="ts">
  /*  Inspired by 'svelte-toc'
        Simplified version of Table of Contents.
    */
  import { onMount } from 'svelte';

  export let headingSelector = `main :where(h2.htwo)`;
  let headings = [];

  onMount(() => {
    const observer: MutationObserver = new MutationObserver(toc);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  });

  function toc() {
    if (typeof document === `undefined`) return; // for SSR
    headings = [...document.querySelectorAll(headingSelector)].map((x: HTMLElement) => {
      return { href: '#' + x.id, label: x.innerText };
    });
  }
</script>

{#if headings.length}
<div class="hidden flex-none pl-8 mr-8 w-56 xl:text-sm xl:block text-gray-500 dark:text-gray-400">
  <div class="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) pt-10 pb-6 top-12">
    <div class="mb-8">
      <h5
        class="mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">
        On this page
      </h5>
      <nav id="TableOfContents">
        <ul>
          {#each headings as { href, label }}
            <li><a {href} class="block py-1">{label}</a></li>
          {/each}
        </ul>
      </nav>
    </div>
  </div>
</div>
{/if}