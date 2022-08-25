<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M2.25 11.9998L11.2045 3.04533C11.6438 2.60599 12.3562 2.60599 12.7955 3.04532L21.75 11.9998M4.5 9.74983V19.8748C4.5 20.4961 5.00368 20.9998 5.625 20.9998H9.75V16.1248C9.75 15.5035 10.2537 14.9998 10.875 14.9998H13.125C13.7463 14.9998 14.25 15.5035 14.25 16.1248V20.9998H18.375C18.9963 20.9998 19.5 20.4962 19.5 19.8748V9.74983M8.25 20.9998H16.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path d="M11.4697 3.84076C11.7626 3.54787 12.2374 3.54787 12.5303 3.84076L21.2197 12.5301C21.5126 12.823 21.9874 12.823 22.2803 12.5301C22.5732 12.2372 22.5732 11.7623 22.2803 11.4694L13.591 2.7801C12.7123 1.90142 11.2877 1.90142 10.409 2.7801L1.71967 11.4694C1.42678 11.7623 1.42678 12.2372 1.71967 12.5301C2.01256 12.823 2.48744 12.823 2.78033 12.5301L11.4697 3.84076Z" fill="${color}"/> <path d="M12 5.43176L20.159 13.5908C20.1887 13.6205 20.2191 13.6492 20.25 13.6769V19.8748C20.25 20.9103 19.4105 21.7498 18.375 21.7498H15C14.5858 21.7498 14.25 21.414 14.25 20.9998V16.4998C14.25 16.0856 13.9142 15.7498 13.5 15.7498H10.5C10.0858 15.7498 9.75 16.0856 9.75 16.4998V20.9998C9.75 21.414 9.41421 21.7498 9 21.7498H5.625C4.58947 21.7498 3.75 20.9103 3.75 19.8748V13.6769C3.78093 13.6492 3.81127 13.6205 3.84099 13.5908L12 5.43176Z" fill="${color}"/> `;
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
	export let ariaLabel = 'home';
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
