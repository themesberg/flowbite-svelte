<script lang="ts">
	import classNames from 'classnames';
	export let border: boolean = false;
	export let borderClass: string = 'border-l-4 border-gray-300 dark:border-gray-500';
	export let bgClass: string = 'bg-gray-50 dark:bg-gray-800';
	export let bg: boolean = false;
	export let baseClass: string = 'italic font-semibold text-gray-900 dark:text-white';
	export let alignment: 'left' | 'center' | 'right' = 'left';
	let alignmentClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right'
	};
	export let size: 'lg' | 'xl' | 'xxl' = 'xl';
	let sizeClasses = {
		lg: 'text-lg',
		xl: 'text-xl',
		xxl: 'text-2xl'
	};
</script>

<blockquote
	class={classNames(
		baseClass,
		alignmentClasses[alignment],
		sizeClasses[size],
		bg && bgClass,
		border && borderClass,
		$$props.class
	)}
>
	<slot />
</blockquote>
