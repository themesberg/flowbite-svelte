<script lang="ts">
	import ProfileLock from '../utils/authentication/ProfileLock.svelte';
	import { Input, Label } from 'flowbite-svelte';
	import Users from '../data/users.json';
	import { avatarPath, imagesPath } from '../utils/variables';
  import MetaTag from '../utils/MetaTag.svelte';
	const onSubmit = (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);
		console.log(formData);
	};

	let user = {
		img: imagesPath(Users[0].avatar, 'users'),
		imgAlt: Users[0].name,
		name: Users[0].name
	};

	const path: string = '/authentication/profile-lock';
  const description: string = 'Profile lock example - Flowbite Svelte Admin Dashboard';
	const metaTitle: string = 'Flowbite Svelte Admin Dashboard - Profile lock';
  const subtitle: string = 'Profile lock';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<ProfileLock on:submit={onSubmit} {user}>
	<div>
		<Label for="password" class="mb-2 dark:text-white">Your password</Label>
		<Input
			type="password"
			name="password"
			id="password"
			placeholder="••••••••"
			required
			class="border outline-none dark:border-gray-600 dark:bg-gray-700"
		/>
	</div>
</ProfileLock>
