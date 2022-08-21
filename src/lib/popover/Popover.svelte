<script lang="ts">
	import Popper from '$lib/utils/Popper.svelte';
	import classNames from 'classnames';

	export let title: string = '';

	let popoverClass: string;
	$: popoverClass = classNames(
		'rounded-lg shadow-sm',
		'bg-white dark:bg-gray-800',
		'text-gray-500 dark:text-gray-400',
		'border border-gray-200 dark:border-gray-700',
		$$props.class
	);
</script>

<Popper activeContent={true} {...$$restProps} class={popoverClass} on:show>
	<slot name="trigger" slot="trigger" />
	{#if $$slots.title || title}
		<div
			class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700"
		>
			<slot name="title">
				<h3 class="font-semibold text-gray-900 dark:text-white">{title}</h3>
			</slot>
		</div>
	{/if}
	<div class="py-2 px-3">
		<slot />
	</div>
</Popper>
