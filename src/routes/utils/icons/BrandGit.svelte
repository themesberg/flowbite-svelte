<script>
	// https://github.com/shinokada/svelte-tabler/blob/main/src/lib/BrandGit.svelte
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'brand git';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/brand-git</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<circle cx="16" cy="12" r="1" />
	<circle cx="12" cy="8" r="1" />
	<circle cx="12" cy="16" r="1" />
	<path d="M12 15v-6" />
	<path d="M15 11l-2 -2" />
	<path d="M11 7l-1.9 -1.9" />
	<path
		d="M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z"
	/>
</svg>
