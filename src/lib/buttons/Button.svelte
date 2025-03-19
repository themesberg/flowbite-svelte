<script lang="ts">
	import { getContext } from 'svelte';
	import type { SizeType } from '$lib/types';
	import { type ButtonProps as Props, button } from '.';

	const group: SizeType = getContext('group');

	let {
		children,
		pill = false,
		outline = false,
		size = group ? 'sm' : 'md',
		href,
		type = 'button',
		color = group ? (outline ? 'dark' : 'alternative') : 'primary',
		shadow = false,
		tag = 'button',
		disabled,
		class: className,
		...restProps
	}: Props = $props();

	const base = $derived(
		button({ color, size, disabled, pill, group: !!group, outline, shadow, className })
	);
</script>

{#if href}
	<a {href} {...restProps} class={base} role="button">
		{@render children()}
	</a>
{:else if tag === 'button'}
	<button {type} {...restProps} class={base} {disabled}>
		{@render children()}
	</button>
{:else}
	<svelte:element this={tag} {...restProps} class={base}>
		{@render children()}
	</svelte:element>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:pill: any = false;
@props:outline: any = false;
@props:size: any = group ? 'sm' : 'md';
@props:href: any;
@props:type: any = 'button';
@props:color: any = group ? (outline ? 'dark' : 'alternative') : 'primary';
@props:shadow: any = false;
@props:tag: any = 'button';
@props:disabled: any;
@props:class: string;
-->
