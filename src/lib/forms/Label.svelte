<script lang="ts">
	import classNames from 'classnames';
	export let color: 'gray' | 'green' | 'red' | 'disabled' = 'gray';
	export let labelClass: string = 'text-sm font-medium';
	const colorClasses = {
		gray: 'text-gray-900 dark:text-gray-300',
		green: 'text-green-700 dark:text-green-500',
		red: 'text-red-700 dark:text-red-500',
		disabled: 'text-gray-400 dark:text-gray-500'
	};
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label {...$$restProps} class={classNames(labelClass, colorClasses[color], $$props.class)}>
	<slot />
</label>
