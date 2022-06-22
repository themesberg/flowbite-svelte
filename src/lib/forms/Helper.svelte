<script lang="ts">
	import classNames from 'classnames';
	export let helperClass: string = 'text-xs font-normal text-gray-500 dark:text-gray-300';
	export let color: 'gray' | 'green' | 'red' | 'disabled' = 'gray';
	const colorClasses = {
		gray: 'text-gray-900 dark:text-gray-300',
		green: 'text-green-700 dark:text-green-500',
		red: 'text-red-700 dark:text-red-500',
		disabled: 'text-gray-400 dark:text-gray-500'
	};
</script>

<p {...$$restProps} class={classNames(helperClass, colorClasses[color], $$props.class)}>
	<slot />
</p>
