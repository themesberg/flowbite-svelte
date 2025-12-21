<script lang="ts">
  import { Clipboard, Input, Label, Helper, Button, Tooltip, ButtonGroup } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanOutline } from "flowbite-svelte-icons";

  let value = $state("https://bit.ly/3U2SXcF");
</script>

<div class="space-y-2">
  <Label for="url-shortener">Shorten URL:</Label>
  <ButtonGroup>
    <Button>Generate</Button>
    <Input id="url-shortener" bind:value readonly disabled class="w-64" />
    <Clipboard bind:value>
      {#snippet children(success)}
        <Tooltip class="whitespace-nowrap">{success ? "Copied" : "Copy link"}</Tooltip>
        {#if success}<CheckOutline class="h-4 w-4" />{:else}<ClipboardCleanOutline class="h-4 w-4" />{/if}
      {/snippet}
    </Clipboard>
  </ButtonGroup>
  <Helper>Make sure that your URL is valid</Helper>
</div>
