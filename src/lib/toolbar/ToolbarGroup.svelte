<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { type ToolbarGroupProps as Props, toolbarGroup } from './';

	let {
		children,
		spacing = 'default',
		padding = 'default',
		position = 'middle',
		class: className,
		...restProps
	}: Props = $props();

	const groupClass = $derived(toolbarGroup({ spacing, padding, position, class: className }));

	const options: Writable<boolean> = getContext('toolbar');
	if (options) $options = true;
</script>

<div {...restProps} class={groupClass}>
	{@render children()}
</div>
