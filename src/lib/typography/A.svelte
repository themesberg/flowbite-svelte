<script lang="ts">
	interface Props {
		children: any;
		href: string;
		aclass?: string | undefined;
	}
	import { twMerge } from 'tailwind-merge';

	let { children, href = '#', aclass, ...attributes } = $props<Props>();

	const colorCls: string = 'text-primary-600 dark:text-primary-500';
	const aCls: string = 'inline-flex items-center hover:underline';
</script>

<a {...attributes} {href} class={twMerge(aCls, colorCls, aclass)}>
	{@render children()}
</a>
