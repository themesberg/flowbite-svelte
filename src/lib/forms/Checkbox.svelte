<script lang="ts">
	import type { FormColorType } from '../types';
	import Radio, { labelClass, inputClass } from './Radio.svelte';
	import Label from './Label.svelte';

	// properties forwarding
	export let color: FormColorType = 'blue';
	export let custom: boolean = false;
	export let inline: boolean = false;
	export let tinted: boolean = false;

	export let group: string[] = [];
	export let value: string = '';
	export let checked: boolean = undefined;

	$: {
		// There's a bug in Svelte and bind:group is not working with wrapped checkbox
		// This workaround is taken from:
		// https://svelte.dev/repl/de117399559f4e7e9e14e2fc9ab243cc?version=3.12.1
		const index = group.indexOf(value);

		if (checked === undefined) checked = index >= 0;

		if (checked) {
			if (index < 0) {
				group.push(value);
				group = group;
			}
		} else {
			if (index >= 0) {
				group.splice(index, 1);
				group = group;
			}
		}
	}
</script>

<Label class={labelClass(inline, $$props.class)} show={!!$$slots.default}>
	<input
		type="checkbox"
		bind:checked
		on:click
		{value}
		{...$$restProps}
		class={inputClass(custom, color, true, tinted, $$slots.default || $$props.class)}
	/><slot />
</Label>
