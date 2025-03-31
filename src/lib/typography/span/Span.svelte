<script lang="ts">
	import { type SpanProps as Props, span } from './index';

	let {
		children,
		class: className,
		italic,
		underline,
		linethrough,
		uppercase,
		gradient,
		highlight,
		decoration,
		decorationColor,
		decorationThickness,
		...restProps
	}: Props = $props();

	let classSpan = $derived(
		span({
			italic,
			underline,
			linethrough,
			uppercase,
			gradient,
			highlight,
			decoration,
			decorationColor,
			decorationThickness,
			className
		})
	);
</script>

<span {...restProps} class={classSpan}>
	{#if children}
		{@render children()}
	{/if}
</span>

