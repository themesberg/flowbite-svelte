<script lang="ts">
	import type { CardButtonType, Colors } from '../types';
	import Button from '../buttons/Button.svelte';
	export let title: string = 'Work fast from anywhere';
	export let headColor: Colors = 'gray';
	export let btns: CardButtonType[];
	export let divClass: string =
		'p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700';
	let headClass: string = 'mb-2 text-3xl font-bold dark:text-white ';

	if (headColor === 'blue') {
		headClass += 'text-blue-900';
	} else if (headColor === 'gray') {
		headClass += 'text-gray-900';
	} else if (headColor === 'red') {
		headClass += 'text-red-900';
	} else if (headColor === 'yellow') {
		headClass += 'text-yellow-900';
	} else if (headColor === 'green') {
		headClass += 'text-green-900';
	} else if (headColor === 'indigo') {
		headClass += 'text-indigo-900';
	} else if (headColor === 'purple') {
		headClass += 'text-purple-900';
	} else if (headColor === 'pink') {
		headClass += 'text-pink-900';
	}
</script>

<div class={divClass}>
	<h3 class={headClass}>
		{title}
	</h3>
	<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
		<slot />
	</p>
	<div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
		{#if btns}
			{#each btns as { name, textSize, type, href, rel, rounded }}
				<a {href} {rel}>
					<Button {rounded} {type} {textSize}>{name}</Button>
				</a>
			{/each}
		{/if}
	</div>
</div>
