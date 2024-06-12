<script lang="ts">
	import { Avatar, Card, Heading, Popover, TabItem, Tabs } from 'flowbite-svelte';
	import Change from '../../utils/dashboard/Change.svelte';
	import Customers from '../../data/users.json';
	import { avatarPath, imagesPath } from '../../utils/variables';
	import LastRange from '../widgets/LastRange.svelte';
	import More from '../widgets/More.svelte';
	import { QuestionCircleSolid } from 'flowbite-svelte-icons';

	const products = [
		{
			src: 'iphone.png',
			image: 'iphone',
			label: 'iPhone 14 Pro',
			change: 2.5,
			price: '$445,467'
		},
		{
			src: 'imac.png',
			image: 'imac',
			label: 'Apple iMac 27',
			change: 12.5,
			price: '$256,982'
		},
		{
			src: 'watch.png',
			image: 'watch',
			label: 'Apple Watch SE',
			change: -1.35,
			price: '$201,869'
		},
		{
			src: 'ipad.png',
			image: 'ipad',
			label: 'Apple iPad Air',
			change: 12.5,
			price: '$103,967'
		},
		{
			src: 'imac.png',
			image: 'imac',
			label: 'Apple iMac 24',
			change: -2,
			price: '$98,543 '
		}
	];

	const customers = Customers.slice(0, 5);
</script>

<Card size="xl">
	<div class="mb-4 flex items-center gap-2">
		<Heading tag="h3" class="w-fit text-lg font-semibold dark:text-white">
			Statistics this month
		</Heading>
		<button>
			<span class="sr-only">Show information</span>
			<QuestionCircleSolid size="sm" class="text-gray-400 hover:text-gray-500" />
		</button>
		<Popover placement="bottom-start">
			<div class="w-72 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
				<h3 class="font-semibold text-gray-900 dark:text-white">Statistics</h3>
				<p>
					Statistics is a branch of applied mathematics that involves the collection, description,
					analysis, and inference of conclusions from quantitative data.
				</p>
				<More title="Read more" href="#top" flat />
			</div>
		</Popover>
	</div>
	<Tabs
		style="full"
		defaultClass="flex divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700"
		contentClass="p-3 mt-4"
	>
		<TabItem class="w-full" open>
			<span slot="title">Top products</span>
			<ul class="-m-3 divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
				{#each products as { src, image, label, price, change }}
					<li class="py-3 sm:py-4">
						<div class="flex items-center justify-between">
							<div class="flex min-w-0 items-center">
								<img
									class="h-10 w-10 flex-shrink-0"
									src={imagesPath(src, 'products')}
									alt={image}
								/>
								<div class="ml-3">
									<p class="truncate font-medium text-gray-900 dark:text-white">
										{label}
									</p>
									<Change value={change} size="sm" equalHeight class="ml-px" />
								</div>
							</div>
							<div
								class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
							>
								{price}
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</TabItem>
		<TabItem class="w-full">
			<span slot="title">Top customers</span>
			<ul class="-m-3 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
				{#each customers as { email, name, avatar }}
					<li class="py-3 sm:py-3.5">
						<div class="flex items-center justify-between">
							<div class="flex min-w-0 items-center">
								<Avatar src={imagesPath(avatar, 'users')} />
								<div class="ml-3">
									<p class="truncate font-medium text-gray-900 dark:text-white">
										{name}
									</p>
									<span class="text-gray-500">{email}</span>
								</div>
							</div>
							<div
								class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
							>
								${Math.floor(Math.random() * 10000)}
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</TabItem>
	</Tabs>

	<div
		class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6"
	>
		<LastRange />
		<More title="Full Report" href="#top" />
	</div>
</Card>
