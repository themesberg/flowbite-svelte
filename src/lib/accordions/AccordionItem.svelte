<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ChevronDownSolid, ChevronUpSolid } from 'svelte-heros';

	export let id: string = '';

	export let btnClass: string = 'flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800';

	export let slotClass: string = 'p-5 border border-t-0 border-gray-200 dark:border-gray-700';

	let isOpen = false;
	let activeDropdown: string = undefined;
	const handleToggle = (id: string) => {
		isOpen = !isOpen;
		activeDropdown = id;
	};
</script>

<h2 aria-expanded={isOpen}>
	<button on:click={() => handleToggle(id)} type="button" class:rounded-t-xl={id === '1'} class:border-t-0={id !== '1'} class={btnClass}>
		<span><slot name="header" /></span>
		{#if isOpen}
			<ChevronUpSolid />
		{:else}
			<ChevronDownSolid />
		{/if}
	</button>
</h2>
{#if isOpen}
	<div transition:slide={{ duration: 500 }}>
		<div class={slotClass}>
			<slot name="body" />
		</div>
	</div>
{/if}
