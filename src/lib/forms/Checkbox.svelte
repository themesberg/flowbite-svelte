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
	import classNames from 'classnames';
	import type { FormColorType } from '../types';
	import generateId from '$lib/utils/generateId';

	const id = generateId();

	let inputClass: string =
		'w-4 h-4 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2';
	export let checked: boolean = false;
	export let color: FormColorType = 'blue';

	export let inline: boolean = false;

	let colorLabel: 'gray' | 'green' | 'red' | 'disabled' = 'gray';
	$: colorLabel = $$restProps.disabled ? 'disabled' : colorLabel;

	const colorClassesLabel = {
		gray: 'text-gray-900 dark:text-gray-300',
		green: 'text-green-700 dark:text-green-500',
		red: 'text-red-700 dark:text-red-500',
		disabled: 'text-gray-400 dark:text-gray-500'
	};

	const colorClasses = {
		red: 'text-red-600 focus:ring-red-500 dark:focus:ring-red-600',
		green: 'text-green-600 focus:ring-green-500 dark:focus:ring-green-600',
		purple: 'text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600',
		teal: 'text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600',
		yellow: 'text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600',
		orange: 'text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600',
		blue: 'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600'
	};
</script>

<label
	class={classNames(
		'text-sm font-medium',
		inline ? 'inline-flex' : 'flex',
		$$slots.helper || 'items-center',
		colorClassesLabel[colorLabel],
		$$restProps.class
	)}
>
	<input
		type="checkbox"
		bind:checked
		aria-describedby={$$slots.helper ? `${id}-helper` : null}
		{...$$restProps}
		class={classNames(inputClass, colorClasses[color])}
	/>

	{#if $$slots.helper}
		<div class="-mt-0.5">
			<slot />
			<div class="font-normal" id={`${id}-helper`}><slot name="helper" /></div>
		</div>
	{:else}
		<slot />
	{/if}
</label>
