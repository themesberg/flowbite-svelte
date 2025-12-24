<script lang="ts">
  import { Toast, Avatar } from "flowbite-svelte";
</script>

<Toast align={false}>
  <span class="font-semibold text-gray-900 dark:text-white">New notification</span>
  <div class="mt-3 flex items-center">
    <Avatar src="/images/people/profile-picture-5.jpg" />
    <div class="ms-3">
      <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
      <div class="text-sm font-normal">commented on your photo</div>
      <span class="text-primary-600 dark:text-primary-500 text-xs font-medium">a few seconds ago</span>
    </div>
  </div>
</Toast>
