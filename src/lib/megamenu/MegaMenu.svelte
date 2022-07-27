<script lang="ts">
	import { setContext, afterUpdate } from 'svelte';
	import classNames from 'classnames';
	import type { LinkType } from '$lib/types';

	export let items: LinkTypeLike[] = [];
	export let full: boolean = false;

	interface LinkTypeLike extends LinkType {
		[propName: string]: any;
	}

	setContext('background', true);

	let wrapperClass;
	$: wrapperClass = classNames(
		'border-gray-100 shadow-md dark:border-gray-700',
		full ? 'border-y' : 'rounded-lg border',
		full ? 'bg-white dark:bg-gray-800' : 'bg-white dark:bg-gray-700',
		$$props.class
	);

	let ulClass: string;
	$: ulClass = classNames(
		'grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max',
		full && $$slots.extra ? 'sm:grid-cols-2' : 'sm:grid-cols-2 md:grid-cols-3',
		'text-sm font-medium',
		'text-gray-500 dark:text-gray-400',
		full && $$slots.extra && 'md:w-2/3'
	);

	function init(node: HTMLElement) {
		if (full) {
			node.parentElement.classList.add('inset-x-0');
		}
	}
</script>

<div class={wrapperClass} use:init>
	<div class="flex flex-col md:flex-row p-4 max-w-screen-xl justify-center mx-auto">
		<ul class={ulClass}>
			{#each items as item, index}
				<li>
					<slot {item} {index} />
				</li>
			{:else}
				<slot />
			{/each}
		</ul>
		{#if full && $$slots.extra}<div class="md:w-1/3 mt-4 md:mt-0"><slot name="extra" /></div>{/if}
	</div>
</div>
