<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M9 6.75002V15M15 9.00002V17.25M15.5031 20.7485L20.3781 18.311C20.7592 18.1204 21 17.7309 21 17.3047V4.82031C21 3.98401 20.1199 3.44007 19.3719 3.81408L15.5031 5.74847C15.1864 5.90683 14.8136 5.90683 14.4969 5.74847L9.50312 3.25158C9.1864 3.09322 8.8136 3.09322 8.49688 3.25158L3.62188 5.68908C3.24075 5.87965 3 6.26919 3 6.69531V19.1797C3 20.016 3.8801 20.56 4.62811 20.186L8.49688 18.2516C8.8136 18.0932 9.1864 18.0932 9.50312 18.2516L14.4969 20.7485C14.8136 20.9068 15.1864 20.9068 15.5031 20.7485Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M8.16147 2.58076C8.68934 2.31683 9.31066 2.31683 9.83853 2.58076L14.8323 5.07765C14.9379 5.13043 15.0621 5.13043 15.1677 5.07765L19.0365 3.14326C20.2832 2.51992 21.75 3.42647 21.75 4.82031V17.3047C21.75 18.0149 21.3487 18.6642 20.7135 18.9818L15.8385 21.4193C15.3107 21.6832 14.6893 21.6832 14.1615 21.4193L9.16771 18.9224C9.06213 18.8696 8.93787 18.8696 8.8323 18.9224L4.96353 20.8568C3.71683 21.4801 2.25 20.5736 2.25 19.1797V6.69531C2.25 5.98512 2.65125 5.33587 3.28647 5.01826L8.16147 2.58076ZM9 6.00002C9.41421 6.00002 9.75 6.3358 9.75 6.75002V15C9.75 15.4142 9.41421 15.75 9 15.75C8.58579 15.75 8.25 15.4142 8.25 15V6.75002C8.25 6.3358 8.58579 6.00002 9 6.00002ZM15.75 9.00002C15.75 8.5858 15.4142 8.25002 15 8.25002C14.5858 8.25002 14.25 8.5858 14.25 9.00002V17.25C14.25 17.6642 14.5858 18 15 18C15.4142 18 15.75 17.6642 15.75 17.25V9.00002Z" fill="${color}"/> `;
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
	export let ariaLabel = 'map';
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
