<script lang="ts" context="module">
  export type NavbarLiType = {
    activeClass: string;
    nonActiveClass: string;
  };
</script>

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { slide, type SlideParams } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import Frame from '../utils/Frame.svelte';
  import { setContext } from 'svelte';

  export let divClass: string = 'w-full md:block md:w-auto';
  export let ulClass: string =
    'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium';
  export let hidden: boolean = true;
  export let slideParams: SlideParams = { delay: 250, duration: 500, easing: quintOut };
  export let activeClass: string =
    'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent';
  export let nonActiveClass: string =
    'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

  setContext<NavbarLiType>('navbar', { activeClass, nonActiveClass });

  let _divClass: string;
  $: _divClass = twMerge(divClass, $$props.class);

  let _ulClass: string;
  $: _ulClass = twMerge(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
</script>

{#if !hidden}
  <div {...$$restProps} class={_divClass} transition:slide={slideParams} on:click role="button" tabindex="0">
    <Frame tag="ul" border rounded color="navbarUl" class={_ulClass}>
      <slot />
    </Frame>
  </div>
{:else}
  <div {...$$restProps} class={_divClass} {hidden}>
    <ul class={_ulClass}>
      <slot />
    </ul>
  </div>
{/if}

<!--
  @component
  ## Features
  [Go to Navbar](https://flowbite-svelte.com/docs/components/navbar)
  ## Props
  @prop divClass: string = 'w-full md:block md:w-auto';
  @prop ulClass: string = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium';
  @prop hidden: boolean = true;
  @prop slideParams: SlideParams = { delay: 250, duration: 500, easing: quintOut };
  @prop activeClass: string = 'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent';
  @prop nonActiveClass: string = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
  ## Example
  ```
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
  ```
-->
