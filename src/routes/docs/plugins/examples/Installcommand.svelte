<script lang="ts">
  import { Clipboard } from "$lib";
   import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";
  const tiptapVersion = __TIPTAP__;
  let value = $state('');
  let success = $state(false);
  function onclick(ev: MouseEvent): void {
    const target = ev.target as HTMLElement;
    const codeBlock = target.ownerDocument.querySelector("#code-block");
    if (codeBlock) {
      value = codeBlock.textContent || "";
    }
  }
</script>

<div class="relative rounded-lg bg-gray-50 p-4 pt-12 dark:bg-gray-700">
<pre><code id="code-block">pnpm i -D @flowbite-svelte-plugins/texteditor lowlight @tiptap/core@{tiptapVersion}</code></pre>
<Clipboard color={success ? "alternative" : "light"} bind:value bind:success size="sm" class="absolute end-2 top-2 h-8 px-2.5 font-medium focus:ring-0" {onclick}>
      {#if success}
        <CheckOutline class="h-3 w-3" /> Copied
      {:else}
        <ClipboardCleanSolid class="h-3 w-3" /> Copy code
      {/if}
    </Clipboard>
</div>