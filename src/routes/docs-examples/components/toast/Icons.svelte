<script>
  import { Toast } from "flowbite-svelte";
  import { ImageOutline } from "flowbite-svelte-icons";
</script>

<Toast>
  {#snippet icon()}
    <ImageOutline class="h-6 w-6" />
  {/snippet}
  There is a box icon.
</Toast>

<Toast>No icon at all.</Toast>
