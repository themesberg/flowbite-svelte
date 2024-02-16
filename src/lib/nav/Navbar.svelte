<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { clickOutside } from '../uiHelpers.svelte';
	import { slide, type SlideParams } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import type { navbarType } from '$lib/types';
	interface Props {
		children: any;
		toggleNav: () => void;
		closeNav: () => void;
		navStatus: boolean;
		fluid?: boolean;
		brand?: any;
		breakPoint?: navbarType['breakPoint'];
		navclass?: string | undefined;
		divclass?: string | undefined;
		btnclass?: string | undefined;
		div2class?: string | undefined;
		nonActiveClass?: string | undefined;
		activeClass?: string | undefined;
		aclass?: string | undefined;
	}

	let {
		children,
		toggleNav,
		closeNav,
		navStatus,
		fluid,
		brand,
		breakPoint = 'md',
		navclass,
		divclass,
		btnclass,
		div2class,
		nonActiveClass = 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
		activeClass = 'block py-2 px-3 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500',
		aclass,
		...attributes
	} = $props<Props>();

	// setContext('breakPoint', breakPoint);
	setContext<navbarType>('navbarContext', {
		breakPoint: breakPoint,
		activeClass: twMerge(activeClass, aclass),
		nonActiveClass: twMerge(nonActiveClass, aclass)
	});
	// $inspect('Navbar navStatus', navStatus);
	let navDisplay = $derived(navStatus ? 'block' : 'hidden');

	let navCls = twMerge('border-gray-200 bg-transparent dark:bg-gray-900', navclass);
	let divCls = twMerge(
		'mx-auto flex flex-wrap items-center justify-between p-4',
		breakPoint === 'xxl' ? 'w-full' : 'max-w-screen-xl',
		fluid ? 'w-full' : 'container',
		divclass
	);
	const btnBreak = {
		md: 'md:hidden',
		lg: 'lg:hidden',
		xl: 'xl:hidden',
		xxl: '2xl:hidden'
	};
	let btnCls = twMerge(
		'inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
		btnBreak[breakPoint],
		btnclass
	);
	const blockBreak = {
		md: 'md:block md:w-auto',
		lg: 'lg:block lg:w-auto',
		xl: 'xl:block xl:w-auto',
		xxl: '2xl:block 2xl:w-auto'
	};
	let divChildrenCls = twMerge('w-full', blockBreak[breakPoint], div2class);
	// $inspect('Navbar: ', breakPoint);
	let slideParams: SlideParams = { delay: 250, duration: 500, easing: quintOut };
</script>

<nav class={navCls} use:clickOutside={closeNav} {...attributes}>
	<div class={divCls}>
		{#if brand}
			{@render brand()}
		{/if}
		<button onclick={toggleNav} type="button" class={btnCls} aria-controls="navbar-default">
			<span class="sr-only">Open main menu</span>
			<svg
				class="h-5 w-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div
			class="{navDisplay} {divChildrenCls}"
			transition:slide={slideParams}
			role="button"
			tabindex="0"
		>
			{@render children()}
		</div>
	</div>
</nav>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop children,
@prop toggleNav,
@prop closeNav,
@prop navStatus,
@prop fluid,
@prop brand,
@prop breakPoint = 'md',
@prop navclass,
@prop divclass,
@prop btnclass,
@prop div2class,
@prop nonActiveClass = 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
@prop activeClass = 'block py-2 px-3 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500',
@prop aclass,
@prop ...attributes
-->
