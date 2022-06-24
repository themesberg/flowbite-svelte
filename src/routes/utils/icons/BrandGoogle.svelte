<script>
	// https://github.com/shinokada/svelte-tabler/blob/main/src/lib/BrandGoogle.svelte
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'brand google';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={$$props.class}
	width={size}
	height={size}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"
	stroke-width="2"
	stroke={color}
	fill="none"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<desc>Download more icon variants from https://tabler-icons.io/i/brand-google</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
</svg>
