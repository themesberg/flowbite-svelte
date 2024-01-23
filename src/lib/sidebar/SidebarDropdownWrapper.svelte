<script lang="ts">
	import type { TransitionTypes, TransitionParamTypes } from '../types';
	interface Props {
		children: any;
		arrowup?: any;
		arrowdown?: any;
		icon?: any;
		btnclass?: string | undefined;
		label: string | undefined;
		spanclass?: string | undefined;
		ulclass?: string | undefined;
		transitionType?: TransitionTypes;
		transitionParams?: TransitionParamTypes;
	}
	import { twMerge } from 'tailwind-merge';
	import { fade, blur, fly, slide } from 'svelte/transition';
	import { uiHelpers } from '$lib';

	let {
		children,
		arrowup,
		arrowdown,
		icon,
		btnclass,
		label,
		spanclass,
		ulclass,
		transitionType = 'slide',
		transitionParams = {},
		...attributes
	} = $props<Props>();

	let btnCls = twMerge(
		'flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
		btnclass
	);

	let spanCls: string = twMerge('flex-1 ms-3 text-left whitespace-nowrap', spanclass);
	let ulCls: string = twMerge('py-2 space-y-2', ulclass);

	// make a custom transition function that returns the desired transition
	const multiple = (node: HTMLElement, params: any) => {
		switch (transitionType) {
			case 'blur':
				return blur(node, params);
			case 'fly':
				return fly(node, params);
			case 'fade':
				return fade(node, params);
			default:
				return slide(node, params);
		}
	};

	// for sidebar dropdown
	let sidebar = uiHelpers();

	let isOpen = $state(false);
	let handleDropdown = sidebar.toggle;
	// let closeSidebar = sidebar.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		isOpen = sidebar.isOpen;
	});
</script>

<li>
	<button
		{...attributes}
		on:click={() => handleDropdown()}
		type="button"
		class={btnCls}
		aria-controls="sidebar-dropdown"
	>
		{#if icon}
			{@render icon()}
		{/if}
		<span class={spanCls}>{label}</span>
		{#if isOpen}
			{#if arrowup}
				{@render arrowup()}
			{:else}
				<svg
					class="h-3 w-3 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			{/if}
		{:else if arrowdown}
			{@render arrowdown()}
		{:else}
			<svg
				class="h-3 w-3 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 10 6"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 4 4 4-4"
				/>
			</svg>
		{/if}
	</button>
	{#if isOpen}
		<ul class={ulCls} transition:multiple={transitionParams}>
			{@render children()}
		</ul>
	{/if}
</li>
