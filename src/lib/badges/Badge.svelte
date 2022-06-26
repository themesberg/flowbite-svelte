<script lang="ts">
	import type { Colors, Textsize } from '../types';
	export let textSize: Textsize = 'text-xs';
	export let name: string = 'Read more';
	export let color: Colors = 'blue';

	let badgeClass: string = 'font-semibold mr-2 px-2.5 py-0.5 rounded ';
	const colors = {
		gray: `bg-gray-100 text-gray-800 ${textSize} dark:bg-gray-700 dark:text-gray-300`,
		red: `bg-red-100 text-red-800 ${textSize} dark:bg-red-200 dark:text-red-900`,
		green: `bg-green-100 text-green-800 ${textSize} dark:bg-green-200 dark:text-green-900`,
		yellow: `bg-yellow-100 text-yellow-800 ${textSize} dark:bg-yellow-200 dark:text-yellow-900`,
		indigo: `bg-indigo-100 text-indigo-800 ${textSize} dark:bg-indigo-200 dark:text-indigo-900`,
		purple: `bg-purple-100 text-purple-800 ${textSize} dark:bg-purple-200 dark:text-purple-900`,
		pink: `bg-pink-100 text-pink-800 ${textSize} dark:bg-pink-200 dark:text-pink-900`,
		blue: `bg-blue-100 text-blue-800 ${textSize} dark:bg-blue-200 dark:text-blue-800`
	};
	badgeClass += colors[color] ?? colors.blue;
</script>

<span class="{badgeClass} {$$props.class || ''}" {...$$restProps}>{name}</span>
