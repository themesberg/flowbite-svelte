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

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:class: string;
@props:italic: any;
@props:underline: any;
@props:linethrough: any;
@props:uppercase: any;
@props:gradient: any;
@props:highlight: any;
@props:decoration: any;
@props:decorationColor: any;
@props:decorationThickness: any;
-->
