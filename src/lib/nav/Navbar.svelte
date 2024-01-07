<script>
	let { children, toggleNav, closeNav, navStatus, brand } = $props();
	
    import { clickOutside } from "./navHelper.svelte";
    $inspect('Navbar navStatus', navStatus)
	let navClass = $derived(navStatus ? 'block' : 'hidden');
	
	const linkStyle =
		'block py-2 px-3 text-md hover:underline text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
	const activeStyle =
		'block py-2 px-3 text-md hover:underline text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500';
    
</script>

<nav class="border-gray-200 bg-transparent dark:bg-gray-900"
use:clickOutside={closeNav}
>
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		{#if brand}
        {@render brand()}
		{/if}
        <button
			onclick={toggleNav}
			type="button"
			class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
		<div class="{navClass} w-full md:block md:w-auto" id="navbar-default">
			
				{@render children()}
				
			
		</div>
	</div>
</nav>

