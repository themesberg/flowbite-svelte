<script lang="ts">
  import { setContext } from 'svelte';
  import { clickOutside } from '../uiHelpers.svelte';
  import { slide, type SlideParams } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import type { navbarType } from '$lib/types';
  import { type NavbarProps as Props, navbar } from './';

  let { children, navSlotBlock, navSlotHiddenTop, navSlotHiddenBottom, toggleNav, closeNav = () => {}, navStatus, fluid, brand, hamburgerMenu = true, breakPoint = 'md', navClass, divClass, btnClass, div2Class, activeClass, nonActiveClass, ...restProps }: Props = $props();

  const { base, container, toggleButton, menuContainer, activeLink, inactiveLink } = $derived(navbar({ fluid, breakPoint, navStatus }));

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
</script>

<nav class={base({ class: navClass })} use:clickOutside={closeNav} {...restProps}>
  <div class={container({ class: divClass })}>
    {#if brand}
      {@render brand()}
    {/if}
    {#if hamburgerMenu}
      <button onclick={toggleNav} type="button" class={toggleButton({ class: btnClass })}>
        <span class="sr-only">Open main menu</span>
        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
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
      <div class={menuContainer({ class: div2Class })} transition:slide={slideParams} role="button" tabindex="0">
        {@render children()}
      </div>
      {#if navSlotHiddenBottom}
        {@render navSlotHiddenBottom()}
      {/if}
    {:else}
      <div class={menuContainer({ class: div2Class })} role="button" tabindex="0">
        {@render children()}
      </div>
    {/if}
  </div>
</nav>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:toggleNav?: () => void;
@props:closeNav?: () => void;
@props:openMainMenu?: boolean;
@props:navStatus?: boolean;
@props:fluid?: boolean;
@props:brand?: Snippet;
@props:breakPoint?: navbarType['breakPoint'];
@props:navClass?: string;
@props:divClass?: string;
@props:btnClass?: string;
@props:div2Class?: string;
@props:nonActiveClass?: string;
@props:activeClass?: string;
-->
