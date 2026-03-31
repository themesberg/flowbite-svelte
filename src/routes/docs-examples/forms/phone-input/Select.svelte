<script lang="ts">
  import { Label, ButtonGroup, Select, Clipboard, Tooltip, Helper, A } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";
  let selected = $state("+1 234 456 7890");
  const phonenumbers = [
    { value: "+1 234 456 7890", name: "+1 234 456 7890" },
    { value: "+1 456 234 7890", name: "+1 456 234 7890" },
    { value: "+1 432 621 3163", name: "+1 432 621 3163" }
  ];
</script>

<form class="mx-auto max-w-sm">
  <div class="mb-2 flex items-center justify-between">
    <Label for="phone-numbers" class="text-sm font-medium text-gray-900 dark:text-white">Primary phone number:</Label>
    <A href="/">Manage numbers</A>
  </div>

  <ButtonGroup class="flex">
    <Select id="phone-numbers" classes={{ select: "border-r-0" }} items={phonenumbers} bind:value={selected} aria-describedby="helper-text-explanation" />
    <Clipboard
      color="alternative"
      bind:value={selected}
      class="rounded-e-base border-default-medium bg-neutral-secondary-medium text-body hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-neutral-tertiary z-10 inline-flex shrink-0 items-center border px-4 py-2.5 text-center text-sm font-medium focus:ring-4 focus:outline-none"
    >
      {#snippet children(success)}
        <Tooltip class="whitespace-nowrap">{success ? "Copied" : "Copy to clipboard"}</Tooltip>
        {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
      {/snippet}
    </Clipboard>
  </ButtonGroup>
  <Helper id="helper-text-explanation" class="mt-2 text-sm">Please set your primary phone number.</Helper>
</form>
