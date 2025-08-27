<script lang="ts">
  import { Card, Clipboard, Input, Label, Tooltip, Button } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let acc_id = $state("756593826");
  let api_key = $state("f4h6sd3t-jsy63ind-hsgdt7rs-jdhf76st");
  let role_arn = $state("123456789012:user/Flowbite");
  let value = $state("");
</script>

{#snippet children(success: boolean)}
  <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
  {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
{/snippet}

<Card size="md" class="p-4 sm:p-6 md:p-8">
  <form class="flex flex-col space-y-6" action="/">
    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Create a role with read only in-line policies</h2>
    <p class="mb-6 text-gray-500 dark:text-gray-400">
      To give Flowbite read access, please create an IAM Role following <a href="#top" class="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500">trust relationship</a>
      and
      <a href="#top" class="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500">inline policy</a>
      .
    </p>

    <Label class="space-y-2 font-medium">
      <div>Flowbite account ID:</div>
      <Input bind:value={acc_id} readonly disabled>
        {#snippet right()}
          <Clipboard bind:value={acc_id} embedded {children} />
        {/snippet}
      </Input>
    </Label>
    <Label class="space-y-2 font-medium">
      <div>API key:</div>
      <Input bind:value={api_key} readonly disabled>
        {#snippet right()}
          <Clipboard bind:value={api_key} embedded {children} />
        {/snippet}
      </Input>
    </Label>
    <Label class="space-y-2 font-medium">
      <div>Role ARN:</div>
      <Input bind:value={role_arn} readonly disabled>
        {#snippet right()}
          <Clipboard bind:value={role_arn} embedded {children} />
        {/snippet}
      </Input>
    </Label>

    <div class="flex gap-4">
      <Button color="alternative">Cancel</Button>
      <Button type="submit">Next step</Button>
    </div>
  </form>
</Card>
