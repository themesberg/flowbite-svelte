<script lang="ts">
	import { type ActivityProps as Props, activity } from './index';

	let { children, class: className, ...restProps }: Props = $props();
	const base = activity({ class: className });
</script>

<ol {...restProps} class={base}>
	{@render children()}
</ol>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:class: string;
-->
