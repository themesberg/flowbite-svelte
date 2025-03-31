<script lang="ts">
	import { getContext } from 'svelte';
	import {
		type TableBodyRowProps as Props,
		tablebodyrow,
		type TableCtxType,
		type TableColrType
	} from './';

	let {
		children,
		class: className,
		color,
		striped,
		hoverable,
		noborder,
		...restProps
	}: Props = $props();

	const tableCtx = getContext<TableCtxType>('tableCtx');
	// for reactivity with svelte context
	let compoColor = $derived(color ? color : tableCtx.color || 'default');
	let compoHoverable = $derived(hoverable ? hoverable : tableCtx.hoverable || false);
	let compoStriped = $derived(striped ? striped : tableCtx.striped || false);
	let compoNoborder = $derived(noborder ? noborder : tableCtx.noborder || false);

	const base = $derived(
		tablebodyrow({
			color: compoColor as TableColrType,
			hoverable: compoHoverable,
			striped: compoStriped,
			border: compoNoborder,
			className
		})
	);
</script>

<tr {...restProps} class={base}>
	{#if children}
		{@render children()}
	{/if}
</tr>
