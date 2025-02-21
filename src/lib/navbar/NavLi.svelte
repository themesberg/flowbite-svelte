<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { NavbarLiType } from './NavUl.svelte';
  import type { HTMLAttributes, HTMLAnchorAttributes  } from 'svelte/elements';

  interface NavLiProps {
    href?: string;
    activeClass?: string;
    nonActiveClass?: string;
  }

  type $$Props = NavLiProps & (HTMLAnchorAttributes | HTMLAttributes<HTMLDivElement>);

  export let href: $$Props['href'] = '';
  export let activeClass: $$Props['activeClass'] = undefined;
  export let nonActiveClass: $$Props['nonActiveClass'] = undefined;

  const context = getContext<NavbarLiType>('navbarContext') ?? {};
  const activeUrlStore = getContext('activeUrl') as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = '';
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });

  $: active = navUrl ? href === navUrl : false;

  $: liClass = twMerge('block py-2 pe-4 ps-3 md:p-0 rounded-sm md:border-0', active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass, $$props.class);
  // $: console.log()
</script>

<li>
  <svelte:element
    this={href ? 'a' : 'div'}
    role={href ? 'link' : 'presentation'}
    {href}
    {...$$restProps}
    on:blur
    on:change
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    class={liClass}
  >
    <slot />
  </svelte:element>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let href: $$Props['href'] = '';
@prop export let activeClass: $$Props['activeClass'] = undefined;
@prop export let nonActiveClass: $$Props['nonActiveClass'] = undefined;
-->
