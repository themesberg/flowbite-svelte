<script lang="ts">
	import type { DropdownType } from '../types';

	let toggleHidden = true;

	const handleToggle = () => {
		console.log('toggle clicked.');
		toggleHidden = !toggleHidden;
	};

	export let items: DropdownType[];
	export let divClass = 'relative';
	export let dropdownClass =
		'hidden absolute -left-12 top-14 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';
	export let headerClass = 'py-3 px-4 text-gray-900 dark:text-white';
	export let linkClass =
		'block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white';
</script>

<div class={divClass}>
	<div on:click={handleToggle}>
		<slot />
	</div>
	<div class:hidden={toggleHidden} class={dropdownClass}>
		{#if $$slots.header}
			<div class={headerClass}>
				<slot name="header" />
			</div>
		{/if}
		<ul class="py-1" aria-labelledby="dropdownButton">
			{#each items as { href, name, divider }}
				<li
					class:border-b={divider}
					class:border-gray-100={divider}
					class:dark:border-gray-500={divider}
				>
					<a {href} class={linkClass}>{name}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
