<script lang="ts">
	import type { TabType } from '../types';
	export let tabs: TabType[];
	export let tabLabel: string;
</script>

<div class="sm:hidden">
	<label for="tabs" class="sr-only">{tabLabel}</label>
	<select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
		{#each tabs as { name }}
			<option>{name}</option>
		{/each}
	</select>
</div>
<ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
	{#each tabs as { name, href, rel, active }, i}
		<li class="w-full" data-id={i}>
			<a {href} {rel} class:rounded-l-lg={i === 0} class:rounded-r-lg={i === tabs.length - 1} class={active ? 'inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white' : 'inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'} aria-current="page">{name}</a>
		</li>
	{/each}
</ul>
