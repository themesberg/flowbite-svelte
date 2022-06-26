<script lang="ts">
	import type { Colors, Textsize } from '../types';
	export let textSize: Textsize = 'text-xs';
	export let name: string = 'Read more';
	export let color: Colors = 'blue';
	export let href: string = '/';

	let badgeClass: string = 'font-semibold mr-2 px-2.5 py-0.5 rounded ';
	const colors = {
		gray: `bg-gray-100 hover:bg-gray-200 text-gray-800 ${textSize} dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300`,
		red: `bg-red-100 hover:bg-red-200 text-red-800 ${textSize} dark:bg-red-200 dark:text-red-800 dark:hover:bg-red-300`,
		green: `bg-green-100 hover:bg-green-200 text-green-800 ${textSize} dark:bg-green-200 dark:text-green-800 dark:hover:bg-green-300`,
		yellow: `bg-yellow-100 hover:bg-yellow-200 text-yellow-800 ${textSize} dark:bg-yellow-200 dark:text-yellow-800 dark:hover:bg-yellow-300`,
		indigo: `bg-indigo-100 hover:bg-indigo-200 text-indigo-800 ${textSize} dark:bg-indigo-200 dark:text-indigo-800 dark:hover:bg-indigo-300`,
		purple: `bg-purple-100 hover:bg-purple-200 text-purple-800 ${textSize} dark:bg-purple-200 dark:text-purple-800 dark:hover:bg-purple-300`,
		pink: `bg-pink-100 hover:bg-pink-200 text-pink-800 ${textSize} dark:bg-pink-200 dark:text-pink-800 dark:hover:bg-pink-300`,
		blue: `bg-blue-100 hover:bg-blue-200 text-blue-800 ${textSize} dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300`
	};
	badgeClass += colors[color] ?? colors.blue;
</script>

<a {href} class="{badgeClass} {$$props.class || ''}" {...$$restProps}>{name}</a>
