<script lang="ts">
	interface Props {
		children: any;
		kbdclass: string;
	}
	import { twMerge } from 'tailwind-merge';
	let { children, kbdclass } = $props<Props>();
	let kbdCls: string =
		'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500';
</script>

<kbd class={twMerge(kbdCls, kbdclass)}>
	{@render children()}
</kbd>
