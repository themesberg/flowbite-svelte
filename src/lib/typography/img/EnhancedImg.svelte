<script lang="ts">
	import { type EnhandedImgProps as Props, img } from '.';
	let {
		src,
		href,
		caption,
		size,
		alignment,
		shadow,
		rounded,
		figClass,
		imgClass,
		captionClass,
		...restProps
	}: Props = $props();

	let { base, figure, figureCaption } = $derived(img({ size, alignment, shadow, rounded }));
</script>

{#snippet imageSlot()}
	{#if caption}
		<figure class={figure({ class: figClass })}>
			<enhanced:img {src} {...restProps} class={base({ class: imgClass })} />
			<figcaption class={figureCaption({ class: captionClass })}>
				{@html caption}
			</figcaption>
		</figure>
	{:else}
		<enhanced:img {src} {...restProps} class={base({ class: imgClass })} />
	{/if}
{/snippet}

{#if href}
	<a {href}>
		{@render imageSlot()}
	</a>
{:else}
	{@render imageSlot()}
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: src: any;
@props:href: any;
@props:caption: any;
@props:size: any;
@props:alignment: any;
@props:shadow: any;
@props:rounded: any;
@props:figClass: any;
@props:imgClass: any;
@props:captionClass: any;
-->
