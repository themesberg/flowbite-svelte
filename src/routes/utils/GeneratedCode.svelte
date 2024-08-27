<script lang="ts">
  import { Button, Badge } from '$lib';
  interface Props {
    componentStatus: boolean;
    generatedCode: string;
    handleCopyClick: () => void;
    class?: string;
  }
  let { componentStatus, generatedCode, handleCopyClick, class: className }: Props = $props()
</script>

<div class={className}>
  <h3 class="text-xl font-semibold my-4">Generated Code:</h3>
  <div class="relative">
    {#if componentStatus}
      <Badge class="absolute -top-8 right-0" color="green">Copied to clipboard</Badge>
    {/if}
    <div class="word-break-break-word whitespace-pre-wrap rounded-lg bg-gray-100 p-8 pr-16">
      <code class="font-mono text-sm text-gray-800">{generatedCode}</code>
    </div>
    <Button class="absolute right-2 top-4 rounded px-2 py-1 text-white" onclick={handleCopyClick}>Copy</Button>
  </div>
</div>