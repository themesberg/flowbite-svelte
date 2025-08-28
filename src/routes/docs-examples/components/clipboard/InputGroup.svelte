<script lang="ts">
  import { Clipboard, Input, InputAddon, Tooltip, ButtonGroup } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("https://flowbite.com");
</script>

<ButtonGroup>
  <InputAddon>URL</InputAddon>
  <Input bind:value readonly disabled class="w-64" />
  <Clipboard color="primary" bind:value>
    {#snippet children(success)}
      <Tooltip class="whitespace-nowrap">{success ? "Copied" : "Copy to clipboard"}</Tooltip>
      {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
    {/snippet}
  </Clipboard>
</ButtonGroup>
