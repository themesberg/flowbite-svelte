<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	interface Props {
		children?: any;
		pclass?: string;
		color?: 'gray' | 'green' | 'red' | 'disabled';
	}
	let { children, pclass, color = 'gray', ...attributes } = $props<Props>();
	const colorClasses = {
		gray: 'text-gray-900 dark:text-gray-300',
		green: 'text-green-700 dark:text-green-500',
		red: 'text-red-700 dark:text-red-500',
		disabled: 'text-gray-400 dark:text-gray-500'
	};
</script>

<p
	{...attributes}
	class={twMerge(
		'text-xs font-normal text-gray-500 dark:text-gray-300',
		colorClasses[color],
		pclass
	)}
>
	{@render children()}
</p>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop children,
@prop pclass,
@prop color = 'gray',
@prop ...attributes
-->
