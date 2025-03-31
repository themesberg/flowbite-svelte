<script lang="ts" generics="T">
	import Button from '$lib/buttons/Button.svelte';
	import { type RadioButtonProps as Props, radioButton } from '.';

	let {
		children,
		group = $bindable<T>(),
		value = $bindable<T>(),
		inline = true,
		pill,
		outline,
		buttonSize,
		color,
		shadow,
		class: className,
		...restProps
	}: Props<T> = $props();

	const base = $derived(radioButton({ inline, className }));
</script>

<Button
	tag="label"
	checked={value === group}
	{pill}
	{outline}
	size={buttonSize}
	{color}
	{shadow}
	class={base}
>
	<input type="radio" bind:group {value} {...restProps} class="sr-only" />
	{@render children()}
</Button>

