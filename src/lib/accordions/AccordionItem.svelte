<script lang="ts">
	import classNames from 'classnames';
	import { slide } from 'svelte/transition';

	export let flush: boolean = false;
	export let id: string = '';
	export let slotClass: string = 'border-gray-200 dark:border-gray-700';
	let classSlot: string = classNames(slotClass, flush ? 'py-5 border-b' : 'p-5 border border-t-0');
	export let isOpen: boolean = false;
	export let color: boolean = false;

	export let btnClass: string =
		'flex items-center justify-between w-full font-medium text-left text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400';
	let classBtn: string = classNames(
		btnClass,
		flush
			? 'py-5 border-b'
			: 'focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 p-5 border hover:bg-gray-100 dark:hover:bg-gray-800'
	);
	export let colorClass: string =
		'focus:ring-blue-200 dark:focus:ring-blue-800 hover:bg-blue-100 text-blue-500 bg-blue-200 text-blue-700';

	const handleToggle = (id: string) => {
		isOpen = !isOpen;
	};

	let buttonClass: string;

	$: if (color && isOpen) {
		buttonClass = classBtn + colorClass;
	} else {
		buttonClass = classBtn;
	}
</script>

<h2 aria-expanded={isOpen}>
	<button
		on:click={() => handleToggle(id)}
		type="button"
		class:rounded-t-xl={id === '1'}
		class:border-t-0={id !== '1'}
		class={classNames(buttonClass, $$props.class)}
	>
		<slot name="header" />
		{#if isOpen}
			{#if $$slots.arrowup}
				<slot name="arrowup" />
			{:else}
				<svg
					data-accordion-icon
					class="w-6 h-6 rotate-180 shrink-0"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			{/if}
		{:else if $$slots.arrowdown}
			<slot name="arrowdown" />
		{:else}
			<svg
				data-accordion-icon
				class="w-6 h-6 shrink-0"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		{/if}
	</button>
</h2>
{#if isOpen}
	<div transition:slide={{ duration: 500 }}>
		<div class={classSlot}>
			<slot name="body" />
		</div>
	</div>
{/if}
