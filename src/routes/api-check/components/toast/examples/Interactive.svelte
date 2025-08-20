<script>
  import { Toast, Button } from "flowbite-svelte";
  import { CameraPhotoOutline } from "flowbite-svelte-icons";
</script>

<Toast align={false}>
  {#snippet icon()}
    <CameraPhotoOutline class="h-6 w-6" />
  {/snippet}

  <span class="font-semibold text-gray-900 dark:text-white">Update available</span>
  <div class="mt-3">
    <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
    <div class="grid grid-cols-2 gap-2">
      <Button size="xs" class="w-full">Update</Button>
      <Button size="xs" class="w-full" color="dark">Not now</Button>
    </div>
  </div>
</Toast>