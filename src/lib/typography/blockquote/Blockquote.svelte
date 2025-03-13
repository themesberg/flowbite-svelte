<script lang="ts">
	import { type BlockquoteProps as Props, blockquote } from './index';

	let {
		children,
		class: className,
		border,
		italic = true,
		bg,
		alignment = 'left',
		size = 'lg',
		...restProps
	}: Props = $props();

	let blockquoteClass = $derived(
		blockquote({
			border,
			italic,
			bg,
			alignment,
			size,
			className
		})
	);
</script>

<blockquote {...restProps} class={blockquoteClass}>
	{@render children()}
</blockquote>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:class: string;
@props:border: any;
@props:italic: any = true;
@props:bg: any;
@props:alignment: any = "left";
@props:size: any = "lg";
-->
