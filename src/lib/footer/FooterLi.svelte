<script lang="ts">
	import { type FooterLiProps as Props, footerLi } from './';

	let { children, liClass, aClass, href, ...restProps }: Props = $props();
	const { base, link } = $derived(footerLi());
</script>

<li class={base({ class: liClass })}>
	<a {...restProps} {href} class={link({ class: aClass })}>
		{@render children()}
	</a>
</li>
