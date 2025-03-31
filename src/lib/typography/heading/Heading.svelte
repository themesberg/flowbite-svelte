<script lang="ts">
	import { type HeadingProps as Props, heading } from './index';

	let { children, tag = 'h1', class: className, ...restProps }: Props = $props();

	let headingClass = $derived(heading({ tag, className }));
</script>

<svelte:element this={tag} {...restProps} class={headingClass}>
	{@render children()}
</svelte:element>
