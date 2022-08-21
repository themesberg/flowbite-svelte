<script lang="ts">
	import classNames from 'classnames';

	export let show: boolean = false;
	export let top: boolean = false;
	export let color: string = 'bg-gray-300 dark:bg-gray-500';
	export let rounded: boolean = false;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	const sizes = {
		xs: 'w-2.5 h-2.5',
		sm: 'w-3 h-3',
		md: 'w-3.5 h-3.5',
		lg: 'w-6 h-6',
		xl: 'w-10 h-10'
	};

	const offsets = {
		xs: ['left-4', 'left-5'],
		sm: ['left-6', 'left-6'],
		md: ['left-7', 'left-8'],
		lg: ['left-14', 'left-16'],
		xl: ['left-24', 'left-32']
	};

	let dotClass;
	$: dotClass = classNames(
		'absolute rounded-full border-white dark:border-gray-800 border-2',
		sizes[size],
		offsets[size][+rounded],
		top ? 'top-0' : 'bottom-0',
		rounded && top && 'transform -translate-y-1/2',
		rounded && !top && 'transform translate-y-1/4',
		color
	);
</script>

{#if show}
	<div class="relative flex-shrink-0">
		<slot />
		<span class={dotClass} />
	</div>
{:else}
	<slot />
{/if}
