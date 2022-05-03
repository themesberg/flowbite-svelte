<script lang="ts">
	import type { Colors } from '../types';
	export let link: string = '';
	export let rel: string = '';
	export let alt: string = '';
	export let img: string = '';
	export let btnLabel: string = '';
	export let btnColor: Colors = 'blue';
	export let textdivClass: string = 'p-5';
	export let headerClass: string = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
	export let header: string = '';
	export let divClass: string = 'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
	let buttonClass: string;
	if (btnColor === 'blue') {
		buttonClass = 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
	} else if (btnColor === 'gray') {
		buttonClass = 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800';
	} else if (btnColor === 'red') {
		buttonClass = 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800';
	} else if (btnColor === 'yellow') {
		buttonClass = 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800';
	} else if (btnColor === 'green') {
		buttonClass = 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800';
	} else if (btnColor === 'indigo') {
		buttonClass = 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800';
	} else if (btnColor === 'purple') {
		buttonClass = 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800';
	} else if (btnColor === 'pink') {
		buttonClass = 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800';
	} else {
		buttonClass = 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
	}
</script>

<div class={divClass} class:has-paragraph={$$slots.paragraph}>
	{#if img}
		{#if link}
			<a href={link} {rel}>
				<img class="rounded-t-lg" src={img} {alt} />
			</a>
		{:else}
			<img class="rounded-t-lg" src={img} {alt} />
		{/if}
	{/if}
	<div class={textdivClass}>
		{#if header}
			{#if link}
				<a href={link} {rel}>
					<h3 class={headerClass}>
						{header}
					</h3>
				</a>
			{:else}
				<h3 class={headerClass}>
					{header}
				</h3>
			{/if}
		{/if}
		{#if $$slots.paragraph}
			<slot name="paragraph" />
		{/if}
		{#if link && btnLabel}
			<a href={link} {rel} class={buttonClass}>
				{btnLabel}
				<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
			</a>
		{/if}
	</div>
</div>
