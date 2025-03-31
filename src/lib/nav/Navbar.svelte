<script lang="ts">
	import { setContext } from 'svelte';
	import { clickOutside } from '../uiHelpers.svelte';
	import { slide, type SlideParams } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import type { navbarType } from '$lib/types';
	import { type NavbarProps as Props, navbar } from './';

	let {
		children,
		navSlotBlock,
		navSlotHiddenTop,
		navSlotHiddenBottom,
		toggleNav,
		closeNav = () => {},
		navStatus,
		fluid,
		brand,
		hamburgerMenu = true,
		breakPoint = 'md',
		navClass,
		divClass,
		btnClass,
		div2Class,
		activeClass,
		nonActiveClass,
		...restProps
	}: Props = $props();

	const { base, container, toggleButton, menuContainer, activeLink, inactiveLink } = $derived(
		navbar({ fluid, breakPoint, navStatus })
	);

	setContext<navbarType>('navbarContext', {
		navStatus,
		breakPoint,
		get activeClass() {
			return activeLink({ class: activeClass });
		},
		get nonActiveClass() {
			return inactiveLink({ class: nonActiveClass });
		},
		closeNav: closeNav
	});

	let slideParams: SlideParams = {
		delay: 250,
		duration: 500,
		easing: quintOut
	};
	// Create a helper to determine menu role and tabindex for A11y
	function getMenuProps(isOpen: boolean) {
		return isOpen ? { role: 'menu', tabindex: 0 } : { role: 'none', tabindex: -1 };
	}
</script>

<nav {...restProps} class={base({ class: navClass })} use:clickOutside={closeNav}>
	<div class={container({ class: divClass })}>
		{#if brand}
			{@render brand()}
		{/if}
		{#if hamburgerMenu}
			<button onclick={toggleNav} type="button" class={toggleButton({ class: btnClass })}>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
		{/if}
		{#if navSlotBlock}
			{@render navSlotBlock()}
		{/if}
		{#if navStatus}
			{#if navSlotHiddenTop}
				{@render navSlotHiddenTop()}
			{/if}
			<div
				class={menuContainer({ class: div2Class })}
				transition:slide={slideParams}
				{...getMenuProps(true)}
			>
				{@render children()}
			</div>
			{#if navSlotHiddenBottom}
				{@render navSlotHiddenBottom()}
			{/if}
		{:else}
			<div class={menuContainer({ class: div2Class })} {...getMenuProps(false)}>
				{@render children()}
			</div>
		{/if}
	</div>
</nav>

