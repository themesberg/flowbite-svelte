<script lang="ts">
	interface Props {
		children: any;
		toggleNav: () => void;
		closeNav: () => void;
		navStatus: boolean;
		fluid?: boolean;
		brand?: any;
		breakPoint?: 'md' | 'lg' | 'xl' | 'xxl';
		navClass?: string | undefined;
		divClass?: string | undefined;
		btnClass?: string | undefined;
		divChildrenClass?: string | undefined;
	}
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { clickOutside } from '../uiHelpers.svelte';
	import { slide, type SlideParams } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let {
		children,
		toggleNav,
		closeNav,
		navStatus,
		fluid,
		brand,
		breakPoint = 'md',
		navClass,
		divClass,
		btnClass,
		divChildrenClass,
		...attributes
	} = $props<Props>();

	setContext('breakPoint', breakPoint);
	// $inspect('Navbar navStatus', navStatus);
	let navDisplay = $derived(navStatus ? 'block' : 'hidden');

	let navCls = twMerge('border-gray-200 bg-transparent dark:bg-gray-900', navClass);
	let divCls = twMerge(
		'mx-auto flex flex-wrap items-center justify-between p-4',
		breakPoint === 'xxl' ? 'w-full' : 'max-w-screen-xl',
		fluid ? 'w-full' : 'container',
		divClass
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
		btnClass
	);
	const blockBreak = {
		md: 'md:block md:w-auto',
		lg: 'lg:block lg:w-auto',
		xl: 'xl:block xl:w-auto',
		xxl: '2xl:block 2xl:w-auto'
	};
	let divChildrenCls = twMerge('w-full', blockBreak[breakPoint], divChildrenClass);
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
		<div class="{navDisplay} {divChildrenCls}" transition:slide={slideParams} role="button" tabindex="0" >
			{@render children()}
		</div>
	</div>
</nav>
