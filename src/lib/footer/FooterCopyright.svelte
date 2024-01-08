<script lang="ts">
	interface Props {
		spanClass?: string | undefined;
		aClass?: string | undefined;
		href?: string | undefined;
		by?: string | undefined;
		target?: string | undefined;
		copyrightMessage?: string | undefined;
	}

	import { twMerge } from 'tailwind-merge';
	let {
		spanClass,
		aClass,
		href,
		by,
		target,
		copyrightMessage = 'All Rights Reserved.',
		...attributes
	} = $props<Props>();
	const year: number = new Date().getFullYear();

	let spanCls: string = twMerge(
		'block text-sm text-gray-500 sm:text-center dark:text-gray-400',
		spanClass
	);
	let aCls: string = twMerge('hover:underline', aClass);
</script>

<span class={spanCls}>
	&copy; {year}
	{#if href}
		<a {...attributes} {href} {target} class={aCls}>
			{by}
		</a>
	{:else}
		<span class="ms-1">{by}</span>
	{/if}
	{copyrightMessage}
</span>
