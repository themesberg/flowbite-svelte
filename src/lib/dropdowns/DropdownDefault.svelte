<script lang="ts">
	import type { DropdownType, DropdownColorType } from '../types';
	import { dropdownIdStore } from './dropdownStores';
	import { get } from 'svelte/store';
	export let id: string = 'dropdown';
	export let label: string = 'Dropdown button';
	export let rounded: boolean = false;
	export let textSize: string = 'text-sm';
	export let color: DropdownColorType = 'blue';

	let showDropdownId: string;
	dropdownIdStore.subscribe((value) => {
		showDropdownId = value;
	});

	let paddings: string;
	if (textSize === 'text-xs') {
		paddings = 'py-2 px-3';
	} else if (textSize === 'text-sm') {
		paddings = 'py-2.5 px-5';
	} else if (textSize === 'text-base') {
		paddings = 'py-3 px-6';
	} else {
		paddings = 'py-2.5 px-5';
	}

	let buttonClass: string;
	let round = rounded ? 'rounded-full' : 'rounded-lg';

	export const openFn = (id: string) => {
		if (showDropdownId === id) {
			dropdownIdStore.update((n) => (n = null));
		} else {
			dropdownIdStore.update((n) => (n = id));
		}
	};

	const closeDropdown = () => {
		dropdownIdStore.update((n) => (n = null));
	};

	export let items: DropdownType[];

	export let dropdownClass: string = 'absolute left-0 top-1 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';

	export let headerClass: string = 'py-3 px-4 text-gray-900 dark:text-white';

	export let linkClass: string = 'block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white';

	if (color === 'blue') {
		buttonClass = `inline-flex z-10 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium ${round} ${textSize} ${paddings} text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
	} else if (color === 'blue-outline') {
		buttonClass = `inline-flex z-10 items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800`;
	} else if (color === 'dark') {
		buttonClass = `inline-flex z-10 items-center text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium ${round} ${textSize} ${paddings} text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700`;
	} else if (color === 'dark-outline') {
		buttonClass = `inline-flex z-10 items-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800`;
	} else if (color === 'light') {
		buttonClass = `inline-flex z-10 items-center text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium ${round} ${textSize} ${paddings} text-center dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800`;
	} else if (color === 'green') {
		buttonClass = `inline-flex z-10 items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium ${round} ${textSize} ${paddings} text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`;
	} else if (color === 'green-outline') {
		buttonClass = `inline-flex z-10 items-center text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800`;
	} else if (color === 'red') {
		buttonClass = `inline-flex z-10 items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium ${round} ${textSize} ${paddings} text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`;
	} else if (color === 'red-outline') {
		buttonClass = `inline-flex z-10 items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900`;
	} else if (color === 'yellow') {
		buttonClass = `inline-flex z-10 items-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium ${round} ${textSize} ${paddings} text-center dark:focus:ring-yellow-900`;
	} else if (color === 'yellow-outline') {
		buttonClass = `inline-flex z-10 items-center text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`;
	} else if (color === 'purple') {
		buttonClass = `inline-flex z-10 items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium ${round} ${textSize} ${paddings} text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`;
	} else if (color === 'purple-outline') {
		buttonClass = `inline-flex z-10 items-center text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900`;
	} else {
		// blue
		buttonClass = `inline-flex z-10 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium ${round} ${textSize} ${paddings} text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
	}
</script>

<button on:click={() => openFn(id)} class={buttonClass} type="button"
	>{label}
	<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /> </svg>
</button>

<div class="relative">
	{#if showDropdownId === id}
		<div class={dropdownClass}>
			{#if $$slots.header}
				<div class={headerClass}>
					<slot name="header" />
				</div>
			{/if}
			<ul class="py-1" aria-labelledby="dropdownButton">
				{#each items as { href, name, divider }}
					<li class:border-b={divider} class:border-gray-100={divider} class:dark:border-gray-500={divider}>
						<a {href} class={linkClass}>{name}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

{#if $dropdownIdStore}
	<div on:click={closeDropdown} class="fixed w-full h-full z-0 inset-0" />
{/if}
