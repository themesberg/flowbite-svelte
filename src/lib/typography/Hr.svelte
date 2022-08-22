<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import classNames from 'classnames';

	export let divClass: string = 'inline-flex justify-center items-center w-full';
	export let hrClass: string = 'bg-gray-200 rounded border-0 dark:bg-gray-700';
	// bg-gray-200 rounded border-0 dark:bg-gray-700
	export let width: string = 'w-full';
	export let height: string = 'h-px';
	export let iconSize: number = 24;
	export let iconClass: string = 'text-gray-700 dark:text-gray-300';

	export let icon: typeof SvelteComponent;
	export let text: string;
	export let iconDivClass: string =
		'absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-900';
	export let textSpanClass: string =
		'absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900';
	let horizontalClass: string = classNames(hrClass, width, height, $$props.class);
</script>

{#if icon || text}
	<div class={classNames(divClass, $$props.classDiv)}>
		<hr class={horizontalClass} />
		{#if icon}
			<div class={iconDivClass}>
				<svelte:component this={icon} size={iconSize} class={iconClass} />
			</div>
		{:else}
			<span class={textSpanClass}>or</span>
		{/if}
	</div>
{:else}
	<hr class={horizontalClass} />
{/if}
