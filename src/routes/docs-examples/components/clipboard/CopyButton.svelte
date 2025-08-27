<script>
  import { Clipboard, Input, Tooltip, ButtonGroup } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
</script>

<div class="w-64">
  <Input bind:value class="text-sm">
    {#snippet right()}
      <Clipboard size="xs" color="alternative" bind:value class="-mr-1 w-20 focus:ring-0">
        {#snippet children(success)}
          {#if success}
            <CheckOutline class="h-3 w-3" /> Copied
          {:else}
            <ClipboardCleanSolid class="h-3 w-3" /> Copy
          {/if}
        {/snippet}
      </Clipboard>
    {/snippet}
  </Input>
</div>
