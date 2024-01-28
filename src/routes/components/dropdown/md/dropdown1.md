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

<div class="mx-auto w-48">
	<Button onclick={toggle}
		>Dropdown
		<ChevronDownSolid class="ms-2 h-3 w-3 text-white dark:text-white" />
	</Button>
	<div class="relative">
		<Dropdown {isOpen} divclass="absolute -left-[27px]">
			{#snippet header()}
				<div>Bonnie Green</div>
				<div class="truncate font-medium">name@flowbite.com</div>
			{/snippet}
			{#snippet children()}
				<DropdownItem href="/">Dashboard</DropdownItem>
				<DropdownItem href="/components/dropdown">Dropdown</DropdownItem>
				<DropdownItem href="/components/footer">Footer</DropdownItem>
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
</div>