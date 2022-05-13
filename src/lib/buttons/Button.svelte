<script lang="ts">
	import type { Buttontypes, ButtonType, Textsize } from '../types';
	export let rounded: boolean = false;
	export let textSize: Textsize = 'text-sm';
	export let btnColor: Buttontypes = 'blue';
	export let type: ButtonType = 'button';
	export let disabled: boolean = false;

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
	let round: string = rounded ? 'rounded-full' : 'rounded-lg';

	switch (btnColor) {
		default:
		case 'blue':
			buttonClass = `text-white text-center font-medium ${round} ${textSize} ${paddings}`;
			if (disabled) buttonClass += ' bg-blue-400 dark:bg-blue-500 cursor-not-allowed';
			else buttonClass += ' bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
			break;
		case 'blue-outline':
			buttonClass = `text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800`;
			break;
		case 'dark':
			buttonClass = `text-white text-center font-medium ${round} ${textSize} ${paddings}`;
			if (disabled) buttonClass += ' bg-gray-400 dark:bg-gray-500 cursor-not-allowed';
			else buttonClass += ' bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700';
			break;
		case 'dark-outline':
			buttonClass = `text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800`;
			break;
		case 'light':
			buttonClass = `text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium ${round} ${textSize} ${paddings} text-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`;
			break;
		case 'green':
			buttonClass = `text-white text-center font-medium ${round} ${textSize} ${paddings}`;
			if (disabled) buttonClass += ' bg-green-400 dark:bg-green-500 cursor-not-allowed';
			else buttonClass += ' bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800';
			break;
		case 'green-outline':
			buttonClass = `text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800`;
			break;
		case 'red':
			buttonClass = `text-white text-center font-medium ${round} ${textSize} ${paddings}`;
			if (disabled) buttonClass += ' bg-red-400 dark:bg-red-500 cursor-not-allowed';
			else buttonClass += ' bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900';
			break;
		case 'red-outline':
			buttonClass = `text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900`;
			break;
		case 'yellow':
			buttonClass = `text-white text-center font-medium ${round} ${textSize} ${paddings}`;
			if (disabled) buttonClass += ' bg-yellow-400 dark:bg-yellow-500 cursor-not-allowed';
			else buttonClass += ' bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900';
			break;
		case 'yellow-outline':
			buttonClass = `text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`;
			break;
		case 'purple':
			buttonClass = `text-white text-center font-medium ${round} ${textSize} ${paddings}`;
			if (disabled) buttonClass += ' bg-purple-400 dark:bg-purple-500 cursor-not-allowed';
			else buttonClass += ' bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900';
			break;
		case 'purple-outline':
			buttonClass = `text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg ${textSize} ${paddings} text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900`;
			break;
	}

	buttonClass += ' items-center inline-flex';
</script>

<button {type} class="{buttonClass} {$$props.class ? $$props.class : ''}" on:click>
	<slot>Read more</slot>
</button>
