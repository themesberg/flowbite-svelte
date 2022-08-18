<script lang="ts">
	import classNames from 'classnames';
	import { getContext } from 'svelte';

	export let trClass: string = 'bg-white dark:border-gray-700 dark:bg-gray-800';
</script>

<tr
	{...$$restProps}
	class={classNames(
		getContext('noborder') ? 'bg-white dark:bg-gray-800' : trClass,
		{
			'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700':
				getContext('striped') === true,
			'hover:bg-gray-50 dark:hover:bg-gray-600': getContext('hoverable') === true
		},
		$$props.class
	)}
>
	<slot />
</tr>
