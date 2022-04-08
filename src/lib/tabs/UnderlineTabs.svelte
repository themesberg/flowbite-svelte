<script lang="ts">
	import type { TabType } from '../types';
	export let divClass: string = 'text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700';
	export let tabs: TabType[];
</script>

<div class={divClass}>
	<ul class="flex flex-wrap -mb-px">
		{#each tabs as { name, active, href, rel }}
			<li class="mr-2">
				<a {href} {rel} class={active ? 'inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500' : '  inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 '}>{name}</a>
			</li>
		{/each}
	</ul>
</div>
