<script lang="ts">
	import '../app.css';
	import { DarkMode, Badge, SitemapFooter } from '$lib/index';
	import { Side, Nav, SidebarList } from 'svelte-sidebar-menu';
	import Twitter from './utils/icons/Twitter.svelte';
	import Github from './utils/icons/Github.svelte';
	import {
		accordions,
		badges,
		buttons,
		cards,
		carousels,
		dropdowns,
		forms,
		footers,
		icons,
		modals,
		ratings,
		svelteflows,
		tabs,
		timelines,
		tooltips,
		topMenus,
		footerLinks
	} from './moduleItems';

	let site = {
		name: 'Flowbite Svelte',
		href: '/',
		img: '/images/flowbite-svelte-logo-40.png'
	};

	let asideClass =
		'absolute w-auto bg-white pt-8 shadow-lg z-50 px-4 h-screen z-50 overflow-scroll dark:bg-gray-900';
	// Navbar
	let logo = '/images/flowbite-svelte-icon-logo.svg';
	let logoClass = 'w-8 ml-4 mr-2';
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
	let navDivClass = 'pb-2';
	let navDivClasslast = 'pb-24';
	let siteClass = ' w-full pt-0.5';
	let spanClass =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap xs:dark:text-white';

	let topli =
		'block py-2 pr-4 pl-3 text-gray-700 md:border-0 md:p-0 dark:text-gray-300  dark:hover:bg-gray-700 text-lg z-50  dark:bg-gray-800 dark:border-0 hover:bg-gray-100 bg-white';
	let topMenuDiv =
		'container flex flex-wrap justify-end items-center mx-auto dark:bg-gray-800 h-8 pr-12';
	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 dark:bg-gray-800 bg-white';
	// Others

	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
	let sideBarListClass =
		'border-b border-gray-400 dark:border-gray-500 mb-2 px-0 xl:px-4 text-base';
	// activeDropdownDiv, activeChildLi, buttonClass, dropdownLi

	// Footer
	let socialMedia = [
		{
			href: 'https://github.com/themesberg/flowbite-svelte',
			icon: Github
		},
		{
			href: 'https://twitter.com/shinokada',
			icon: Twitter
		}
	];

	let allRightsReserved = '';
	let copyrightYear = '';
	let liClass = 'mb-1 text-lg';
	let linksClass =
		'grid gap-8 py-8 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-36 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7';
	let copyrightDivClass =
		'py-6 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-36 text-gray-900 dark:bg-gray-700 md:flex md:items-center md:justify-between';
	let linkClass = 'hover:underline hover:text-red-600';
	let h3Class = 'text-lg pb-2';
	import { quartInOut } from 'svelte/easing';
	let transitionParams = {
		duration: 500,
		delay: 100,
		easing: quartInOut,
		x: -200
	};
</script>

<div class="px-4 mx-auto w-full max-w-7xl">
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
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/">Flowbite Svelte</a>
			</h3>
			{#each svelteflows as { href, name, rel }}
				<SidebarList {href} {name} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/accordions">Accordions</a>
			</h3>
			{#each accordions as { href, name, rel }}
				<SidebarList {href} {name} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/alerts">Alert</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/avatar">Avatar</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/badges">Badges</a>
			</h3>
			{#each badges as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/breadcrumbs">Breadcrumb</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/button-groups">Button groups</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/buttons">Buttons</a>
			</h3>
			{#each buttons as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}><a href="/cards">Cards</a></h3>
			{#each cards as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/carousels">Carousel</a>
			</h3>
			{#each carousels as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/darkmode">Dark mode</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/dropdowns">Dropdowns</a>
			</h3>
			{#each dropdowns as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/forms">Forms</a>
			</h3>
			{#each forms as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/footer">Footer</a>
			</h3>
			{#each footers as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/icons">Icons</a>
			</h3>
			{#each icons as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/list-group">List group</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}><a href="/modals">Modals</a></h3>
			{#each modals as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}><a href="/navbar">Navbar</a></h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/paginations">Pagination</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/progressbars">Progress bar</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}><a href="/ratings">Rating</a></h3>
			{#each ratings as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/sidebars">Sidebar</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/spinners">Spinners</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/tables">Tables</a>
			</h3>
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}><a href="/tabs">Tabs</a></h3>
			{#each tabs as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}>
				<a href="/timelines">Timelines</a>
			</h3>
			{#each timelines as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3 class={h3Class}><a href="/toasts">Toast</a></h3>
		</Nav>
		<Nav {navClass} navDivClass={navDivClasslast}>
			<h3 class={h3Class}>
				<a href="/tooltips">Tooltips</a>
			</h3>
			{#each tooltips as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
	</Side>

	<main class="flex w-full mx-auto px-2 pt-16 lg:pl-72 2xl:pl-24">
		<DarkMode btnClass={darkmodebtn} />
		<div class="w-full">
			<slot />
		</div>
	</main>
</div>
<div class="pt-4 lg:pl-72">
	<SitemapFooter
		{site}
		{socialMedia}
		links={footerLinks}
		{allRightsReserved}
		{copyrightYear}
		{liClass}
		{linksClass}
		{copyrightDivClass}
		{linkClass}
	/>
</div>
