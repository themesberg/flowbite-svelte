<script lang="ts">
	import classNames from 'classnames';
	export let aClass: string = 'flex items-center';
	export let spanClass: string =
		'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
	export let imgClass: string = 'mr-3 h-8';
	export let href: string = '';
	export let src: string = '';
	export let alt: string = '';
	export let name: string = '';
</script>

{#if href}
	<a {href} class={classNames(aClass, $$props.class)}>
		<img {src} class={imgClass} {alt} />
		<span class={spanClass}>{name}</span>
		<slot />
	</a>
{:else}
	<img {src} class={imgClass} {alt} />
{/if}
