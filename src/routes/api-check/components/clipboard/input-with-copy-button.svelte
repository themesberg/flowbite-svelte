<script>
  import { Clipboard, Input, Tooltip } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
</script>

<h2 class="my-4 text-2xl">Input with copy button</h2>
<div class="my-4 flex flex-wrap justify-center gap-2 rounded border border-gray-200 p-4 dark:border-gray-600">
  <div class="w-64">
    <Input bind:value>
      {#snippet right()}
        <Clipboard bind:value embedded>
          {#snippet children(success)}
            <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
            {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
          {/snippet}
        </Clipboard>
      {/snippet}
    </Input>
  </div>
</div>