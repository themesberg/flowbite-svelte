<script lang="ts">
	import classNames from 'classnames';
	import * as transitions from 'svelte/transition';
	import type { Colors, TransitionTypes, TransitionParamTypes } from '../types';
	import CloseButton from '$lib/utils/CloseButton.svelte';

	export let color: Colors = 'blue';
	export let simple: boolean = false;

	// Export a prop through which you can set a desired transition
	export let transition: TransitionTypes = 'fade';

	// Pass in extra transition params
	export let params: TransitionParamTypes = {};

	// Absolute position
	export let position: 'tl' | 'tr' | 'bl' | 'br' = undefined; // default not set

	let visible = true;

	const colors = {
		blue: 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200',
		green: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
		red: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
		gray: 'text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-200',
		purple: 'text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200',
		indigo: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200',
		yellow: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200'
	};

	// have a custom transition function that returns the desired transition
	let transitionFunc;
	$: transitionFunc = transitions[transition] ?? transitions.fade;

	let divClass;
	$: divClass = classNames(
		'w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800',
		{
			'absolute top-5 left-5': position == 'tl',
			'absolute top-5 right-5': position == 'tr',
			'absolute bottom-5 left-5': position == 'bl',
			'absolute bottom-5 right-5': position == 'br'
		},
		$$props.class
	);

	let iconClass;
	$: iconClass = classNames(
		'inline-flex items-center justify-center flex-shrink-0 rounded-lg w-8 h-8 mr-3',
		colors[color]
	);
</script>

{#if visible}
	<div transition:transitionFunc={params} class={divClass} role="alert">
		<div class="flex {$$slots.extra ? 'items-start' : 'items-center'}">
			{#if $$slots.icon}
				<div class={iconClass}><slot name="icon" /></div>
			{/if}

			<div class="text-sm font-normal w-full">
				<slot />
				<slot name="extra" />
			</div>
			{#if !simple}
				<CloseButton on:click={() => (visible = false)} />
			{/if}
		</div>
	</div>
{/if}
