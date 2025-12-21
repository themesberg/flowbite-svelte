<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<Avatar src="/images/people/profile-picture-5.jpg" dot={{ color: "danger" }} />
<Avatar src="/images/people/profile-picture-5.jpg" dot={{ placement: "top-right", color: "warning" }} cornerStyle="rounded" />
<Avatar src="/images/people/profile-picture-5.jpg" dot={{ placement: "bottom-right", color: "success" }} />
<Avatar src="/images/people/profile-picture-5.jpg" dot={{ placement: "bottom-right" }} cornerStyle="rounded" />

<Avatar dot={{}} />
