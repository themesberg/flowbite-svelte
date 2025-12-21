<script lang="ts">
  import { Clipboard, Label, Input, InputAddon, Tooltip, ButtonGroup, Helper } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanOutline } from "flowbite-svelte-icons";

  let value = $state("https://flowbite.com");
</script>

<div class="space-y-2">
<ButtonGroup class="w-96">
  <InputAddon>URL</InputAddon>
  <Label for="website-url" class="sr-only">URL Input with Clipboard</Label>
  <Input id="website-url" bind:value readonly disabled />
  <Clipboard color="brand" bind:value>
    {#snippet children(success)}
      <Tooltip class="whitespace-nowrap">{success ? "Copied" : "Copy to clipboard"}</Tooltip>
      {#if success}<CheckOutline class="h-4 w-4"/>{:else}<ClipboardCleanOutline class="h-4 w-4"/>{/if}
    {/snippet}
  </Clipboard>
</ButtonGroup>
<Helper class="mt-2 text-sm text-body">Security certificate is required for approval</Helper>
</div>