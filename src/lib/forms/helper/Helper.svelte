<script lang="ts">
	import { type HelperProps as Props, helper } from '.';

	let { children, class: className, color = 'gray', ...restProps }: Props = $props();

	const base = $derived(helper({ color, className }));
</script>

<p {...restProps} class={base}>
	{@render children()}
</p>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:class: string;
@props:color: any = 'gray';
-->
