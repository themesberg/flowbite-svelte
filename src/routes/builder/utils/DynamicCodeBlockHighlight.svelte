<script lang="ts">
  import { HighlightSvelte, Highlight } from "svelte-rune-highlight";
  import markdown from "highlight.js/lib/languages/markdown";
  import { Button, Badge } from "$lib";
  import { copyToClipboard, replaceLibImport } from "./helpers";
  import { highlightcompo } from "./theme";

  interface Props {
    // componentStatus: boolean;
    handleExpandClick: () => void;
    showExpandButton?: boolean;
    expand?: boolean;
    code: string;
    badgeClass?: string;
    buttonClass?: string;
    codeLang?: string;
    class?: string;
    expanded?: boolean;
    replaceLib?: boolean;
  }

  let { code, handleExpandClick, showExpandButton, expand, codeLang, badgeClass, buttonClass, replaceLib, class: className }: Props = $props();

  if (replaceLib) {
    code = replaceLibImport(code);
  }

  $effect(() => {
    if (replaceLib) {
      code = replaceLibImport(code);
    }
  });

  const { base, badge, button } = $derived(highlightcompo());
  let copiedStatus = $state(false);

  function handleCopyClick() {
    copyToClipboard(code)
      .then(() => {
        copiedStatus = true;
        setTimeout(() => {
          copiedStatus = false;
        }, 1000);
      })
      .catch((err) => {
        console.error("Error in copying:", err);
        // Handle the error as needed
      });
  }

  const mdLang = {
    name: "markdown",
    register: markdown
  };
</script>

<div class={base({ className })}>
  <div class="relative">
    <div class="overflow-hidden {showExpandButton ? 'pb-8' : ''}" class:max-h-56={!expand} tabindex="-1">
      {#if copiedStatus}
        <Badge class={badge({ class: badgeClass })} color="green">Copied to clipboard</Badge>
      {/if}
      {#if codeLang === "md"}
        <Highlight language={mdLang} {code} />
      {:else if code}
        <div class="highlight">
          <pre class="language-svelte !-mt-2 mb-0 !rounded-none">{code}</pre>
        </div>
      {:else}
        no code is provided
      {/if}
    </div>
    <Button class={button({ class: buttonClass })} onclick={handleCopyClick}>
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
      </svg>
    </Button>
    {#if showExpandButton}
      <button onclick={() => handleExpandClick()} type="button" class="hover:text-primary-700 absolute start-0 bottom-0 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{expand ? "Collapse code" : "Expand code"}</button>
    {/if}
  </div>
</div>
