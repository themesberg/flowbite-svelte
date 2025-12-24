<script lang="ts">
  import { Clipboard, Input, Label } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
  let success = $state(false);
</script>

<div class="grid w-full max-w-[23rem] grid-cols-8 gap-2">
  <Label for="npm-install" class="sr-only">NPM Install Command</Label>
  <Input bind:value id="npm-install" class="text-body col-span-6" />
  <Clipboard bind:value bind:success class="w-24">
    {#if success}<CheckOutline />{:else}Copy{/if}
  </Clipboard>
</div>
