<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import classNames from 'classnames';
	export let label: string = '';
	export let pill: boolean = false;
	export let outline: boolean = false;
	export let color:
		| 'blue'
		| 'alternative'
		| 'dark'
		| 'light'
		| 'green'
		| 'red'
		| 'yellow'
		| 'purple'
		| 'none' = 'blue';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let icon: typeof SvelteComponent | undefined = undefined;
	export let gradient: boolean = false;

	export let shadow:
		| 'blue'
		| 'green'
		| 'cyan'
		| 'teal'
		| 'lime'
		| 'red'
		| 'pink'
		| 'purple'
		| null = null;
	export let positionInGroup: 'start' | 'middle' | 'end' | null = null;

	const colorClasses = {
		blue: 'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600',
		alternative:
			'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800',
		dark: 'text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800',
		light:
			'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700',
		green:
			'text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600',
		red: 'text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600',
		yellow:
			'text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400',
		purple:
			'text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600',
		none: ''
	};
	const gradientClasses = {
		blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 ',
		green:
			'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800',
		cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
		teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800',
		lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800',
		red: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
		pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800',
		purple:
			'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800',
		purpleToBlue:
			'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800',
		cyanToBlue:
			'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
		greenToBlue:
			'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800',
		purpleToPink:
			'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800',
		pinkToOrange:
			'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800',
		tealToLime:
			'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:!text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700',
		redToYellow:
			'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400'
	};
	const coloredShadowClasses = {
		blue: 'shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80',
		green: 'shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80',
		cyan: 'shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80',
		teal: 'shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 ',
		lime: 'shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80',
		red: 'shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 ',
		pink: 'shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80',
		purple: 'shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80'
	};
	const outlineClasses = {
		default:
			'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800',
		dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
		green:
			'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
		red: 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
		yellow:
			'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
		purple:
			'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900',
		white:
			'text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
	};
	const sizeClasses = {
		xs: 'text-xs px-2 py-1',
		sm: 'text-sm px-3 py-1.5',
		md: 'text-sm px-4 py-2',
		lg: 'text-base px-5 py-2.5',
		xl: 'text-base px-6 py-3'
	};
	const iconSizeClasses = {
		xs: '!px-1',
		sm: '!px-1.5',
		md: '!px-2',
		lg: '!p-2.5',
		xl: '!p-3'
	};
</script>

<button
	on:click
	data-testid="button-element"
	type="button"
	{...$$props}
	class={classNames(
		'group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10',
		pill ? 'rounded-full' : 'rounded-lg',
		gradient && gradientClasses[color],
		outline ? outlineClasses[color] : colorClasses[color],
		shadow && coloredShadowClasses[shadow],
		{
			'border border-gray-900 dark:border-white': color === 'alternative' && outline,
			'cursor-not-allowed opacity-50': $$props.disabled,
			'focus:!ring-2': !!positionInGroup,
			'rounded-r-none': positionInGroup === 'start',
			'!rounded-none border-l-0 pl-0': positionInGroup === 'middle',
			'rounded-l-none border-l-0 pl-0': positionInGroup === 'end'
		},
		$$props.class
	)}
>
	<span
		class={classNames(
			'flex items-center',
			sizeClasses[size],
			outline && pill ? 'rounded-full' : 'rounded-md',
			{
				'bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white':
					outline,
				'rounded-r-none': positionInGroup === 'start',
				'!rounded-none': positionInGroup === 'middle',
				'rounded-l-none': positionInGroup === 'end',

				[iconSizeClasses[size]]: !!icon
			}
		)}
	>
		{#if icon}
			<svelte:component this={icon} class="h-5 w-5" />
		{:else}
			<slot />
			{#if label}
				<span
					class="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800"
				>
					{label}
				</span>
			{/if}
		{/if}
	</span>
</button>
