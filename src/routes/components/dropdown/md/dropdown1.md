<script>
	import { Button, Dropdown, DropdownDivider, DropdownItem, uiHelpers } from 'svelte-5-ui-lib';
	import { ChevronDownSolid } from 'flowbite-svelte-icons'

	let dropdown = uiHelpers();

	let isOpen = $state(false);
	let toggle = dropdown.toggle;
	let close = dropdown.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		isOpen = dropdown.isOpen;
	});
	//$inspect('dropdown: ', isOpen);
</script>

<Button
		onclick={toggle}
		>Dropdown
		<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" tabindex="-1"/>
	</Button>
  <div class='relative'>
	<Dropdown {isOpen} divclass='absolute -left-[27px]'>
		{#snippet header()}
			<div>Bonnie Green</div>
			<div class="truncate font-medium">name@flowbite.com</div>
		{/snippet}
		{#snippet children()}
			<DropdownItem href="/">Dashboard</DropdownItem>
			<DropdownItem href="/nav">Navbar</DropdownItem>
			<DropdownItem href="/footer">Footer</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/dropdown">Dropdown</DropdownItem>
		{/snippet}
		{#snippet footer()}
			<div class="py-2">
				<a
					href="/"
					class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
					>Sign out</a
				>
			</div>
		{/snippet}
	</Dropdown>
</div>