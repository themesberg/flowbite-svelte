<script lang="ts">
	import { Avatar } from '$lib';
</script>

<div class="flex flex-col justify-center gap-4 px-4">
	<div class="mb-5 flex">
		<Avatar src="/images/profile-picture-1.webp" stacked alt="Profile picture 1" />
		<Avatar src="/images/profile-picture-2.webp" stacked alt="Profile picture 2" />
		<Avatar src="/images/profile-picture-3.webp" stacked alt="Profile picture 3" />
		<Avatar stacked />
	</div>
	<div class="flex">
		<Avatar src="/images/profile-picture-1.webp" stacked alt="Profile picture 4" />
		<Avatar src="/images/profile-picture-2.webp" stacked alt="Profile picture 5" />
		<Avatar src="/images/profile-picture-3.webp" stacked alt="Profile picture 6" />
		<Avatar
			stacked
			href="/"
			class="bg-gray-700 text-sm text-white hover:bg-gray-600"
			alt="Profile picture 7">+99</Avatar
		>
	</div>
</div>
