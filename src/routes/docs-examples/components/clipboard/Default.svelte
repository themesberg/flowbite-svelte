<script>
  import { Clipboard, Input } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
  let success = $state(false);
</script>

<Input bind:value class="w-64" />
<Clipboard bind:value bind:success class="w-24">
  {#if success}<CheckOutline />{:else}Copy{/if}
</Clipboard>
