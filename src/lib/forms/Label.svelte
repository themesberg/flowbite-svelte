<script lang="ts">
	interface Props {
		children: any;
		color?: 'gray' | 'green' | 'red' | 'disabled';
		show?: boolean;
		class?: string | undefined;
		forId?: string | undefined;
	}
	import { twMerge } from 'tailwind-merge';

	let {
		children,
		color = 'gray',
		show = true,
		class: classname,
		forId,
		...attributes
	} = $props<Props>();

	const colorClasses = {
		gray: 'text-gray-900 dark:text-gray-300',
		green: 'text-green-700 dark:text-green-500',
		red: 'text-red-700 dark:text-red-500',
		disabled: 'text-gray-400 dark:text-gray-500'
	};

	let labelCls = twMerge(
		'text-sm rtl:text-right font-medium block',
		colorClasses[color],
		classname
	);
</script>

{#if show}
	<label {...attributes} class={labelCls} for={forId}>
		{@render children()}
	</label>
{:else}
	{@render children()}
{/if}
