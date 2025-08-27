<script>
  import { Toast } from "flowbite-svelte";
  import { fly } from "svelte/transition";
  import { DownloadOutline } from "flowbite-svelte-icons";
</script>

<Toast transition={fly} params={{ x: 200 }} color="green" class="mb-4">
  {#snippet icon()}
    <DownloadOutline class="h-6 w-6" />
  {/snippet}
  Transition type: fly right
</Toast>

<Toast transition={fly} params={{ y: 200 }} color="green">
  {#snippet icon()}
    <DownloadOutline class="h-6 w-6" />
  {/snippet}
  Transition type: fly down
</Toast>
