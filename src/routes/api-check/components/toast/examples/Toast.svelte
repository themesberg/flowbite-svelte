<script lang="ts">
  import { Toast, Avatar, Button } from "flowbite-svelte";
</script>

<Toast align={false} color={undefined}>
  {#snippet icon()}
    <Avatar src="/images/profile-picture-1.webp" class="h-8" />
  {/snippet}
  <div class="ms-3 text-sm font-normal">
    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
    <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
    <Button size="xs">Reply</Button>
  </div>
</Toast>
