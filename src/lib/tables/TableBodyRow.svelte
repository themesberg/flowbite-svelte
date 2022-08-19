<script lang="ts">
	import classNames from 'classnames';
	import { getContext } from 'svelte';

	export let trClass: string = 'bg-white';
	const colors = {
		default: 'dark:border-gray-700 dark:bg-gray-800',
		blue: 'bg-blue-500 border-b border-blue-400',
		green: 'bg-green-500 border-b border-green-400',
		red: 'bg-red-500 border-b border-red-400',
		yellow: 'bg-yellow-500 border-b border-yellow-400',
		purple: 'bg-purple-500 border-b border-purple-400',
		custom: ''
	};
	let color = 'default';
	color = getContext('color');
	let trClassfinal;
	$: trClassfinal = classNames(
		getContext('noborder') ? 'bg-white dark:bg-gray-800' : trClass,
		colors[color],
		{
			'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700':
				getContext('striped') === true,
			'hover:bg-gray-50 dark:hover:bg-gray-600': getContext('hoverable') === true
		},
		$$props.class
	);
</script>

<tr {...$$restProps} class={trClassfinal}>
	<slot />
</tr>
