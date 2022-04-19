<script>
	import { Dropdown } from '$lib/index';
	let dropdownClass = 'absolute -left-40 top-12 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';
	let items = [
		{
			href: '/',
			name: 'Dashboard'
		},
		{
			href: '/',
			name: 'Settings'
		},
		{
			href: '/',
			name: 'Sign out'
		}
	];
	let items2 = [
		{
			href: '/',
			name: 'Test 2'
		},
		{
			href: '/',
			name: 'Test 2'
		},
		{
			href: '/',
			name: 'Test 2'
		}
	];
</script>

<h1 class="py-16">Dropdown</h1>

<div class="rounded-xl w-full flex justify-center my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<Dropdown {items} label="Dropdown 1" id="drop1" {dropdownClass} />
</div>

<div class="rounded-xl w-full flex justify-center my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 mt-24 sm:p-6">
	<Dropdown items={items2} label="Dropdown 2" id="drop2" {dropdownClass} />
</div>
