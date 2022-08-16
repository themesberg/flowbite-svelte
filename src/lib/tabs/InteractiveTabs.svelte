<script lang="ts">
	import classNames from 'classnames';
	import type { InteractiveTabType } from '../types';

	export let tabId: string = 'myTab';
	export let activeTabValue: number = 1;
	export let tabs: InteractiveTabType[];
	export let btnClass: string =
		'inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent';
	export let activeClass: string =
		'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500';
	export let inactiveClasses: string =
		'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300';

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
	<ul class="flex flex-wrap -mb-px" id={tabId} role="tablist">
		{#each tabs as { name, id, disabled }}
			<li class="mr-2" role="presentation">
				<button
					on:click={handleClick(id)}
					on:blur
					on:click
					on:focus
					on:keydown
					on:keypress
					on:keyup
					on:mouseenter
					on:mouseleave
					on:mouseover
					class={classNames(btnClass, activeTabValue === id ? activeClass : inactiveClasses)}
					id="{name}-tab"
					type="button"
					role="tab"
					aria-controls={name}
					{disabled}>{name}</button
				>
			</li>
		{/each}
	</ul>
</div>
<div id="{tabId}Content">
	{#each tabs as { name, content, id }}
		{#if activeTabValue === id}
			<div
				class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
				id={name}
				role="tabpanel"
				aria-labelledby="{name}-tab"
			>
				{#if typeof content === 'string'}
					<p class="text-sm text-gray-500 dark:text-gray-400">
						{@html content}
					</p>
				{:else}
					<svelte:component this={content} />
				{/if}
			</div>
		{/if}
	{/each}
</div>
