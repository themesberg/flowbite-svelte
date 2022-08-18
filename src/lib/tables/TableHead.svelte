<script lang="ts">
	import classNames from 'classnames';
	import { getContext } from 'svelte';

	export let theadClass: string =
		'bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400';
	export let theadnoborderClass: string = 'text-xs text-gray-900 uppercase dark:text-gray-400';
	// text-xs text-gray-900 uppercase dark:text-gray-400
</script>

<thead
	{...$$restProps}
	class={classNames(getContext('noborder') ? theadnoborderClass : theadClass, $$props.class)}
>
	<tr>
		<slot />
	</tr>
</thead>
