<script lang="ts">
  import { Clipboard, Label, Helper } from "flowbite-svelte";
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
    &#x3C;div class="space-y-2"&#x3E;
        &#x3C;Label for="url-shortener"&#x3E;Shorten URL:&#x3C;/Label&#x3E;
        &#x3C;ButtonGroup&#x3E;
        &#x3C;Button color="primary"&#x3E;Generate&#x3C;/Button&#x3E;
        &#x3C;Input id="url-shortener" bind:value readonly disabled class="w-64" /&#x3E;
            &#x3C;Clipboard bind:value&#x3E;
                {#snippet children(success: boolean)}
            &#x3C;Tooltip class="whitespace-nowrap"&#x3E;{success ? "Copied" : "Copy link"}&#x3C;/Tooltip&#x3E;
                {#if success}&#x3C;CheckOutline /&#x3E;{:else}&#x3C;ClipboardCleanSolid /&#x3E;{/if}
          {/snippet}
            &#x3C;/Clipboard&#x3E;
        &#x3C;/ButtonGroup&#x3E;
        &#x3C;Helper&#x3E;Make sure that your URL is valid&#x3C;/Helper&#x3E;
    &#x3C;/div&#x3E;
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