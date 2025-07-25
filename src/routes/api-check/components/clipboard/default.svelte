<script>
  import { Clipboard, Input } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
  let success = $state(false);
</script>

<h2 class="my-4 text-2xl">Default copy to clipboard</h2>
<div class="my-4 flex flex-wrap justify-center gap-2 rounded border border-gray-200 p-4 dark:border-gray-600">
<Input bind:value class="w-64" />
<Clipboard bind:value bind:success class="w-24">
  {#if success}<CheckOutline />{:else}Copy{/if}
</Clipboard>
</div>