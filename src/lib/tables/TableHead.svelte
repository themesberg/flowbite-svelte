<script lang="ts">
	import classNames from 'classnames';
	import { getContext } from 'svelte';

	export let theadClass: string = 'text-xs uppercase';
	export let theadnoborderClass: string = 'text-xs text-gray-900 uppercase dark:text-gray-400';
	// text-xs text-gray-900 uppercase dark:text-gray-400
	const colors = {
		default: 'bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-400',
		blue: 'text-white bg-blue-600 dark:text-white',
		green: 'text-white bg-green-600 dark:text-white',
		red: 'text-white bg-red-600 dark:text-white',
		yellow: 'text-white bg-yellow-600 dark:text-white',
		purple: 'text-white bg-purple-600 dark:text-white',
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
