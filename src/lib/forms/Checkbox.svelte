<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { FormColorType } from '../types';
	import { labelCls, inputCls } from './Radio.svelte';
	import Label from './Label.svelte';
	interface Props {
		children?: any;
		color?: FormColorType;
		custom?: boolean;
		inline?: boolean;
		group?: (string | number)[];
		value?: string | number;
		checked?: boolean | undefined;
		spacing?: string;
		labelclass?: string;
		inputclass?: string;
	}

	let {
		children,
		color = 'primary',
		custom = false,
		inline = false,
		group = [],
		value = 'on',
		checked,
		spacing = 'me-2',
		labelclass = '',
		inputclass = '',
		...attributes
	} = $props<Props>();
</script>

<Label labelclass={labelCls(inline, labelclass)}>
	<input
		type="checkbox"
		bind:checked
		{value}
		{...attributes}
		class={twMerge(spacing, inputCls(custom, color, true, false, inputclass))}
	/>
	{#if children}
		{@render children()}
	{/if}
</Label>
