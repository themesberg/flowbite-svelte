<script lang="ts">
	import Button from './Button.svelte';
	import { getContext } from 'svelte';
	import { type GradientButtonProps as Props, gradientButton } from '.';
	import type { SizeType } from '$lib/types';

	const group: SizeType = getContext('group');

	let {
		children,
		outline,
		pill,
		color = 'blue',
		shadow,
		class: className,
		href,
		disabled,
		size,
		...restProps
	}: Props = $props();

	const { base, outlineWrapper } = $derived(
		gradientButton({ color, outline, pill, shadow, disabled, group: !!group })
	);
</script>

{#if outline}
	<div class={base({ className })}>
		<Button {...restProps} class={outlineWrapper()} {disabled} {href} {size}>
			{@render children()}
		</Button>
	</div>
{:else}
	<Button {...restProps} class={base({ className })} {disabled} {href} {size}>
		{@render children()}
	</Button>
{/if}
