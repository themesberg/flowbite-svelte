<script lang="ts">
	import type { Snippet } from "svelte";
	interface Fruit {
    name: string;
    qty: number;
    price: number;
	}
	interface Props {
		children?: Snippet;
		header?: Snippet;
		row: Snippet<[Fruit]>;
		data?: Fruit[];
	}

	let { children, data = [], header, row }: Props = $props();
</script>

<table>
	{#if header}
		<thead>
			<tr>{@render header()}</tr>
		</thead>
	{/if}

	<tbody>
		{#each data as d}
			<tr>{@render row(d)}</tr>
		{/each}
	</tbody>
</table>

{#if children}
	{@render children()}
{/if}

<style>
	table {
		text-align: left;
		border-spacing: 0;
	}

	tbody tr:nth-child(2n+1) {
		background: #eee;
	}

	table :global(th), table :global(td) {
		padding: 0.5em;
	}
</style>