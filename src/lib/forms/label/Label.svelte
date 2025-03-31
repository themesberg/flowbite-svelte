<script lang="ts">
	import { type LabelProps as Props, label } from '.';

	let { children, color = 'gray', show = true, class: className, ...restProps }: Props = $props();

	const base = $derived(label({ color, className }));
</script>

{#if show}
	<label {...restProps} class={base}>
		{@render children()}
	</label>
{:else}
	{@render children()}
{/if}
