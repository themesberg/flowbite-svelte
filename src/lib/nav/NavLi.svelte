<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';
  import type { navbarType } from '$lib/types';
  interface Props {
    children: any;
    closeNav: () => void;
    href?: string | undefined;
    aclass?: string | undefined;
    activeClass?: string | undefined;
    nonActiveClass?: string | undefined;
  }
  let { closeNav, href, children, aclass, activeClass, nonActiveClass, ...attributes } =
    $props<Props>();
  let breakPoint: navbarType['breakPoint'];

  const context = getContext<navbarType>('navbarContext');
  breakPoint = context.breakPoint ?? 'md';
  let currentUrl = $state($page.url.pathname);
  $effect(() => {
    currentUrl = $page.url.pathname;
  });
  const linkBreak = {
    md: 'md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 md:dark:hover:bg-transparent',
    lg: 'lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-primary-500 lg:dark:hover:bg-transparent',
    xl: 'xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 xl:dark:hover:text-primary-500 xl:dark:hover:bg-transparent',
    xxl: '2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-primary-700 2xl:p-0 2xl:dark:hover:text-primary-500 2xl:dark:hover:bg-transparent'
  };

  const activeBreak = {
    md: 'md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500',
    lg: 'lg:bg-transparent lg:text-primary-700 lg:p-0 lg:dark:text-primary-500',
    xl: 'xl:bg-transparent xl:text-primary-700 xl:p-0 xl:dark:text-primary-500',
    xxl: '2xl:bg-transparent 2xl:text-primary-700 2xl:p-0 2xl:dark:text-primary-500'
  };

  const linkStyle =
    'block py-2 px-3 text-md hover:underline text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white';
  const activeStyle =
    'block py-2 px-3 text-md hover:underline text-gray-700 bg-primary-700 rounded dark:text-white ';
  let aCls = $derived(
    currentUrl === href
      ? activeClass ?? context.activeClass
      : nonActiveClass ?? context.nonActiveClass
  );

  let linkClass = $derived(twMerge(aCls, linkBreak[breakPoint], aclass));

  // $inspect('aCls: ', aCls, 'current: ', currentUrl, 'href: ', href);
</script>

<li>
  <a {href} onclick={closeNav} {...attributes} aria-current={currentUrl === href} class={linkClass}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop closeNav,
@prop href,
@prop children,
@prop aclass,
@prop activeClass,
@prop nonActiveClass,
@prop ...attributes
-->
