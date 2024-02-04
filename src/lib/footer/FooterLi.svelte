<script lang="ts">
	interface Props {
		children?: any;
		liclass?: string | undefined;
		aclass?: string | undefined;
		href?: string | undefined;
		target?: string | undefined;
	}

	import { twMerge } from 'tailwind-merge';
	let { children, liclass, aclass, href, target, ...attributes } = $props<Props>();

	let liCls: string = twMerge('me-4 last:me-0 md:me-6', liclass);
	let aCls: string = twMerge('hover:underline', aclass);
</script>

<li class={liCls}>
	<a {...attributes} {href} class={aCls} {target}>
		{@render children()}
	</a>
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop children,
@prop liclass,
@prop aclass,
@prop href,
@prop target,
@prop ...attributes
-->
