<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M3.75 4.875C3.75 4.25368 4.25368 3.75 4.875 3.75H9.375C9.99632 3.75 10.5 4.25368 10.5 4.875V9.375C10.5 9.99632 9.99632 10.5 9.375 10.5H4.875C4.25368 10.5 3.75 9.99632 3.75 9.375V4.875Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3.75 14.625C3.75 14.0037 4.25368 13.5 4.875 13.5H9.375C9.99632 13.5 10.5 14.0037 10.5 14.625V19.125C10.5 19.7463 9.99632 20.25 9.375 20.25H4.875C4.25368 20.25 3.75 19.7463 3.75 19.125V14.625Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.5 4.875C13.5 4.25368 14.0037 3.75 14.625 3.75H19.125C19.7463 3.75 20.25 4.25368 20.25 4.875V9.375C20.25 9.99632 19.7463 10.5 19.125 10.5H14.625C14.0037 10.5 13.5 9.99632 13.5 9.375V4.875Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6.75 6.75H7.5V7.5H6.75V6.75Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6.75 16.5H7.5V17.25H6.75V16.5Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.5 6.75H17.25V7.5H16.5V6.75Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.5 13.5H14.25V14.25H13.5V13.5Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.5 19.5H14.25V20.25H13.5V19.5Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.5 13.5H20.25V14.25H19.5V13.5Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.5 19.5H20.25V20.25H19.5V19.5Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.5 16.5H17.25V17.25H16.5V16.5Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.875C3 3.83947 3.83947 3 4.875 3H9.375C10.4105 3 11.25 3.83947 11.25 4.875V9.375C11.25 10.4105 10.4105 11.25 9.375 11.25H4.875C3.83947 11.25 3 10.4105 3 9.375V4.875ZM4.875 4.5C4.66789 4.5 4.5 4.66789 4.5 4.875V9.375C4.5 9.58211 4.66789 9.75 4.875 9.75H9.375C9.58211 9.75 9.75 9.58211 9.75 9.375V4.875C9.75 4.66789 9.58211 4.5 9.375 4.5H4.875ZM12.75 4.875C12.75 3.83947 13.5895 3 14.625 3H19.125C20.1605 3 21 3.83947 21 4.875V9.375C21 10.4105 20.1605 11.25 19.125 11.25H14.625C13.5895 11.25 12.75 10.4105 12.75 9.375V4.875ZM14.625 4.5C14.4179 4.5 14.25 4.66789 14.25 4.875V9.375C14.25 9.58211 14.4179 9.75 14.625 9.75H19.125C19.3321 9.75 19.5 9.58211 19.5 9.375V4.875C19.5 4.66789 19.3321 4.5 19.125 4.5H14.625ZM6 6.75C6 6.33579 6.33579 6 6.75 6H7.5C7.91421 6 8.25 6.33579 8.25 6.75V7.5C8.25 7.91421 7.91421 8.25 7.5 8.25H6.75C6.33579 8.25 6 7.91421 6 7.5V6.75ZM15.75 6.75C15.75 6.33579 16.0858 6 16.5 6H17.25C17.6642 6 18 6.33579 18 6.75V7.5C18 7.91421 17.6642 8.25 17.25 8.25H16.5C16.0858 8.25 15.75 7.91421 15.75 7.5V6.75ZM3 14.625C3 13.5895 3.83947 12.75 4.875 12.75H9.375C10.4105 12.75 11.25 13.5895 11.25 14.625V19.125C11.25 20.1605 10.4105 21 9.375 21H4.875C3.83947 21 3 20.1605 3 19.125V14.625ZM4.875 14.25C4.66789 14.25 4.5 14.4179 4.5 14.625V19.125C4.5 19.3321 4.66789 19.5 4.875 19.5H9.375C9.58211 19.5 9.75 19.3321 9.75 19.125V14.625C9.75 14.4179 9.58211 14.25 9.375 14.25H4.875ZM12.75 13.5C12.75 13.0858 13.0858 12.75 13.5 12.75H14.25C14.6642 12.75 15 13.0858 15 13.5V14.25C15 14.6642 14.6642 15 14.25 15H13.5C13.0858 15 12.75 14.6642 12.75 14.25V13.5ZM18.75 13.5C18.75 13.0858 19.0858 12.75 19.5 12.75H20.25C20.6642 12.75 21 13.0858 21 13.5V14.25C21 14.6642 20.6642 15 20.25 15H19.5C19.0858 15 18.75 14.6642 18.75 14.25V13.5ZM6 16.5C6 16.0858 6.33579 15.75 6.75 15.75H7.5C7.91421 15.75 8.25 16.0858 8.25 16.5V17.25C8.25 17.6642 7.91421 18 7.5 18H6.75C6.33579 18 6 17.6642 6 17.25V16.5ZM15.75 16.5C15.75 16.0858 16.0858 15.75 16.5 15.75H17.25C17.6642 15.75 18 16.0858 18 16.5V17.25C18 17.6642 17.6642 18 17.25 18H16.5C16.0858 18 15.75 17.6642 15.75 17.25V16.5ZM12.75 19.5C12.75 19.0858 13.0858 18.75 13.5 18.75H14.25C14.6642 18.75 15 19.0858 15 19.5V20.25C15 20.6642 14.6642 21 14.25 21H13.5C13.0858 21 12.75 20.6642 12.75 20.25V19.5ZM18.75 19.5C18.75 19.0858 19.0858 18.75 19.5 18.75H20.25C20.6642 18.75 21 19.0858 21 19.5V20.25C21 20.6642 20.6642 21 20.25 21H19.5C19.0858 21 18.75 20.6642 18.75 20.25V19.5Z" fill="${color}"/> `;
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
	export let ariaLabel = 'qr code';
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
