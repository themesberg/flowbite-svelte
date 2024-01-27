<script>
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	import { Dropdown, DropdownDivider, DropdownItem, uiHelpers } from '$lib';

	let dropdown = uiHelpers();

	let isOpen = $state(false);
	let toggle = dropdown.toggle;
	let close = dropdown.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		isOpen = dropdown.isOpen;
	});
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Dropdown</H1>

<H2>Default dropdown</H2>

<CodeWrapper class="h-96 items-start">
	<button
		onclick={toggle}
		class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		type="button"
		>Dropdown header <svg
			class="ms-3 h-2.5 w-2.5"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 10 6"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m1 1 4 4 4-4"
			/>
		</svg>
	</button>

	<Dropdown {isOpen}>
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
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown1.md']} />
