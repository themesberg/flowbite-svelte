<script lang="ts">
	import Popper from '../utils/Popper.svelte';
	import classNames from 'classnames';

	export let color: string = 'custom';
	export let style: 'dark' | 'light' | 'auto' | 'custom' = 'auto';
	export let tipClass: string = 'py-2 px-3 text-sm font-medium';

	const colors = {
		dark: 'border-gray-800 bg-gray-900 text-white dark:bg-gray-700 dark:border-gray-600',
		light: 'border-gray-200 bg-white text-gray-900',
		auto: 'border-gray-200 bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600 '
	};

	let toolTipClass: string;
	$: toolTipClass = classNames("tooltip", tipClass, colors[style], $$props.class);
</script>

<Popper
	data-tooltip
	activeContent
	rounded
	border
	shadow
	color={style === 'custom' ? color : 'none'}
	{...$$restProps}
	class={toolTipClass}
	on:show>
	<slot />
</Popper>
