<script lang="ts">
	interface Props {
		children: any;
		ulClass?: string | undefined;
	}
	import { twMerge } from 'tailwind-merge';
	let { children, ulClass } = $props<Props>();

	let ulCls = twMerge(
		'mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 bg-transparent p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse',
		ulClass
	);
</script>

<ul class={ulCls}>
	{@render children()}
</ul>
