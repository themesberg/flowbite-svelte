<script lang="ts">
	import classNames from 'classnames';
	import { getContext } from 'svelte';
	export let title: string = '';
	export let date: string = '';
	export let customDiv: string = '';
	export let customTimeClass: string = '';
	let order: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group' | 'custom' = 'default';
	order = getContext('order');
	const liClasses = {
		default: 'mb-10 ml-4',
		vertical: 'mb-10 ml-6',
		horizontal: 'relative mb-6 sm:mb-0',
		activity: 'mb-10 ml-6',
		group: ''
	};

	const divClasses = {
		default:
			'absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700',
		vertical:
			'flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900',
		horizontal: 'flex items-center',
		activity:
			'flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900',
		group:
			'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700',
		custom: customDiv
	};

	const timeClasses = {
		default: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
		vertical: 'block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
		horizontal: 'block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
		activity: 'mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0',
		group: 'text-lg font-semibold text-gray-900 dark:text-white',
		custom: customTimeClass
	};

	const h3Class = classNames(
		order === 'vertical'
			? 'flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'
			: 'text-lg font-semibold text-gray-900 dark:text-white'
	);
</script>

<li class={liClasses[order]}>
	{#if order === 'default'}
		<div class={divClasses[order]} />
		{#if date}
			<time class={timeClasses[order]}>{date}</time>
		{/if}
		{#if title}
			<h3 class={h3Class}>
				{title}
			</h3>
		{/if}
		<slot />
	{:else if order === 'vertical'}
		<div class={divClasses[order]} />
		{#if $$slots.icon}
			<slot name="icon" />
		{:else}
			<svg
				aria-hidden="true"
				class="w-3 h-3 text-blue-600 dark:text-blue-400"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
					clip-rule="evenodd" /></svg>
		{/if}
		{#if title}
			<h3 class={h3Class}>
				{title}
			</h3>
		{/if}
		{#if date}
			<time class={timeClasses[order]}>{date}</time>
		{/if}
		<slot />
	{:else if order === 'horizontal'}
		<div class={divClasses[order]} />
		{#if $$slots.icon}
			<slot name="icon" />
		{:else}
			<svg
				aria-hidden="true"
				class="w-3 h-3 text-blue-600 dark:text-blue-400"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
					clip-rule="evenodd" /></svg>
		{/if}
		{#if title}
			<h3 class={h3Class}>
				{title}
			</h3>
		{/if}
		{#if date}
			<time class={timeClasses[order]}>{date}</time>
		{/if}
		<slot />
	{:else}
		<div class={divClasses[order]} />
		{#if $$slots.icon}
			<slot name="icon" />
		{:else}
			<svg
				aria-hidden="true"
				class="w-3 h-3 text-blue-600 dark:text-blue-400"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
					clip-rule="evenodd" /></svg>
		{/if}
		{#if title}
			<h3 class={h3Class}>
				{title}
			</h3>
		{/if}
		{#if date}
			<time class={timeClasses[order]}>{date}</time>
		{/if}
		<slot />
	{/if}
</li>
