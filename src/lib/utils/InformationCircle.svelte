<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	export let ariaLabel = 'information circle';
	
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M11.25 11.25L11.2915 11.2293C11.8646 10.9427 12.5099 11.4603 12.3545 12.082L11.6455 14.918C11.4901 15.5397 12.1354 16.0573 12.7085 15.7707L12.75 15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 8.25H12.0075V8.2575H12V8.25Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM10.9562 10.5584C12.1025 9.98533 13.3931 11.0206 13.0823 12.2639L12.3733 15.0999L12.4148 15.0792C12.7852 14.894 13.2357 15.0441 13.421 15.4146C13.6062 15.7851 13.4561 16.2356 13.0856 16.4208L13.0441 16.4416C11.8979 17.0147 10.6072 15.9794 10.9181 14.7361L11.6271 11.9001L11.5856 11.9208C11.2151 12.1061 10.7646 11.9559 10.5793 11.5854C10.3941 11.2149 10.5443 10.7644 10.9148 10.5792L10.9562 10.5584ZM12 9C12.4142 9 12.75 8.66421 12.75 8.25C12.75 7.83579 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.83579 11.25 8.25C11.25 8.66421 11.5858 9 12 9Z" fill="${color}"/> `;
	$: switch (variation) {
		case 'outline':
			svgpath = svgoutline;
			viewBox = '0 0 24 24';
			break;
		case 'solid':
			svgpath = svgsolid;
			viewBox = '0 0 24 24';
			break;
		default:
			svgpath = svgoutline;
			viewBox = '0 0 24 24';
	}
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	fill="none"
	{viewBox}
	stroke-width="2"
	on:click
>
	{@html svgpath}
</svg>
