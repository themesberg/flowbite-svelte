<script lang="ts">
	import classNames from 'classnames';
	import { getContext } from 'svelte';

	export let tdClass: string = 'px-6 py-4 whitespace-nowrap font-medium ';

	let color = 'default';
	color = getContext('color');
	let tdClassfinal;
	$: tdClassfinal = classNames(
		tdClass,
		color === 'default'
			? 'text-gray-900 dark:text-white'
			: 'text-blue-50 whitespace-nowrap dark:text-blue-100',

		$$props.class
	);
</script>

<td {...$$restProps} class={tdClassfinal}>
	<slot />
</td>
