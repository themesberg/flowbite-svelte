<script>
	import { imagesPath } from '../../utils/variables';
	import { Avatar, Button, Card, Heading } from 'flowbite-svelte';
	import Users from '../../data/users.json';
</script>

<Card size="xl">
	<Heading tag="h3" class="text-xl font-semibold tracking-wide">Other accounts</Heading>
	<ul class="divide-y divide-gray-200 dark:divide-gray-700">
		{#each Users.slice(0, 4) as { avatar, name, country, status }}
			<li class="flex items-center justify-between space-x-4 py-4">
				<div class="flex items-start space-x-4">
					<Avatar src={imagesPath(avatar, 'users')} size="xs" class="mt-1" />
					<div class="min-w-0 flex-1">
						<p class="truncate text-base font-semibold text-gray-900 dark:text-white">
							{name}
						</p>
						<p class="truncate text-sm font-normal text-primary-700 dark:text-primary-500">
							{country}
						</p>
						<p class="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
							Last seen: {Math.ceil(Math.random() * 10)} min ago
						</p>
					</div>
				</div>

				{#if status === 'Active'}
					<Button class="px-3 py-2" color="alternative">Disconnect</Button>
				{:else}
					<Button class="px-3 py-2">Connect</Button>
				{/if}
			</li>
		{/each}
	</ul>
	<Button class="mt-2 w-fit">Save all</Button>
</Card>
