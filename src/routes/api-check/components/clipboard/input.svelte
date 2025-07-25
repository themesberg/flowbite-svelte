<script>
  import { Clipboard, Input, Tooltip } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
</script>

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