<script lang="ts">
	import classNames from 'classnames';
	import type { Colors } from '../types';

	export let color: Colors = 'blue';
	export let large: boolean = false;
	export let href: string;
	export let rounded: boolean = false;

	let badgeClass;

	const colors = {
		blue: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800',
		dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
		red: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900',
		green: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900',
		yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900',
		indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900',
		purple: 'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900',
		pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900'
	};

	const hovers = {
		blue: 'hover:bg-blue-200 dark:hover:bg-blue-300',
		dark: 'hover:bg-gray-200 dark:hover:bg-gray-300',
		red: 'hover:bg-red-200 dark:hover:bg-red-300',
		green: 'hover:bg-green-200 dark:hover:bg-green-300',
		yellow: 'hover:bg-yellow-200 dark:hover:bg-yellow-300',
		indigo: 'hover:bg-indigo-200 dark:hover:bg-indigo-300',
		purple: 'hover:bg-purple-200 dark:hover:bg-purple-300',
		pink: 'hover:bg-pink-200 dark:hover:bg-pink-300'
	};

	$: badgeClass = classNames(
		'inline-flex items-center justify-center mr-2',
		large ? 'text-sm font-medium' : 'text-xs font-semibold',
		colors[color] ?? colors.blue,
		href && (hovers[color] ?? hovers.blue),
		rounded ? 'rounded-full p-1' : 'rounded px-2.5 py-0.5',
		$$props.class
	);
</script>

<svelte:element this={href ? 'a' : 'span'} {href} {...$$restProps} class={badgeClass}>
	<slot />
</svelte:element>
