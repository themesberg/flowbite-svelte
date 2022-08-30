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
	import { forms, svelteflows, topMenus, typography, utilities } from './moduleItems/+server.js';

	let asideClass =
		'absolute w-auto bg-white pt-8 shadow-lg z-50 h-screen z-40 overflow-scroll dark:bg-gray-900';

	// Nav
	let navDivClass = 'pb-4';
	// Navbar
	let logo = '/images/flowbite-svelte-icon-logo.svg';
	let logoClass = 'w-8 ml-0 sm:ml-4 sm:mr-2';
	let alt = 'Flowbite Svelte';
	let hamburgerClass =
		'text-gray-300 hover:text-blue-500 cursor-pointer mr-4 border-none focus:outline-none lg:hidden';
	let activeChildLi = 'block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 dark:text-white';
	let childLi =
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0 md:p-0 text-base dark:text-white';
	let headerClass =
		'w-full z-50 px-6 bg-white h-14 pt-2 text-gray-600 border-b-2 dark:bg-gray-800 dark:text-white dark:border-b-1';
	let siteName = 'Flowbite Svelte';
	let navClass = 'py-0 px-4 text-base bg-white dark:bg-gray-900 dark:text-white';
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
		'border-b border-gray-400 dark:border-gray-500 mb-4 px-0 xl:px-4 text-base';
	let h3Class = 'text-lg pb-4';
	import { quartInOut } from 'svelte/easing';
	import Toc from './Toc/+page.svelte';
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
		{hamburgerClass}>
		<Nav {navClass} class="pb-2">
			<h3 class={h3Class}>
				<a href="/">Flowbite Svelte</a>
			</h3>
			{#each svelteflows as { href, name, rel }}
				<SidebarList {href} {name} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/accordions">Accordions</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/alerts">Alert</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/avatar">Avatar</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/badges">Badges</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/breadcrumbs">Breadcrumb</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/button-groups">Button groups</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/buttons">Buttons</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3><a href="/cards">Cards</a></h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/carousels">Carousel</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/darkmode">Dark mode</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/datepicker" rel="external">Datepicker</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/dropdowns">Dropdowns</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/forms" rel="external">Forms</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/footer">Footer</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/icons">Icons</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/kbd">KBD</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/list-group">List group</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3><a href="/mega-menu">Mega menu</a></h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3><a href="/modals">Modals</a></h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3><a href="/navbar">Navbar</a></h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/paginations">Pagination</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/popover">Popover</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/progressbars">Progress bar</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3><a href="/ratings">Rating</a></h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/sidebars">Sidebar</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/skeleton">Skeleton</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/spinners">Spinners</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/tables">Tables</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3><a href="/tabs">Tabs</a></h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/timelines">Timelines</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3><a href="/toasts">Toast</a></h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/tooltips">Tooltips</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>
				<a href="/typography">Typography</a>
			</h3>
		</Nav>
		<Nav {navClass} class="pb-2">
			<h3 class={h3Class}>Forms</h3>
			{#each forms as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} class="pb-2">
			<h3 class={h3Class}>Typography</h3>
			{#each typography as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} navDivClass={navDivClasslast}>
			<h3 class={h3Class}>Utilities</h3>
			{#each utilities as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
	</Side>

	<main class="flex mx-auto pt-12 pb:12 xl:pb-24 lg:pb-16 lg:pl-64">
		<DarkMode btnClass={darkmodebtn} />
		<div class="w-full px-4 sm:px-8">
			<slot />
		</div>
		<Toc />
	</main>
</div>
<div class="mx-auto mb-4 pt-4 lg:pl-64">
	<Footer footerType="custom" customClass="py-6 px-16 bg-white dark:bg-gray-900">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<FooterBrand
					href="https://flowbite-svelte.com"
					src={logo}
					alt="Flowbite-Svelte Logo"
					name="Flowbite-Svelte" />
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
							>GitHub</FooterLink>
						<FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
					</FooterLinkGroup>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
					<FooterLinkGroup>
						<FooterLink
							liClass="mb-4"
							href="https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE"
							>License</FooterLink>
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
					class="text-gray-400 hover:text-gray-900">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd" /></svg>
				</FooterIcon>
			</div>
		</div>
	</Footer>
</div>
