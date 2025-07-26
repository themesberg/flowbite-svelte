<script lang="ts">
  import { Clipboard, Textarea } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("");
  let success = $state(false);
</script>

<Textarea id="textarea-id" placeholder="Your message" rows={4} name="message" bind:value class="w-full">
  {#snippet addon()}
    {#if value.length > 0}
      <Clipboard color={success ? "alternative" : "light"} bind:value bind:success size="sm" class="absolute end-2 top-2 h-8 w-32 px-2.5 font-medium focus:ring-0">
        {#if success}
          <CheckOutline class="h-3 w-3" /> Copied
        {:else}
          <ClipboardCleanSolid class="h-3 w-3" /> Copy text
        {/if}
      </Clipboard>
    {/if}
  {/snippet}
</Textarea>