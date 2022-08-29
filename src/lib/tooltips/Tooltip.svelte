<script lang="ts">
	import Popper from '$lib/utils/Popper.svelte';
	import classNames from 'classnames';

	export let color: string = '';
	export let style: 'dark' | 'light' | 'auto' | 'custom' = 'dark';
	export let tipClass: string = 'py-2 px-3 text-sm font-medium rounded-lg shadow-sm tooltip';
	export let triggeredBy: string;

	const colors = {
		dark: 'border border-gray-800 bg-gray-900 text-white dark:bg-gray-700 dark:border-gray-600',
		light: 'border border-gray-200 bg-white text-gray-900',
		auto: 'border border-gray-200 bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600 ',
		custom: color
	};

	let toolTipClass;
	$: toolTipClass = classNames(tipClass, colors[style], $$props.class);
</script>

<Popper activeContent={false} {triggeredBy} {...$$restProps} class={toolTipClass} on:show>
	<slot />
</Popper>
