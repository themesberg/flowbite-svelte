<script lang="ts">
  import { Clipboard, Input, Tooltip, Modal, Button, Label } from "$lib";
  import { CheckOutline, ClipboardCleanSolid, ShareNodesOutline } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite-svelte");
  let copyModal = $state(false);
</script>

<Button color="alternative" onclick={() => (copyModal = true)}><ShareNodesOutline class="me-2" /> Share course</Button>

<Modal title="Share course" bind:open={copyModal} autoclose class="divide-y-0" classes={{ header: "text-lg text-gray-500 dark:text-gray-400", footer: "px-5 pb-5" }}>
  <Label for="course-url" class="mb-2 block text-sm font-medium">Share the course link below with your friends:</Label>

  <Input bind:value id="course-url">
    {#snippet right()}
      <Clipboard bind:value embedded>
        {#snippet children(success)}
          <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
          {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
        {/snippet}
      </Clipboard>
    {/snippet}
  </Input>
  {#snippet footer()}
    <Button onclick={() => (copyModal = false)}>Close</Button>
  {/snippet}
</Modal>
