<script>
	import '../app.css';
	import { DarkMode, Badge, SocialMediaFooter } from '$lib/index';
	import { Aside, Nav, SidebarList, Navbar } from '@codewithshin/svelte-sidebar';
	import { GithubIcon, TwitterIcon } from '@codewithshin/svelte-simpleicons';
	import {
		accordions,
		alerts,
		badges,
		buttons,
		buttonGroups,
		cards,
		// darkmode,
		footers,
		icons,
		// list_group,
		modals,
		navbar,
		spinners,
		svelteflows,
		tabs,
		tooltips,
		topMenus
	} from './items.js';

	// Navbar
	let activeChildLi = 'block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 dark:text-white';
	let childLi =
		'block py-2 pr-4 pl-3  text-gray-700 border-b border-gray-100 md:border-0 md:p-0 text-lg dark:text-white';
	let headerClass =
		'px-8 bg-white h-16 pt-3 text-gray-600 border-b-2 bg-white dark:bg-gray-800 dark:text-white dark:border-b-1';
	let siteName = 'Flowbite Svelte';
	let navClass = 'py-0 px-8 bg-white text-lg bg-white dark:bg-gray-800 dark:text-white';
	let navDivClass = 'pb-4';
	let navDivClasslast = 'pb-24';
	let siteClass = ' pt-1.5 pl-12 w-full';
	let siteText = 'text-lg';
	let topli =
		'block py-2 pr-4 pl-3 text-gray-700 md:border-0  md:p-0 dark:text-gray-300  dark:hover:bg-gray-700  text-lg z-50 dark:bg-gray-800 dark:border-0 hover:bg-gray-100 bg-white';
	let topMenuDiv = 'container flex flex-wrap justify-end items-center mx-auto dark:bg-gray-800';
	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 dark:bg-gray-800 bg-white';
	// Others
	let asideClass =
		'absolute w-auto bg-white pt-8 shadow-lg z-50 px-4 h-full bg-white dark:bg-gray-800';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed left-2 top-20 z-50';
	let sideBarListClass = 'border-b border-gray-400 dark:border-gray-500 mb-2 px-4 text-base';
	// activeDropdownDiv, activeChildLi, buttonClass, dropdownLi

	let socialMedia = [
		{
			link: 'https://github.com/shinokada',
			icon: GithubIcon
		},
		{
			link: 'https://twitter.com/shinokada',
			icon: TwitterIcon
		}
	];
	let links = [
		{
			parent: 'RESOURCES',
			children: [
				{ name: 'Flowbite-Svelte', link: '/' },
				{
					name: 'Flowbite',
					link: 'https://flowbite.com/docs/getting-started/introduction/'
				},
				{
					name: 'Tailwind CSS',
					link: 'https://tailwindcss.com/docs/installation'
				}
			]
		},
		{
			parent: 'FOLLOW US',
			children: [
				{ name: 'Github', link: 'https://github.com/shinokada' },
				{
					name: 'Twitter',
					link: 'https://twitter.com/shinokada'
				}
			]
		},
		{
			parent: 'LEGAL',
			children: [{ name: 'License', link: 'license' }]
		}
	];
	let allRightsReserved = '';
	let copyrightYear = '';
</script>

<Navbar
	{activeChildLi}
	{childLi}
	{headerClass}
	{siteClass}
	{siteName}
	{siteText}
	{topMenus}
	{topMenuDiv}
	{topul}
	{topli}
/>
<Aside {asideClass}>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/" rel="external">Flowbite Svelte</a>
		</h3>
		{#each svelteflows as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/accordions" rel="external">Accordions</a>
		</h3>
		{#each accordions as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4"><a href="/alerts" rel="external">Alerts</a></h3>
		{#each alerts as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/badges" rel="external">Badges <Badge name="NEW" /></a>
		</h3>
		{#each badges as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/button-groups" rel="external">Button groups <Badge name="NEW" /></a>
		</h3>
		{#each buttonGroups as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/buttons" rel="external">Buttons</a>
		</h3>
		{#each buttons as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4"><a href="/cards" rel="external">Cards</a></h3>
		{#each cards as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/darkmode" rel="external">Dark mode</a>
		</h3>
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/dropdowns" rel="external">Dropdowns <Badge name="NEW" /></a>
		</h3>
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/footer" rel="external">Footer <Badge name="NEW" /></a>
		</h3>
		{#each footers as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/icons" rel="external">Icons <Badge name="NEW" /></a>
		</h3>
		{#each icons as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/list-group" rel="external">List group <Badge name="NEW" /></a>
		</h3>
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4"><a href="/modals" rel="external">Modals</a></h3>
		{#each modals as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4"><a href="/navbars" rel="external">Navbar</a></h3>
		{#each navbar as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4">
			<a href="/spinners" rel="external">Spinners <Badge name="NEW" /></a>
		</h3>
		{#each spinners as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClass}>
		<h3 class="text-base pb-4"><a href="/tabs" rel="external">Tabs</a></h3>
		{#each tabs as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass} {navDivClasslast}>
		<h3 class="text-base pb-4">
			<a href="/tooltips" rel="external">Tooltips <Badge name="NEW" /></a>
		</h3>
		{#each tooltips as { url, name, rel }}
			<SidebarList {url} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
</Aside>

<main class="container mx-auto px-4 pt-4">
	<DarkMode btnClass={darkmodebtn} />
	<div class="mt-4 w-full">
		<slot />
	</div>
</main>
<div class="pt-16 ">
	<SocialMediaFooter {socialMedia} {links} {allRightsReserved} {copyrightYear} />
</div>
