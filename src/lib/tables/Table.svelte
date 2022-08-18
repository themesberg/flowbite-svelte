<script lang="ts">
	import classNames from 'classnames';
	import { setContext } from 'svelte';

	export let divClass: string = 'relative overflow-x-auto';
	export let striped: boolean = false;
	export let hoverable: boolean = false;
	export let noborder: boolean = false;
	export let shadow: boolean = false;

	$: setContext('striped', striped);
	$: setContext('hoverable', hoverable);
	$: setContext('noborder', noborder);
</script>

<div class={classNames(divClass, shadow && 'shadow-md sm:rounded-lg')}>
	<table
		{...$$restProps}
		class={classNames('w-full text-left text-sm text-gray-500 dark:text-gray-400', $$props.class)}
	>
		<slot />
	</table>
</div>
