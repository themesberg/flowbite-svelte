<script lang="ts">
	interface Props {
		children: any;
		closeNav: () => void;
		href?: string | undefined;
		aclass?: string | undefined;
		activeClass?: string | undefined;
	}
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/stores';
	let { closeNav, href, children, aclass, activeClass, ...attributes } = $props<Props>();
	let breakPoint: 'md' | 'lg' | 'xl' | '2xl';

	breakPoint = getContext('breakPoint');
	let currentUrl = $state();

	$effect(() => {
		currentUrl = $page.url.pathname;
	});
	const linkBreak = {
		md: 'md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 md:dark:hover:bg-transparent',
		lg: 'lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-primary-500 lg:dark:hover:bg-transparent',
		xl: 'xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 xl:dark:hover:text-primary-500 xl:dark:hover:bg-transparent',
		'2xl':
			'2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-primary-700 2xl:p-0 2xl:dark:hover:text-primary-500 2xl:dark:hover:bg-transparent'
	};

	const linkStyle =
		'block py-2 px-3 text-md hover:underline text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white';

	const activeBreak = {
		md: 'md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500',
		lg: 'lg:bg-transparent lg:text-primary-700 lg:p-0 lg:dark:text-primary-500',
		xl: 'xl:bg-transparent xl:text-primary-700 xl:p-0 xl:dark:text-primary-500',
		'2xl': '2xl:bg-transparent 2xl:text-primary-700 2xl:p-0 2xl:dark:text-primary-500'
	};

	const activeStyle =
		'block py-2 px-3 text-md hover:underline text-white bg-primary-700 rounded dark:text-white ';
	let linkCls = twMerge(linkStyle, linkBreak[breakPoint], aclass);
	let activeCls = twMerge(activeStyle, activeBreak[breakPoint], activeClass);

	// $inspect('NavLi', breakPoint);
</script>

<li>
	<a
		{href}
		onclick={closeNav}
		{...attributes}
		aria-current={currentUrl === href}
		class={currentUrl === href ? activeCls : linkCls}
	>
		{@render children()}
	</a>
</li>
