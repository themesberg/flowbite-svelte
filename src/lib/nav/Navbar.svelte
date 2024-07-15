<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { clickOutside } from '../uiHelpers.svelte';
  import { slide, type SlideParams } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import type { navbarType } from '$lib/types';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    toggleNav?: () => void;
    closeNav?: () => void;
    openMainMenu?: boolean;
    navStatus?: boolean;
    fluid?: boolean;
    brand?: Snippet;
    breakPoint?: navbarType['breakPoint'];
    navClass?: string | undefined | null;
    divClass?: string | undefined | null;
    btnClass?: string | undefined | null;
    div2Class?: string | undefined | null;
    nonActiveClass?: string | undefined | null;
    activeClass?: string | undefined | null;
  }

  let {
    children,
    toggleNav,
    closeNav = () => {},
    openMainMenu = true,
    navStatus,
    fluid,
    brand,
    breakPoint = 'md',
    navClass,
    divClass,
    btnClass,
    div2Class,
    activeClass,
    nonActiveClass,
    ...attributes
  }: Props = $props();

  setContext<navbarType>('navbarContext', {
    breakPoint: breakPoint,
    activeClass: twMerge(
      'block py-2 px-3 text-white bg-primary-700 rounded   dark:text-white',
      activeClass
    ),
    nonActiveClass: twMerge(
      'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white',
      nonActiveClass
    ),
    closeNav: closeNav
  });

  let navDisplay = $derived(navStatus ? 'block' : 'hidden');
  let navCls = twMerge(
    'border-gray-200 bg-transparent dark:bg-gray-900',
    navClass
  );
  let divCls = twMerge(
    'mx-auto flex flex-wrap items-center justify-between p-4',
    breakPoint === 'xxl' ? 'w-full' : 'max-w-screen-xl',
    fluid ? 'w-full' : 'container',
    divClass
  );
  const btnBreak = {
    md: 'md:hidden',
    lg: 'lg:hidden',
    xl: 'xl:hidden',
    xxl: '2xl:hidden'
  };
  let btnCls = twMerge(
    'inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
    btnBreak[breakPoint],
    btnClass
  );
  const blockBreak = {
    md: 'md:block md:w-auto',
    lg: 'lg:block lg:w-auto',
    xl: 'xl:block xl:w-auto',
    xxl: '2xl:block 2xl:w-auto'
  };
  let divChildrenCls = twMerge('w-full', blockBreak[breakPoint], div2Class);
  // $inspect('Navbar: ', breakPoint);
  let slideParams: SlideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  };
</script>

<nav class={navCls} use:clickOutside={closeNav} {...attributes}>
  <div class={divCls}>
    {#if brand}
      {@render brand()}
    {/if}
    {#if openMainMenu}
      <button
        onclick={toggleNav}
        type="button"
        class={btnCls}
        aria-controls="navbar-default"
      >
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
    <div
      class="{navDisplay} {divChildrenCls}"
      transition:slide={slideParams}
      role="button"
      tabindex="0"
    >
      {@render children()}
    </div>
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
@props:navClass?: string | undefined | null;
@props:divClass?: string | undefined | null;
@props:btnClass?: string | undefined | null;
@props:div2Class?: string | undefined | null;
@props:nonActiveClass?: string | undefined | null;
@props:activeClass?: string | undefined | null;
-->
