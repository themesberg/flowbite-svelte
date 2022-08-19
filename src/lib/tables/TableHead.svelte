<script lang="ts">
	import classNames from 'classnames';
	import { getContext } from 'svelte';

	export let theadClass: string = 'text-xs uppercase';
	export let theadnoborderClass: string = 'text-xs text-gray-900 uppercase dark:text-gray-400';
	const bgColors = {
		default: 'bg-gray-50 dark:bg-gray-700',
		blue: 'text-white dark:text-white',
		custom: ''
	};
	// text-xs text-gray-900 uppercase dark:text-gray-400
	const colors = {
		default: 'text-gray-700 dark:text-gray-400',
		blue: 'bg-blue-600',
		green: 'bg-green-600',
		red: 'bg-red-600',
		yellow: 'bg-yellow-600',
		purple: 'bg-purple-600',
		custom: ''
	};
	let color = 'default';
	color = getContext('color');
	let theadClassfinal;
	$: theadClassfinal = classNames(
		getContext('noborder') ? theadnoborderClass : theadClass,
		colors[color],
		$$props.class
	);
</script>

<thead {...$$restProps} class={theadClassfinal}>
	<tr>
		<slot />
	</tr>
</thead>
