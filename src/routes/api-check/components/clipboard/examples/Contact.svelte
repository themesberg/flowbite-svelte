<script lang="ts">
  import { Card, Clipboard, Tooltip } from "$lib";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("");

  function onclick(ev: MouseEvent): void {
    const target = ev.target as HTMLElement;
    const codeBlock = target.ownerDocument.querySelector("#contact-details");
    if (codeBlock) {
      value = codeBlock.textContent || "";
    }
  }
</script>

<Card class="relative p-5">
  <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Contact details</h2>
  <address class="relative grid grid-cols-2 rounded-lg border border-gray-200 bg-gray-50 p-4 not-italic dark:border-gray-600 dark:bg-gray-700">
    <div class="hidden space-y-2 leading-loose text-gray-500 sm:block dark:text-gray-400">
      Name <br />
      Email
      <br />
      Phone Number
    </div>
    <div id="contact-details" class="space-y-2 leading-loose font-medium text-gray-900 dark:text-white">
      Bonnie Green <br />
      name@flowbite.com
      <br />
      + 12 345 67890
    </div>
  </address>
  <Clipboard {onclick} bind:value embedded class="absolute end-2 top-2 h-8 px-2.5 font-medium focus:ring-0">
    {#snippet children(success)}
      <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
      {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
    {/snippet}
  </Clipboard>
</Card>
