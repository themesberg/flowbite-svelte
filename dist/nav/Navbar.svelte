<script>
	import { twMerge } from 'tailwind-merge';
	import { clickOutside } from './navHelper.svelte';

	let { children, toggleNav, closeNav, navStatus, brand, navClass='', divClass='', btnClass='', divChildrenClass='' } = $props();

	$inspect('Navbar navStatus', navStatus);
	let navDisplay = $derived(navStatus ? 'block' : 'hidden');
  
	let navCls = twMerge('border-gray-200 bg-transparent dark:bg-gray-900', navClass)
	let divCls = twMerge('mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4', divClass)
	let btnCls = twMerge('inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden', btnClass)
	let divChildrenCls = twMerge('w-full md:block md:w-auto', divChildrenClass)

</script>

<nav class="{navCls}" use:clickOutside={closeNav}>
	<div class="{divCls}">
		{#if brand}
			{@render brand()}
		{/if}
		<button
			onclick={toggleNav}
			type="button"
			class="{btnCls}"
			aria-controls="navbar-default"
		>
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
		<div class="{navDisplay} {divChildrenCls}">
			{@render children()}
		</div>
	</div>
</nav>
