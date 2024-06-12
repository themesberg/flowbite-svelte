<script>
	import { A, Button } from 'flowbite-svelte';
	import { DribbbleSolid, FacebookSolid, GithubSolid, TwitterSolid } from 'flowbite-svelte-icons';
	import Card from '../widgets/Card.svelte';

	const items = [
		{ icon: FacebookSolid, name: 'Facebook account', link: 'www.facebook.com/themesberg' },
		{ icon: TwitterSolid, name: 'Twitter account', link: 'www.twitter.com/themesberg' },
		{ icon: GithubSolid, name: 'Github account', link: '' },
		{ icon: DribbbleSolid, name: 'Dribble account', link: '' }
	];
</script>

<Card title="Social accounts">
	<ul class="divide-y divide-gray-200 dark:divide-gray-700">
		{#each items as { icon, name, link }}
			<li class="py-4">
				<div class="flex items-center space-x-4">
					<div class="flex-shrink-0">
						<svelte:component this={icon} size="lg" class="text-gray-900 dark:text-white" />
					</div>
					<div class="min-w-0 flex-1">
						<p class="truncate text-base font-semibold text-gray-900 dark:text-white">
							{name}
						</p>
						<p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
							{#if link}
								<A href="">{link}</A>
							{:else}
								Not connected
							{/if}
						</p>
					</div>
					<div class="inline-flex items-center">
						{#if link}
							<Button class="px-3 py-2" color="alternative">Disconnect</Button>
						{:else}
							<Button class="px-3 py-2">Connect</Button>
						{/if}
					</div>
				</div>
			</li>
		{/each}
	</ul>
	<Button class="mt-2 w-fit">Save all</Button>
</Card>
