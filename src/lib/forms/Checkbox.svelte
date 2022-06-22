<script lang="ts">
	import classNames from 'classnames';
	import type { FormColorType } from '../types';
	export let inputClass: string =
		'w-4 h-4 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ';
	export let checked: boolean = false;
	export let color: FormColorType = 'blue';

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

<input
	type="checkbox"
	bind:checked
	class={classNames(inputClass, colorClasses[color], $$props.class)}
	{...$$restProps}
/>
