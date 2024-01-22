<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface Sizes {
		[key: string]: string;
	}

	interface Props {
		size?: keyof Sizes;
		class?: string | undefined;
	}
	const sizes: Sizes = {
		sm: 'max-w-sm',
		md: 'max-w-md',
		lg: 'max-w-lg',
		xl: 'max-w-xl',
		xxl: 'max-w-2xl'
	};

	let { size = 'sm', class: classname } = $props<Props>();
	let outDivclass = $state(twMerge(sizes[size], 'animate-pulse', classname));
</script>

<div role="status" class={outDivclass}>
	<div class="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700" />
	<div class="mb-2.5 h-2 w-9/12 rounded-full bg-gray-200 dark:bg-gray-700" />
	<div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
	<div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
	<div class="mb-2.5 h-2 w-10/12 rounded-full bg-gray-200 dark:bg-gray-700" />
	<div class="mb-2.5 h-2 w-11/12 rounded-full bg-gray-200 dark:bg-gray-700" />
	<div class="h-2 w-9/12 rounded-full bg-gray-200 dark:bg-gray-700" />
	<span class="sr-only">Loading...</span>
</div>
