<script lang="ts">
  import { Button, Badge } from '$lib';
  import { HighlightSvelte, Highlight } from 'svelte-rune-highlight';
  import { copyToClipboard } from './helpers';
  interface Props {
    // componentStatus: boolean;
    generatedCode: string;
    // handleCopyClick: () => void;
    class?: string;
  }
  let copiedStatus = $state(false);

  function handleCopyClick() {
  copyToClipboard(generatedCode)
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
  let { generatedCode, class: className }: Props = $props()
</script>

<div class={className}>
  <div class="relative">
    {#if copiedStatus}
      <Badge class="absolute -top-8 right-0" color="green">Copied to clipboard</Badge>
    {/if}
    <HighlightSvelte code={generatedCode} />
    <Button class="absolute right-2 top-4 rounded px-2 py-1 text-white" onclick={handleCopyClick}>Copy</Button>
  </div>
</div>