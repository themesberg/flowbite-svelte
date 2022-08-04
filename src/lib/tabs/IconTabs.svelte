<script lang="ts">
	import type { IconTabType } from '../types';
	export let tabs: IconTabType[];
	export let iconClass: string =
		'mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300';
</script>

<div class="border-b border-gray-200 dark:border-gray-700">
	<ul
		class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
	>
		{#each tabs as { name, active, href, rel, icon, iconSize }}
			<li class="mr-2">
				<a
					{href}
					{rel}
					class={active
						? 'inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group'
						: '  inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group '}
					on:click
					on:change
					on:keydown
					on:keyup
					on:focus
					on:blur
					on:mouseenter
					on:mouseleave
					on:mouseenter
				>
					<svelte:component this={icon} size={iconSize} class={iconClass} />
					{name}
				</a>
			</li>
		{/each}
	</ul>
</div>
