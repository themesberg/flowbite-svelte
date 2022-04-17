<script lang="ts">
	import { ImgDropdown, Avatar } from '$lib/index';
	let avatar4 = {
		src: '/images/profile-picture-1.webp',
		alt: 'My avatar 4',
		size: 12,
		border: true,
		round: true
	};
	let items = [
		{
			href: '/',
			name: 'Dashboard'
		},
		{
			href: '/',
			name: 'Settings'
		},
		{
			href: '/',
			name: 'Sign out'
		}
	];
	let dropdownClass =
		'hidden absolute left-10 top-14 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';
	let dropdownClass2 =
		'hidden absolute -left-40 top-14 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Dropdown</h1>

<ImgDropdown {items}>
	<Avatar avatar={avatar4} />
</ImgDropdown>

<div class="p-24">
	<ImgDropdown {items} {dropdownClass}>
		<Avatar avatar={avatar4} />
	</ImgDropdown>
</div>

<div class="p-24">
	<ImgDropdown {items} dropdownClass={dropdownClass2}>
		<Avatar avatar={avatar4} />
	</ImgDropdown>
</div>
