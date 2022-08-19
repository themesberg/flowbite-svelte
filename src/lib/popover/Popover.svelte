<script lang="ts">
	import Popper from '$lib/utils/Popper.svelte';
	import classNames from 'classnames';

	let popoverClass: string;
	$: popoverClass = classNames(
		'border border-gray-200 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-800',
		$$props.class
	);
</script>

<Popper activeContent={true} {...$$restProps} class={popoverClass} on:show>
	<slot name="trigger" slot="trigger" />
	<slot />
</Popper>
