<script context="module">
	// this part is shared between Radio and Checkbox
	import classNames from 'classnames';

	const colorClasses = {
		red: 'text-red-600 focus:ring-red-500 dark:focus:ring-red-600',
		green: 'text-green-600 focus:ring-green-500 dark:focus:ring-green-600',
		purple: 'text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600',
		teal: 'text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600',
		yellow: 'text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600',
		orange: 'text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600',
		blue: 'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600'
	};
	const defaultInputClass =
		'w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2';

	export const labelClass = (inline, extraClass) =>
		classNames(inline ? 'inline-flex' : 'flex', 'items-center', extraClass);

	export const inputClass = (custom, color, rounded, extraClass) =>
		classNames(
			defaultInputClass,
			custom && 'sr-only peer',
			rounded && 'rounded',
			colorClasses[color],
			extraClass
		);
</script>

<script lang="ts">
	/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Label

	To associate the <label> with an <input> element, you need to give the <input> an id attribute.
	The <label> then needs a for attribute	whose value is the same as the input's id.

	Alternatively, you can nest the <input> directly inside the <label>, in which case the for and
	id attributes are not needed because the association is implicit:

	<label>Do you like peas?
	<input type="checkbox" name="peas">
	</label>

	 */

	import type { FormColorType } from '../types';
	import Label from './Label.svelte';

	export let color: FormColorType = 'blue';
	export let custom: boolean = false;
	export let inline: boolean = false;

	export let group: number | string = '';
	export let value: string = '';
</script>

<Label class={labelClass(inline, $$restProps.class)} show={!!$$slots.default}>
	<input
		type="radio"
		bind:group
		{value}
		{...$$restProps}
		class={inputClass(custom, color, false, $$slots.default || $$restProps.class)}
	/>
	<slot />
</Label>
