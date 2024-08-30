<script lang="ts">
  import { HighlightSvelte, Highlight } from 'svelte-rune-highlight';
  import githubDark from 'svelte-rune-highlight/styles/github-dark';
  import markdown from 'svelte-rune-highlight/languages/markdown';
  import { Button, Badge } from '$lib';
  import { copyToClipboard } from './helpers';
  import { highlightcompo } from './theme'
 
  interface Props {
    // componentStatus: boolean;
    code: string;
    badgeClass?: string;
    buttonClass?: string;
    codeLang?: string;
    class?: string;
  }
  
  let { code, codeLang, badgeClass, buttonClass, class: className }: Props = $props()
  const {base, badge, button} = $derived(highlightcompo())
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
      console.error('Error in copying:', err);
      // Handle the error as needed
    });
  }
  
</script>

<svelte:head>
  {@html githubDark}
</svelte:head>

<div class={base({ className })}>
  <div class="relative">
    {#if copiedStatus}
      <Badge class={badge({ class: badgeClass})} color="green">Copied to clipboard</Badge>
    {/if}
    {#if codeLang === 'md'}
      <Highlight language={markdown} {code} />
    {:else if code}
      <HighlightSvelte {code} />
    {:else}
      no code is provided
    {/if}
    <Button class={button({ class: buttonClass})} onclick={handleCopyClick}>Copy</Button>
  </div>
</div>
