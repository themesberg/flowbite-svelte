<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	export let ariaLabel = 'star';
	
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M11.4806 3.49883C11.6728 3.03685 12.3272 3.03685 12.5193 3.49883L14.6453 8.61028C14.7263 8.80504 14.9095 8.93811 15.1197 8.95497L20.638 9.39736C21.1367 9.43735 21.339 10.0598 20.959 10.3853L16.7546 13.9867C16.5945 14.1239 16.5245 14.3392 16.5734 14.5444L17.8579 19.9293C17.974 20.416 17.4446 20.8007 17.0176 20.5398L12.2932 17.6542C12.1132 17.5443 11.8868 17.5443 11.7068 17.6542L6.98238 20.5398C6.55539 20.8007 6.02594 20.416 6.14203 19.9293L7.42652 14.5444C7.47546 14.3392 7.4055 14.1239 7.24531 13.9867L3.04099 10.3853C2.661 10.0598 2.86323 9.43735 3.36197 9.39736L8.88022 8.95497C9.09048 8.93811 9.27363 8.80504 9.35464 8.61028L11.4806 3.49883Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7881 3.2108C11.2364 2.13286 12.7635 2.13286 13.2118 3.2108L15.2938 8.21652L20.6979 8.64976C21.8616 8.74306 22.3335 10.1953 21.4469 10.9549L17.3295 14.4818L18.5874 19.7553C18.8583 20.8909 17.6229 21.7884 16.6266 21.1799L11.9999 18.354L7.37329 21.1799C6.37697 21.7884 5.14158 20.8909 5.41246 19.7553L6.67038 14.4818L2.55303 10.9549C1.66639 10.1953 2.13826 8.74306 3.302 8.64976L8.70609 8.21652L10.7881 3.2108Z" fill="${color}"/> `;
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
	on:click>
	{@html svgpath}
</svg>
