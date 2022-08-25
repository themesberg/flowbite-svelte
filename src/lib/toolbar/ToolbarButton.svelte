<script lang="ts">
	import { getContext } from 'svelte';
	import classNames from 'classnames';

	const background = getContext('background');

	export let color: string = 'default';
	export let name: string = undefined;
	export let ariaLabel: string = undefined;
	export let size: 'xs' | 'sm' | 'md' = 'md';

	const colors = {
		default:
			'hover:text-gray-900 hover:bg-gray-100 text-gray-500 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600',
		gray: 'focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-300',
		red: 'focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-300',
		yellow: 'focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300',
		green: 'focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300',
		indigo: 'focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-300',
		purple: 'focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-300',
		pink: 'focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300',
		blue: 'focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-300'
	};

	const sizing = {
		xs: 'm-0.5 rounded focus:ring-1 p-0.5',
		sm: 'm-0.5 rounded focus:ring-1 p-0.5',
		md: 'rounded-lg focus:ring-2 p-1.5'
	};

	let buttonClass: string;
	$: buttonClass = classNames(
		'focus:outline-none whitespace-normal',
		sizing[size],
		colors[color],
		color === 'default' &&
			(background
				? 'hover:bg-gray-100 dark:hover:bg-gray-600'
				: 'hover:bg-gray-100 dark:hover:bg-gray-700'),
		$$props.class
	);

	const svgSizes = {
		xs: 'w-3 h-3',
		sm: 'w-3.5 h-3.5',
		md: 'w-5 h-5'
	};
</script>

<button on:click type="button" class={buttonClass} aria-label={ariaLabel ?? name}>
	{#if name}<span class="sr-only">{name}</span>{/if}
	<slot>
		<svg
			class={svgSizes[size]}
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</slot>
</button>
