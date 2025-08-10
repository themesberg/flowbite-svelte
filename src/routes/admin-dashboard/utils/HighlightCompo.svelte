<script lang="ts">
  import { HighlightSvelte, Highlight } from 'svelte-rune-highlight';
  import markdown from 'highlight.js/lib/languages/markdown';
  import { Clipboard } from 'flowbite-svelte';
  import { replaceLibImport } from './helpers';
  import { highlightcompo } from './theme';
  // import clsx from "clsx";

  interface Props {
    // componentStatus: boolean;
    code: string;
    contentClass?: string;
    codeLang?: string;
    class?: string;
    expanded?: boolean;
    replaceLib?: string;
  }

  let { code, codeLang, contentClass = 'overflow-hidden', replaceLib = 'runes-webkit', class: className }: Props = $props();

  let value = $state(code);
  if (replaceLib) {
    code = replaceLibImport(code, replaceLib);
  }

  let showExpandButton: boolean = $state(false);
  let expand: boolean = $state(false);
  const checkOverflow = (el: HTMLElement) => {
    const isOverflowingY = el.clientHeight < el.scrollHeight;
    showExpandButton = isOverflowingY;
  };

  // const base = $derived(highlightcompo({ class: clsx(className) }));
  const base = $derived(highlightcompo({ class: className }));

  const handleExpandClick = () => {
    expand = !expand;
  };

  const mdLang = {
    name: 'markdown',
    register: markdown
  };
</script>

<div class={base}>
  <div class="{contentClass} {showExpandButton ? 'pb-8' : ''}" class:max-h-72={!expand} tabindex="-1" use:checkOverflow>
    <Clipboard size="xs" color="alternative" bind:value class="absolute top-8 right-2 w-20 bg-gray-50 focus:ring-0 dark:bg-gray-800">
      {#snippet children(success)}
        {#if success}
          Copied
        {:else}
          Copy
        {/if}
      {/snippet}
    </Clipboard>
    {#if codeLang === 'md'}
      <Highlight language={mdLang} {code} class="m-0 p-0" />
    {:else if code}
      <HighlightSvelte {code} class="m-0 p-0" />
    {:else}
      no code is provided
    {/if}
  </div>

  {#if showExpandButton}
    <button
      onclick={handleExpandClick}
      type="button"
      class="hover:text-primary-700 absolute start-0 bottom-0 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >{expand ? 'Collapse code' : 'Expand code'}</button
    >
  {/if}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: code: any;
@props:codeLang: any;
@props:contentClass: any = "overflow-hidden";
@props:replaceLib: any = "runes-webkit";
@props:class: string;
-->
