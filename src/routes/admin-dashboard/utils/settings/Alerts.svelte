<script lang="ts">
	import { Toggle } from 'flowbite-svelte';
	import CardList from './CardList.svelte';

	const items = [
		{
			title: 'Company News',
			subtitle: 'Get Themesberg news, announcements, and product updates',
			active: false
		},
		{
			title: 'Account Activity',
			subtitle: "Get important notifications about you or activity you've missed",
			active: true
		},
		{
			title: 'Meetups Near You',
			subtitle: 'Get an email when a Dribbble Meetup is posted close to my location',
			active: true
		},
		{
			title: 'New Messages',
			subtitle: 'Get Themsberg news, announcements, and product updates',
			active: false
		}
	];
</script>

<CardList
	title="Alerts & Notifications"
	subtitle="You can set up Themesberg to get notifications"
	{items}
	let:item
>
	<div class="flex items-center justify-between">
		<div class="flex flex-grow flex-col">
			<div class="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</div>
			<div class="text-base font-normal text-gray-500 dark:text-gray-400">
				{item.subtitle}
			</div>
		</div>
		<Toggle checked={item.active} classDiv="peer-focus:ring-0 me-0" />
	</div>
</CardList>
