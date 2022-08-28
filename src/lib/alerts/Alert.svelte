<script lang="ts">
	import { setContext } from 'svelte';
	import classNames from 'classnames';
	import { createEventDispatcher } from 'svelte';
	import type { SvelteComponent } from 'svelte';
	import CloseButton from '../utils/CloseButton.svelte';

	const dispatch = createEventDispatcher();
	setContext('background', true);

	export let color:
		| 'gray'
		| 'blue'
		| 'red'
		| 'green'
		| 'yellow'
		| 'indigo'
		| 'purple'
		| 'pink'
		| 'dark'
		| 'custom' = 'blue';
	export let dismissable: boolean = false;
	export let rounded: boolean = true;
	export let accent: boolean = false;
	export let customBgClass: string = '';
	export let customBorderAccentClass: string = '';
	export let customTextColor: string = '';

	let hidden = false;

	const handleAlert = () => {
		dispatch('handleAlert');
	};

	const handleHide = () => {
		hidden = !hidden;
	};

	const bgClasses = {
		gray: 'bg-gray-100 dark:bg-gray-200 ',
		red: 'bg-red-100 dark:bg-red-200',
		yellow: 'bg-yellow-100 dark:bg-yellow-200 ',
		green: 'bg-green-100 dark:bg-green-200 ',
		indigo: 'bg-indigo-100 dark:bg-indigo-200 ',
		purple: 'bg-purple-100 dark:bg-purple-200 ',
		pink: 'bg-pink-100 dark:bg-pink-200 ',
		blue: 'bg-blue-100 dark:bg-blue-200 ',
		dark: 'bg-gray-50 dark:bg-gray-700',
		custom: customBgClass
	};

	const borderAccentClasses = {
		gray: 'border-gray-500 dark:bg-gray-200 ',
		red: 'border-red-500 dark:bg-red-200 ',
		yellow: 'border-yellow-500 dark:bg-tellow-200 ',
		green: 'border-green-500 dark:bg-green-200 ',
		indigo: 'border-indigo-500 dark:bg-indigo-200 ',
		purple: 'border-purple-500 dark:bg-purple-200 ',
		pink: 'border-pink-500 dark:bg-pink-200 ',
		blue: 'border-blue-500 dark:bg-blue-200 ',
		dark: 'border-gray-500',
		custom: customBorderAccentClass
	};

	const textColors = {
		gray: 'text-gray-700 dark:text-gray-800',
		red: 'text-red-700 dark:text-red-800',
		yellow: 'text-yellow-700 dark:text-yellow-800',
		green: 'text-green-700 dark:text-green-800',
		indigo: 'text-indigo-700 dark:text-indigo-800',
		purple: 'text-purple-700 dark:text-purple-800',
		pink: 'text-pink-700 dark:text-pink-800',
		blue: 'text-blue-700 dark:text-blue-800',
		dark: 'text-gray-700  dark:text-gray-300',
		custom: customTextColor
	};

	let divClass: string;
	$: divClass = classNames(
		'p-4 text-sm',
		bgClasses[color] ?? bgClasses.blue,
		accent && (borderAccentClasses[color] ?? borderAccentClasses.blue),
		rounded && 'rounded-lg ',
		accent && 'border-t-4 ',
		textColors[color],
		$$props.class
	);
</script>

<div id={$$props.id} class:hidden class={divClass} role="alert">
	<div class="flex items-center whitespace-pre-wrap">
		{#if $$slots.icon}
			<slot name="icon" />
		{/if}

		<slot />

		{#if dismissable}
			<CloseButton
				class="-mx-1.5 -my-1.5"
				{color}
				on:click={handleHide}
				on:click={handleAlert}
				on:click
				on:change
				on:keydown
				on:keyup
				on:focus
				on:blur
				on:mouseenter
				on:mouseleave />
		{/if}
	</div>
	<slot name="extra" />
</div>
