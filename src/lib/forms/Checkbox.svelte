<script lang="ts">
	import type { FormColorType } from '../types';
	import Radio from './Radio.svelte';

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

	let inputClass; // get the value from the underlying Radio

	// properties forwarding
	export let custom: boolean = false;
	export let color: FormColorType = 'blue';
	export let inline: boolean = false;
</script>

<Radio class={$$restProps.class} bind:inputClass {color} {custom} {inline}>
	<input
		slot="input"
		type="checkbox"
		bind:checked
		{value}
		{...$$restProps}
		class="rounded {inputClass}"
	/>
	<slot />
</Radio>
