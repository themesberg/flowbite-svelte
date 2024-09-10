<script lang="ts">
  import { Toast, Button } from '$lib';
  import { CameraPhotoOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex h-48 flex-col items-center">
  <Toast align={false}>
    {#snippet icon()}
      <CameraPhotoOutline class="h-5 w-5" />
    {/snippet}
    <span class="font-semibold text-gray-900 dark:text-white">Update available</span>
    <div class="mt-3">
      <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
      <div class="grid grid-cols-2 gap-2">
        <Button size="xs" class="w-full">Update</Button>
      </div>
    </div>
  </Toast>
</div>