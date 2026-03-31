<script lang="ts">
  import { Toast, Avatar } from "flowbite-svelte";
</script>

<Toast align={false}>
  <span class="text-heading font-semibold">New notification</span>
  <div class="mt-3 flex items-center">
    <Avatar src="/images/people/profile-picture-5.jpg" />
    <div class="ms-3">
      <h4 class="text-heading text-sm font-semibold">Bonnie Green</h4>
      <div class="text-sm font-normal">commented on your photo</div>
      <span class="text-fg-brand text-xs font-medium">a few seconds ago</span>
    </div>
  </div>
</Toast>
