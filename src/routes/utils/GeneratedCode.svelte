<script lang="ts">
  import { Button, Badge } from '$lib';
  interface Props {
    componentStatus: boolean;
    generatedCode: string;
    handleCopyClick: () => void;
  }
  let { componentStatus, generatedCode, handleCopyClick }: Props = $props()
</script>

<h3 class="text-lg font-semibold">Generated Code:</h3>
<div class="relative">
  {#if componentStatus}
    <Badge class="absolute -top-8 right-0" color="green">Copied to clipboard</Badge>
  {/if}
  <pre class="word-break-break-word whitespace-pre-wrap rounded-lg bg-gray-100 px-4 pr-20 pt-4">
    <code class="font-mono text-sm text-gray-800">{generatedCode}</code>
  </pre>
  <Button class="absolute right-2 top-4 rounded px-2 py-1 text-white" onclick={handleCopyClick}>Copy</Button>
</div>