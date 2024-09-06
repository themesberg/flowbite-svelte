<script lang="ts">
  import { Avatar } from '$lib';
</script>

<div class="flex flex-col justify-center gap-4 px-4">
<div class="mb-5 flex">
  <Avatar src="/images/profile-picture-1.webp" stacked />
  <Avatar src="/images/profile-picture-2.webp" stacked />
  <Avatar src="/images/profile-picture-3.webp" stacked />
  <Avatar stacked />
</div>
<div class="flex">
  <Avatar src="/images/profile-picture-1.webp" stacked />
  <Avatar src="/images/profile-picture-2.webp" stacked />
  <Avatar src="/images/profile-picture-3.webp" stacked />
  <Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600">+99</Avatar>
</div>
</div>