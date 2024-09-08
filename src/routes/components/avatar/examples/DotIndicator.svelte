<script lang="ts">
  import { Avatar } from '$lib';
</script>

<div class="flex justify-center gap-4">
  <Avatar src="/images/profile-picture-3.webp" dot={{ color: 'red' }} />
  <Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} cornerStyle="rounded" />
  <Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} />
  <Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} cornerStyle="rounded" />
  <Avatar dot={{}} />
</div>
