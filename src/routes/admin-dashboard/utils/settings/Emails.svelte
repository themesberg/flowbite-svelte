<script lang="ts">
	import { Toggle } from 'flowbite-svelte';
	import CardList from './CardList.svelte';

	const items = [
		{
			title: 'Rating reminders',
			subtitle: 'Send an email reminding me to rate an item a week after purchase',
			active: true
		},
		{
			title: 'Item update notifications',
			subtitle: 'Send user and product notifications for you',
			active: false
		},
		{
			title: 'Item comment notifications',
			subtitle: 'Send me an email when someone comments on one of my items',
			active: true
		},
		{
			title: 'Buyer review notifications',
			subtitle: 'Send me an email when someone leaves a review with their rating',
			active: false
		}
	];
</script>

<CardList
	title="Email Notifications"
	subtitle="You can set up Themesberg to get email notifications "
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
