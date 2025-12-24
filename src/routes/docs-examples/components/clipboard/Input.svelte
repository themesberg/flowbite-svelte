<script lang="ts">
  import { Clipboard, Input, Tooltip } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanOutline } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
</script>

<div class="max-w-[16rem]">
  <Input bind:value>
    {#snippet right()}
      <Clipboard bind:value embedded color="alternative" class="rounded-sm">
        {#snippet children(success)}
          <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
          {#if success}<CheckOutline class="h-4 w-4" />{:else}<ClipboardCleanOutline class="h-4 w-4" />{/if}
        {/snippet}
      </Clipboard>
    {/snippet}
  </Input>
</div>
