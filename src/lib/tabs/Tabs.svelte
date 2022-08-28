<script lang="ts">
	import classNames from 'classnames';
	import type { InteractiveTabType } from '../types';

	export let tabStyle: 'default' | 'full' | 'icon' | 'pill' | 'underline' | 'custom' = 'default';
	export let tabId: string = 'myTab';
	export let tabLabel: string = 'Full-width tabs';
	export let activeTabValue: number = 1;
	export let tabs: InteractiveTabType[];

	export let customDivClass: string = '';
	export let customUlClass: string = '';
	export let customLiClass: string = '';
	export let customActiveClass: string = '';
	export let customInActiveClass: string = '';
	export let iconClass: string =
		'mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300';
	export let contentDivClass: string = 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800';
	export let fullSelectClass: string =
		'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

	const divClasses = {
		default: 'mb-4 border-b border-gray-200 dark:border-gray-700',
		full: 'mb-4',
		icon: 'mb-4 border-b border-gray-200 dark:border-gray-700',
		pill: 'mb-4 ',
		underline:
			'mb-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700',
		custom: customDivClass
	};

	const ulClasses = {
		default: 'flex flex-wrap -mb-px',
		full: 'hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400 mb-1',
		icon: 'flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400',
		pill: 'flex flex-wrap',
		underline: 'flex flex-wrap -mb-px',
		custom: customUlClass
	};

	const liClasses = {
		default: 'mr-2',
		full: 'w-full',
		icon: 'mr-2',
		pill: 'mr-2',
		underline: 'mr-2',
		custom: customLiClass
	};

	const activeClasses = {
		default:
			'inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500',
		full: 'inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white',
		icon: 'inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group',
		pill: 'active inline-block py-3 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg',
		underline:
			'inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
		custom: customActiveClass
	};

	const inactiveClasses = {
		default:
			'inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
		full: 'inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
		icon: 'inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ',
		pill: 'inline-block py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
		underline:
			'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
		custom: customInActiveClass
	};

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

{#if tabStyle === 'full'}
	<div class="sm:hidden">
		<label for="tabs" class="sr-only">{tabLabel}</label>
		<select id="tabs" class={fullSelectClass}>
			{#each tabs as { name }}
				<option>{name}</option>
			{/each}
		</select>
	</div>
{/if}
<div class={divClasses[tabStyle]}>
	<ul class={ulClasses[tabStyle]} id={tabId} role="tablist">
		{#each tabs as { name, id, disabled, icon, iconSize }}
			<li class={liClasses[tabStyle]} role="presentation">
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
					class={classNames(
						activeTabValue === id ? activeClasses[tabStyle] : inactiveClasses[tabStyle]
					)}
					id="{name}-tab"
					type="button"
					role="tab"
					aria-controls={name}
					{disabled}>
					{#if icon}
						<svelte:component this={icon} size={iconSize} class={iconClass} />
					{/if}
					{name}</button>
			</li>
		{/each}
	</ul>
</div>
<div id="{tabId}Content">
	{#each tabs as { name, content, id }}
		{#if activeTabValue === id}
			<div class={contentDivClass} id={name} role="tabpanel" aria-labelledby="{name}-tab">
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
