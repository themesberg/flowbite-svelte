<script lang="ts">
	import classNames from 'classnames';
	import { getContext } from 'svelte';
</script>

<tr
	{...$$restProps}
	class={classNames(
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
