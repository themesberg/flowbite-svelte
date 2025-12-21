<script lang="ts">
  import { Clipboard, Textarea } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanOutline } from "flowbite-svelte-icons";

  let value = $state("");
  let success = $state(false);
</script>

<Textarea id="textarea-id" placeholder="Your message" rows={4} name="message" bind:value class="w-full">
  {#snippet addon()}
    {#if value.length > 0}
      <Clipboard color={success ? "alternative" : "light"} bind:value bind:success size="sm" class="absolute end-2 top-2 h-8 w-32 px-2.5 font-medium focus:ring-0">
        {#if success}
          <CheckOutline class="h-4 w-4" /> <span class="text-xs font-semibold text-fg-brand"> Copied</span>
        {:else}
          <ClipboardCleanOutline class="h-4 w-4" /><span class="text-xs font-semibold"> Copy</span>
        {/if}
      </Clipboard>
    {/if}
  {/snippet}
</Textarea>
