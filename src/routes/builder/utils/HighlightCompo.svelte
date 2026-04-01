<script lang="ts">
  import { HighlightSvelte, Highlight } from "svelte-rune-highlight";
  import markdown from "highlight.js/lib/languages/markdown";
  import { Button, Badge } from "$lib";
  import { copyToClipboard, replaceLibImport } from "./helpers";
  import { highlightcompo } from "./theme";

  interface Props {
    // componentStatus: boolean;
    code: string;
    badgeClass?: string;
    buttonClass?: string;
    codeLang?: string;
    class?: string;
    expanded?: boolean;
    replaceLib?: boolean;
  }

  let { code, codeLang, badgeClass, buttonClass, replaceLib = true, class: className }: Props = $props();

  let processedCode = $derived(replaceLib ? replaceLibImport(code) : code);

  let showExpandButton: boolean = $state(false);
  let expand: boolean = $state(false);
  const checkOverflow = (el: HTMLElement) => {
    const isOverflowingY = el.clientHeight < el.scrollHeight;
    showExpandButton = isOverflowingY;
  };

  const { base, badge, button } = $derived(highlightcompo());
  let copiedStatus = $state(false);

  const handleExpandClick = () => {
    expand = !expand;
  };

  function handleCopyClick() {
    copyToClipboard(processedCode)
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
    <div class="overflow-hidden {showExpandButton ? 'pb-8' : ''}" class:max-h-72={!expand} tabindex="-1" use:checkOverflow>
      {#if copiedStatus}
        <Badge class={badge({ class: badgeClass })} color="success">Copied to clipboard</Badge>
      {/if}
      {#if codeLang === "md"}
        <Highlight language={mdLang} code={processedCode} />
      {:else if processedCode}
        <HighlightSvelte code={processedCode} />
      {:else}
        no code is provided
      {/if}
    </div>

    <Button class={button({ class: buttonClass })} onclick={handleCopyClick}>Copy</Button>
    {#if showExpandButton}
      <button
        onclick={handleExpandClick}
        type="button"
        class="hover:text-fg-brand border-default-strong bg-neutral-tertiary-medium text-body hover:bg-neutral-tertiary-medium absolute start-0 bottom-0 w-full border-t px-5 py-2.5 text-sm font-medium"
      >
        {expand ? "Collapse code" : "Expand code"}
      </button>
    {/if}
  </div>
</div>
