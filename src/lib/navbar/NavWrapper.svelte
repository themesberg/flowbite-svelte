<script>
	import { MenuOutline } from 'svelte-heros';

	let hidden = true;
	const toggle = () => {
		hidden = !hidden;
	};
</script>

{#if $$slots.button}
	<div class="flex items-center md:order-2">
		<slot name="button" />
		<button
			class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
			data-testid="navbar-toggle"
			on:click={toggle}
		>
			<span class="sr-only">Open main menu</span>
			<MenuOutline class="h-6 w-6 shrink-0" />
		</button>
	</div>
	<slot {hidden} />
{:else}
	<button
		class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
		data-testid="navbar-toggle"
		on:click={toggle}
	>
		<span class="sr-only">Open main menu</span>
		<MenuOutline class="h-6 w-6 shrink-0" />
	</button>

	<slot {hidden} />
{/if}
