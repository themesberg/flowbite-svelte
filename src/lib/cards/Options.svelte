<script lang="ts">
	import { Dropdown, DropdownItem } from '$lib/index';
	import { DotsHorizontal } from 'svelte-heros';
	import CloseButton from '$lib/utils/CloseButton.svelte';
	import type { LinkType } from '$lib/types';

	export let options: LinkType[] = [];
</script>

{#if options.length}
	<div class="flex justify-end">
		<Dropdown class="w-44">
			<CloseButton slot="trigger" class="text-gray-500 dark:text-gray-400">
				<DotsHorizontal class="w-6 h-6" />
			</CloseButton>
			<slot>
				{#each options as { href, name }}
					<DropdownItem><a {href}>{name}</a></DropdownItem>
				{/each}
			</slot>
		</Dropdown>
	</div>
{/if}
