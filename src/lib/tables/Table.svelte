<script lang="ts">
	import classNames from 'classnames';
	import { setContext } from 'svelte';

	export let divClass: string = 'relative overflow-x-auto shadow-md sm:rounded-lg';
	export let striped: boolean = false;
	export let hoverable: boolean = false;

	$: setContext('striped', striped);
	$: setContext('hoverable', hoverable);
</script>

<div class={divClass}>
	<table
		{...$$restProps}
		class={classNames('w-full text-left text-sm text-gray-500 dark:text-gray-400', $$props.class)}
	>
		<slot />
	</table>
</div>
