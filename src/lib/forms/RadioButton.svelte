<script lang="ts">
	import Button from '$lib/buttons/Button.svelte';
	import type { ButtonColorType, SizeType } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	interface Props {
		children: any;
		group?: string | number;
		value?: string | number;
		inline?: boolean;
        btnclass?: string;

		// Button properties forwarding
		pill?: boolean;
		outline?: boolean;
		size?: SizeType | undefined;
		color?: ButtonColorType | undefined;
		shadow?: boolean;
	}
	let {
		children,
		group,
		value,
		inline = true,
        btnclass,
		pill,
		outline,
		size,
		color,
		shadow,
		...attributes
	} = $props<Props>();
	// export let group: string | number = '';
	// export let value: string | number = '';
	// export let inline: boolean = true;

	// Button properties forwarding
	// export let pill: boolean = false;
	// export let outline: boolean = false;
	// export let size: SizeType | undefined = undefined;
	// export let color: ButtonColorType | undefined = undefined;
	// export let shadow: boolean = false;

	let buttonCls: string = twMerge(inline ? 'inline-flex' : 'flex', btnclass);
</script>

<Button
	tag="label"
	checked={value === group}
	{pill}
	{outline}
	{size}
	{color}
	{shadow}
	btnclass={buttonCls}
>
	<input type="radio" bind:group {value} {...attributes} class="sr-only" />
	{@render children()}
</Button>
