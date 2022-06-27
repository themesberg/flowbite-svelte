<script lang="ts">
	import type { Gradientduotones, Textsize, ButtonType } from '../types';
	import Button from './Button.svelte';
	// export let textSize: Textsize = 'text-sm';
	// export let color: Gradientduotones = 'purple2blue';
	// let btnClass: string = `focus:ring-4 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2 `;
	// export let type: ButtonType = 'button';

	const colorClasses = {
		purpleToBlue:
			'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800',
		cyanToBlue:
			'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
		greenToBlue:
			'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800',
		purpleToPink:
			'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800',
		pinkToOrange:
			'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800',
		tealToLime:
			'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:!text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700',
		redToYellow:
			'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400'
	};

	const outlineClasses ={
	cyanToBlue: `from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800`,
	greenToBlue: `from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-green-200 dark:focus:ring-green-800`,
	purpleToPink: `from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-purple-200 dark:focus:ring-purple-800`,
	pinkToOrange: `from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-pink-200 dark:focus:ring-pink-800`,
	tealToLime: `from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-lime-200 dark:focus:ring-lime-800`,
	redToYyellow: `from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-red-100 dark:focus:ring-red-400`,
	purpleToBlue: `from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-blue-300 dark:focus:ring-blue-800`,
	}	
</script>

<Button
  {...$$props} {colorClasses} {outlineClasses} on:click>
	<slot>Read more</slot>
</Button>
