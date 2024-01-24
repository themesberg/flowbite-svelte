<script lang="ts">
	interface Props {
		children: any;
		markclass?: string | undefined;
	}
	import { twMerge } from 'tailwind-merge';
	let { children, markclass, ...attributes } = $props<Props>();
	let markCls: string = 'text-white dark:bg-blue-500 bg-blue-600 px-2 rounded';
</script>

<mark {...attributes} class={twMerge(markCls, markclass)}>
	{@render children()}
</mark>
