<script lang="ts">
  import { Clipboard, Label, Helper, ButtonGroup, Tooltip, Button, Input } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("");
  let success = $state(false);

  function onclick(ev: MouseEvent): void {
    const target = ev.target as HTMLElement;
    const codeBlock = target.ownerDocument.querySelector("#code-block");
    if (codeBlock) {
      value = codeBlock.textContent || "";
    }
  }
</script>

<div class="w-full max-w-lg space-y-1">
  <Label>Copy source code block:</Label>
  <div class="relative h-64 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
    <div class="max-h-full overflow-scroll">
      <pre><code id="code-block" class="text-sm whitespace-pre text-gray-500 dark:text-gray-400">  
    <div class="space-y-2">
        <Label for="url-shortener">Shorten URL:</Label>
        <ButtonGroup>
        <Button color="primary">Generate</Button>
        <Input id="url-shortener" bind:value readonly disabled class="w-64" />
            <Clipboard bind:value>
                {#snippet children(success: boolean)}
            <Tooltip class="whitespace-nowrap">{success ? "Copied" : "Copy link"}</Tooltip>
                {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
          {/snippet}
            </Clipboard>
        </ButtonGroup>
        <Helper>Make sure that your URL is valid</Helper>
    </div>
            </code></pre>
    </div>

    <Clipboard color={success ? "alternative" : "light"} bind:value bind:success size="sm" class="absolute end-2 top-2 h-8 px-2.5 font-medium focus:ring-0" {onclick}>
      {#if success}
        <CheckOutline class="h-3 w-3" /> Copied
      {:else}
        <ClipboardCleanSolid class="h-3 w-3" /> Copy code
      {/if}
    </Clipboard>
  </div>
  <Helper>Configure Tailwind CSS and Flowbite before copying the code</Helper>
</div>