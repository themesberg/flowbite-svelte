<script lang="ts">
	import { Avatar, Dropdown, DropdownItem, ToolbarButton } from 'flowbite-svelte';
	import {
		ChevronDownOutline,
		DotsHorizontalOutline
	} from 'flowbite-svelte-icons';

	export let avatar: string = 'https://flowbite.com/docs/images/people/profile-picture-2.jpg';
	export let name: string = 'Michael Gough';
	export let timestamp: Date = new Date();
	export let replays: number = 0;
</script>

<article class="mb-5 space-y-3 {$$props.class ?? ''}">
	<footer class="flex items-center justify-between">
		<div class="flex items-center gap-2">
			<Avatar size="xs" src={avatar} alt={name} />
			<p class="text-sm font-semibold text-gray-900 dark:text-white">
				{name}
			</p>
			<p class="ms-1 text-sm text-gray-600 dark:text-gray-400">
				<time datetime={timestamp.toDateString()} title={timestamp.toDateString()}
					>{timestamp.toDateString()}</time
				>
			</p>
		</div>
		<ToolbarButton class="rounded dark:hover:text-white">
			<DotsHorizontalOutline size="lg" />
			<span class="sr-only">Comment settings</span>
		</ToolbarButton>
		<Dropdown class="w-32" placement="bottom-end">
			<DropdownItem>Edit</DropdownItem>
			<DropdownItem>Remove</DropdownItem>
			<DropdownItem>Report</DropdownItem>
		</Dropdown>
	</footer>
	<div class="space-y-2 text-gray-900 dark:text-white"><slot /></div>
	{#if replays}
		<a
			href="/"
			class="inline-flex items-center gap-1 text-xs font-medium text-primary-700 dark:text-primary-500 sm:text-sm"
		>
			{replays} replies
			<ChevronDownOutline size="lg" />
		</a>
	{/if}
</article>
