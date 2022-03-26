<script lang="ts">
	import { fade, blur, fly, slide } from 'svelte/transition';
	import type { Colors, TransitionTypes } from '../types';
	let visible = true;
	const handleHide = () => {
		visible = !visible;
	};
	export let iconColor: Colors = 'blue';
	// Export a prop through which you can set a desired transition
	export let transitionType: TransitionTypes = 'fade';

	// Pass in params
	export let transitionParams = {};
	let iconDivClass: string;
	export let divClass =
		'flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800';
	export let textClass = 'ml-3 text-sm font-normal';
	export let btnClass =
		'ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700';

	if (iconColor === 'blue') {
		iconDivClass =
			'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200';
	} else if (iconColor === 'green') {
		iconDivClass =
			'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200';
	} else if (iconColor === 'red') {
		iconDivClass =
			'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200';
	} else if (iconColor === 'gray') {
		iconDivClass =
			'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200';
	} else if (iconColor === 'purple') {
		iconDivClass =
			'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-purple-500 bg-purple-100 rounded-lg dark:bg-purple-800 dark:text-purple-200';
	} else if (iconColor === 'indigo') {
		iconDivClass =
			'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-indigo-500 bg-indigo-100 rounded-lg dark:bg-indigo-800 dark:text-indigo-200';
	} else if (iconColor === 'yellow') {
		iconDivClass =
			'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-800 dark:text-yellow-200';
	} else {
		iconDivClass =
			'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200';
	}

	// have a custom transition function that returns the desired transition
	function multiple(node: HTMLElement, params: any) {
		switch (transitionType) {
			case 'slide':
				return slide(node, params);
			case 'blur':
				return blur(node, params);
			case 'fly':
				return fly(node, params);
			case 'fade':
				return fade(node, params);
		}
	}
</script>

{#if visible}
	<div transition:multiple={transitionParams} class={divClass} role="alert">
		<div class={iconDivClass}>
			<slot name="icon" />
		</div>
		<div class={textClass}><slot name="text" /></div>
		<button type="button" class={btnClass} on:click={handleHide} aria-label="Close">
			<span class="sr-only">Close</span>
			<svg
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
	</div>
{/if}
