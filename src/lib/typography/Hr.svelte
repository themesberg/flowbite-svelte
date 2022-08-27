<script lang="ts">
	import classNames from 'classnames';

	export let icon: boolean = false;
	export let width: string = 'w-full';
	export let height: string = 'h-px';
	export let divClass: string = 'inline-flex justify-center items-center w-full';
	export let hrClass: string = 'bg-gray-200 rounded border-0 dark:bg-gray-700';
	export let iconDivClass: string =
		'absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-900';
	export let textSpanClass: string =
		'absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900';

	let horizontalClass: string = classNames(hrClass, width, height, $$props.class);
</script>

{#if $$slots}
	<div class={classNames(divClass, $$props.classDiv)}>
		<hr class={horizontalClass} />
		{#if icon}
			<div class={iconDivClass}>
				<slot />
			</div>
		{:else}
			<span class={textSpanClass}>
				<slot />
			</span>
		{/if}
	</div>
{:else}
	<hr class={horizontalClass} />
{/if}
