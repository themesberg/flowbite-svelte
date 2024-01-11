<script lang="ts">
	interface Props {
		children: any;
		ulClass?: string | undefined;
	}
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	let { children, ulClass } = $props<Props>();
	let breakPoint: 'md' | 'lg' | 'xl' | '2xl';

	breakPoint = getContext('breakPoint');
	const ulBreak = {
		md: 'md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900',
		lg: 'lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0 lg:dark:bg-gray-900',
		xl: 'xl:mt-0 xl:flex-row xl:space-x-8 xl:border-0 lg:p-0 xl:dark:bg-gray-900',
		'2xl': '2xl:mt-0 2xl:flex-row 2xl:space-x-8 2xl:border-0 2xl:p-0 2xl:dark:bg-gray-900'
	};

	// $inspect('break', ulBreak[breakPoint]);

	let ulCls = twMerge(
		'mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 bg-transparent p-4 font-medium dark:border-gray-700 dark:bg-gray-800 rtl:space-x-reverse',
		ulBreak[breakPoint],
		ulClass
	);

	// $inspect('NavUl', breakPoint);
</script>

<ul class={ulCls}>
	{@render children()}
</ul>
