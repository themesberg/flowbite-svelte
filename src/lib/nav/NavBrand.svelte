<script lang="ts">
  interface Props{
		siteName: string;
		closeNav: ()=>void;
		aClass?: string | undefined;
		spanClass?: string | undefined;
	}
	import { twMerge } from 'tailwind-merge';
	let { siteName, closeNav, aClass, spanClass } = $props<Props>();

	let aCls = twMerge('flex items-center space-x-3 rtl:space-x-reverse', aClass);
	let spanCls = twMerge(
		'self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-white sm:text-3xl',
		spanClass
	);
</script>

<a href="/" onclick={closeNav} class={aCls}>
	<span class={spanCls}>{siteName}</span>
</a>
