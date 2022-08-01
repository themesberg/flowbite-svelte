<script lang="ts">
	import '../app.css';

	import {
		DarkMode,
		Footer,
		FooterBrand,
		FooterCopyright,
		FooterIcon,
		FooterLink,
		FooterLinkGroup
	} from '$lib';
	import { Side, Nav, SidebarList } from 'svelte-sidebar-menu';
	import Github from './utils/icons/Github.svelte';
	import { forms, svelteflows, topMenus } from './moduleItems';

	let asideClass =
		'absolute w-auto bg-white pt-8 shadow-lg z-50 px-4 h-screen z-40 overflow-scroll dark:bg-gray-900';
	// Navbar
	let logo = '/images/flowbite-svelte-icon-logo.svg';
	let logoClass = 'w-8 ml-0 sm:ml-4 sm:mr-2';
	let alt = 'Flowbite Svelte';
	let hamburgerClass =
		'text-gray-300 hover:text-blue-500 cursor-pointer mr-4 border-none focus:outline-none lg:hidden';
	let activeChildLi = 'block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 dark:text-white';
	let childLi =
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0 md:p-0 text-lg dark:text-white';
	let headerClass =
		'w-full z-50 px-6 bg-white h-14 pt-2 text-gray-600 border-b-2 dark:bg-gray-800 dark:text-white dark:border-b-1';
	let siteName = 'Flowbite Svelte';
	let navClass = 'py-0 px-4 xl:px-8 text-lg bg-white dark:bg-gray-900 dark:text-white';
	let navDivClasslast = 'pb-24';
	let siteClass = ' w-full pt-0.5';
	let spanClass =
		'pl-2 self-center text-md sm:text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white';

	let topli =
		'block py-2 pr-4 pl-3 text-gray-700 md:border-0 md:p-0 dark:text-gray-300  dark:hover:bg-gray-700 text-lg z-50  dark:bg-gray-800 dark:border-0 hover:bg-gray-100 bg-white';
	let topMenuDiv =
		'flex flex-wrap justify-end items-center mx-auto dark:bg-gray-800 h-8 pr-8 pt-1 sm:pr-12';
	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 dark:bg-gray-800 bg-white';

	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
	let sideBarListClass =
		'border-b border-gray-400 dark:border-gray-500 mb-2 px-0 xl:px-4 text-base';
	let h3Class = 'text-lg pb-2';
	import { quartInOut } from 'svelte/easing';
	import Toc from './Toc.svelte';
	let transitionParams = {
		duration: 500,
		delay: 100,
		easing: quartInOut,
		x: -200
	};
</script>

<div class="px-4 mx-auto w-full max-w-full">
	<Side
		{siteName}
		{siteClass}
		{transitionParams}
		{topMenus}
		{headerClass}
		{asideClass}
		{logo}
		{logoClass}
		{alt}
		{activeChildLi}
		{spanClass}
		{topli}
		{topMenuDiv}
		{topul}
		{childLi}
		{hamburgerClass}
	>
		<Nav {navClass} class="pb-4">
			<h3 class={h3Class}>
				<a href="/">Flowbite Svelte</a>
			</h3>
			{#each svelteflows as { href, name, rel }}
				<SidebarList {href} {name} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/accordions">Accordions</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/alerts">Alert</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/avatar">Avatar</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/badges">Badges</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/breadcrumbs">Breadcrumb</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/button-groups">Button groups</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/buttons">Buttons</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}><a href="/cards">Cards</a></h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/carousels">Carousel</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/darkmode">Dark mode</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/dropdowns">Dropdowns</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/forms">Forms</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/footer">Footer</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/icons">Icons</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/kbd">KBD</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/list-group">List group</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}><a href="/mega-menu">Mega menu</a></h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}><a href="/modals">Modals</a></h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}><a href="/navbar">Navbar</a></h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/paginations">Pagination</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/progressbars">Progress bar</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}><a href="/ratings">Rating</a></h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/sidebars">Sidebar</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/skeleton">Skeleton</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/spinners">Spinners</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/tables">Tables</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}><a href="/tabs">Tabs</a></h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/timelines">Timelines</a>
			</h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}><a href="/toasts">Toast</a></h3>
		</Nav>
		<Nav {navClass}>
			<h3 class={h3Class}>
				<a href="/tooltips">Tooltips</a>
			</h3>
		</Nav>
		<Nav {navClass} navDivClass={navDivClasslast}>
			<h3 class={h3Class}>Forms</h3>
			{#each forms as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
	</Side>

	<main class="flex mx-auto mb-8 px-0 sm:px-2 pt-16 lg:pl-64 2xl:pl-16">
		<DarkMode btnClass={darkmodebtn} />
		<div class="w-full px-0 sm:px-8">
			<slot />
		</div>
		<Toc />
	</main>
</div>
<div class="mx-auto mb-4 pt-4 lg:pl-64 2xl:pl-16">
	<Footer footerType="custom" customClass="p-4 bg-white sm:p-6 dark:bg-gray-900">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<FooterBrand
					href="https://flowbite-svelte.com"
					src={logo}
					alt="Flowbite-Svelte Logo"
					name="Flowbite-Svelte"
				/>
			</div>
			<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Resources
					</h2>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="https://flowbite.com/">Flowbite</FooterLink>
						<FooterLink liClass="mb-4" href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
					</FooterLinkGroup>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
						Follow us
					</h2>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte"
							>GitHub</FooterLink
						>
						<FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
					</FooterLinkGroup>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
					<FooterLinkGroup>
						<FooterLink
							liClass="mb-4"
							href="https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE"
							>License</FooterLink
						>
					</FooterLinkGroup>
				</div>
			</div>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<FooterCopyright href="/" by="Flowbite™" />
			<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				<FooterIcon
					href="https://github.com/themesberg/flowbite-svelte"
					class="text-gray-400 hover:text-gray-900"
					icon={Github}
				/>
			</div>
		</div>
	</Footer>
</div>
