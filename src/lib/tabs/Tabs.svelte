<script lang="ts">
	import type { InteractiveTabType } from '../types';
	export let activeTabValue: number = 1;
	export let tabStyle: 'default' | 'full' | 'icon' | 'pill' | 'underline' | 'custom' = 'default';
	export let tabId: string = 'myTab';
	export let tabLabel: string = 'Full-width tabs';
	export let tabs: InteractiveTabType[];
	export let customDivClass: string = '';
	export let customUlClass: string = '';

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
</script>

{#if tabStyle === 'full'}
	<div class="sm:hidden">
		<label for="tabs" class="sr-only">{tabLabel}</label>
		<select id="tabs" class={fullSelectClass}>
			<slot name="head" />
		</select>
	</div>
{/if}

<slot />
