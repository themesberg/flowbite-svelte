<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	interface Props {
		children?: any;
		aclass?: string | undefined;
		spanclass?: string | undefined;
		imgclass?: string | undefined;
		href?: string | undefined;
		src?: string | undefined;
		alt?: string | undefined;
		name?: string | undefined;
		target?: string | undefined;
	}
	let { children, aclass, spanclass, imgclass, href, src, alt, name, target, ...attributes } =
		$props<Props>();

	let aCls: string = twMerge('flex items-center', aclass);
	let spanCls: string = twMerge(
		'self-center text-2xl font-semibold whitespace-nowrap dark:text-white',
		spanclass
	);
	let imgCls: string = twMerge('me-3 h-8', imgclass);
</script>

{#if href}
	<a {...attributes} {href} {target} class={aCls}>
		{#if src}
			<img {src} class={imgCls} {alt} />
		{/if}
		{#if name}
			<span class={spanCls}>{name}</span>
		{/if}
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<img {src} class={imgCls} {alt} />
{/if}
