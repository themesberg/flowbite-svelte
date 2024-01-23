<script lang="ts">
	interface Props {
		children?: any;
		siteName: string;
		closeNav: () => void;
		aclass?: string | undefined;
		spanclass?: string | undefined;
	}
	import { twMerge } from 'tailwind-merge';
	let { children, siteName, closeNav, aclass, spanclass } = $props<Props>();

	let aCls = twMerge('flex items-center space-x-3 rtl:space-x-reverse', aclass);
	let spanCls = twMerge(
		'self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-white sm:text-3xl',
		spanclass
	);
</script>

<a href="/" onclick={closeNav} class={aCls}>
	{#if children}
		{@render children()}
	{/if}
	<span class={spanCls}>{siteName}</span>
</a>
