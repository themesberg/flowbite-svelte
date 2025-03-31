<script lang="ts">
	import { type EnhandedImgProps as Props, img } from './index';

	let {
		src,
		size = 'none',
		alignment = 'left',
		effect = 'none',
		shadow = 'none',
		rounded = 'none',
		caption,
		imgClass,
		figClass,
		captionClass,
		href,
		...restProps
	}: Props = $props();

	let { base, figure, figureCaption } = $derived(img({ size, alignment, effect, shadow, rounded }));
</script>

{#snippet imageSlot()}
	{#if caption}
		<figure class={figure({ class: figClass })}>
			<enhanced:img {...restProps} {src} class={base({ class: imgClass })} />
			<figcaption class={figureCaption({ class: captionClass })}>
				{@html caption}
			</figcaption>
		</figure>
	{:else}
		<enhanced:img {...restProps} {src} class={base({ class: imgClass })} />
	{/if}
{/snippet}

{#if href}
	<a {href}>
		{@render imageSlot()}
	</a>
{:else}
	{@render imageSlot()}
{/if}

