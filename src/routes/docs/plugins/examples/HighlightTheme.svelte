<script lang="ts">
  import { Clipboard } from "$lib";
   import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";
  const tiptapVersion = __TIPTAP__;
  let value = $state(`<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/base16/google-dark.min.css" />
</svelte:head>`);
  let success = $state(false);
  function onclick(ev: MouseEvent): void {
    const target = ev.target as HTMLElement;
    const codeBlock = target.ownerDocument.querySelector("#highlight-block");
    if (codeBlock) {
      value = codeBlock.textContent || "";
    }
  }
</script>

<div class="relative rounded-lg bg-gray-50 p-4 mt-9 dark:bg-gray-700">
  <div class="overflow-x-scroll">
<pre><code id="highlight-block">{value}</code></pre>
</div>
<Clipboard color={success ? "alternative" : "light"} bind:value bind:success size="sm" class="absolute end-2 -top-9 h-8 px-2.5 font-medium focus:ring-0" {onclick}>
      {#if success}
        <CheckOutline class="h-3 w-3" /> Copied
      {:else}
        <ClipboardCleanSolid class="h-3 w-3" /> Copy code
      {/if}
    </Clipboard>
</div>