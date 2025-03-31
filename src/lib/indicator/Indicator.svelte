<script lang="ts">
	import { indicator, type IndicatorProps as Props } from './index';

	let {
		children,
		color = 'primary',
		cornerStyle = 'circular',
		size = 'md',
		border = false,
		placement,
		offset = true,
		class: className,
		...restProps
	}: Props = $props();

	let hasChildren = !!children;
	const { base } = $derived(
		indicator({
			color,
			size,
			cornerStyle,
			border,
			placement,
			offset,
			hasChildren
		})
	);
</script>

<div {...restProps} class={base({ className })}>
	{#if children}
		{@render children()}
	{/if}
</div>
