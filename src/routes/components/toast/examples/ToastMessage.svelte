<script lang="ts">
  import { Avatar, Button, Toast } from '$lib';
</script>

<div class="flex h-[180px] flex-col items-center">
  <Toast align={false} iconClass="w-10 h-10 rounded-full">
    {#snippet icon()}
      <Avatar src="/images/profile-picture-1.webp" />
    {/snippet}
    <div class="ms-3 text-sm font-normal">
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
      <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
      <Button size="xs">Reply</Button>
    </div>
  </Toast>
</div>
