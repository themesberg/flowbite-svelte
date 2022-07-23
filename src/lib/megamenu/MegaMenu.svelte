<script lang="ts">
	import Tooltip from '$lib/tooltips/Tooltip.svelte';
	export let open: boolean = false;
</script>

<Tooltip
	class={classNames('!rounded !p-0', $$props.class)}
	style="auto"
	animation="duration-100"
	{placement}
	arrow={tooltipArrow}
	trigger="click"
>
	<slot name="trigger">
		{#if inline}
			<button class={labelClass} class:flex-row-reverse={icon == ChevronLeft}>
				<slot name="label">{label}</slot>
				{#if arrowIcon}
					<svelte:component
						this={icon ?? ChevronDown}
						class={classNames('h-4 w-4', icon == ChevronLeft ? 'mr-2' : 'ml-2')}
					/>
				{/if}
			</button>
		{:else}
			<Button {...$$restProps} class={icon == ChevronLeft && 'flex-row-reverse'}>
				<slot name="label">{label}</slot>
				{#if arrowIcon}
					<svelte:component
						this={icon ?? ChevronDown}
						class={classNames('h-4 w-4', icon == ChevronLeft ? 'mr-2' : 'ml-2')}
					/>
				{/if}
			</Button>
		{/if}
	</slot>
	<slot name="content" slot="content">
		<ul class="py-1">
			<slot />
		</ul>
	</slot>
</Tooltip>
