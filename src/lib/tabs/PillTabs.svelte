<script lang="ts">
	import type { PillTabType } from '../types';
	export let tabs: PillTabType[];
</script>

<ul class="flex flex-wrap">
	{#each tabs as { name, selected, href }}
		<li class="mr-2">
			<a
				class="{selected
					? 'active inline-block py-3 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg'
					: 'inline-block py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'} "
				{href}
				rel="external"
				on:blur
				on:click
				on:focus
				on:keydown
				on:keypress
				on:keyup
				on:mouseenter
				on:mouseleave
				on:mouseover>{name}</a
			>
		</li>
	{/each}
</ul>
