<script lang="ts">
	import { type TableBodyCellProps as Props, tablebodycell } from './';

	let { children, class: className, colspan, onclick, ...restProps }: Props = $props();

	const base = $derived(tablebodycell({ className }));
</script>

<td {...restProps} class={base} colspan={colspan ?? 1}>
	{#if onclick}
		<button {onclick}>
			{#if children}
				{@render children()}
			{/if}
		</button>
	{:else if children}
		{@render children()}
	{/if}
</td>

