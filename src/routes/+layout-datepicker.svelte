<script>
	import { DarkMode, Navbar, NavBrand, NavHamburger, NavUl, NavLi } from '$lib';
	import Toc from './Toc/+page.svelte';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
	let navClass = 'bg-white border-gray-200 px-4 sm:px-4 py-4 dark:bg-gray-800';
	let navDivClass = 'mx-auto flex flex-wrap justify-between items-center  container pr-8';
</script>

<Navbar let:hidden let:toggle {navClass} {navDivClass}>
	<NavBrand href="/">
		<img
			src="/images/flowbite-svelte-icon-logo.svg"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite-Svelte Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Flowbite
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="https://github.com/themesberg/flowbite-svelte">GitHub</NavLi>
	</NavUl>
</Navbar>
<main class="flex mx-auto pb-40 px-8 pt-8">
	<DarkMode btnClass={darkmodebtn} />
	<div class="w-full px-4 sm:px-8">
		<slot />
	</div>
	<Toc />
</main>
