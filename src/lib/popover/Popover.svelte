<script lang="ts">
	import Popper from '$lib/utils/Popper.svelte';

	export let title: string = '';
</script>

<Popper activeContent border shadow rounded {...$$restProps} class={$$props.clas} on:show>
	{#if $$slots.title || title}
		<div
			class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
			<slot name="title">
				<h3 class="font-semibold text-gray-900 dark:text-white">{title}</h3>
			</slot>
		</div>
	{/if}
	<div class="py-2 px-3">
		<slot />
	</div>
</Popper>
