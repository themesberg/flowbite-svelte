<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Frame from '../utils/Frame.svelte';
  import { twMerge } from 'tailwind-merge';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    navClass?: string;
    navDivClass?: string;
    fluid?: boolean;
    classNavDiv?: string;
  }

  export let navClass: string = 'px-2 sm:px-4 py-2.5 w-full';
  export let navDivClass: string = 'mx-auto flex flex-wrap justify-between items-center ';
  export let fluid: boolean = false;

  $: {
    // override default Frame value
    $$restProps.color = $$restProps.color ?? 'navbar';
  }

  let hidden = true;
  let toggle = () => {
    hidden = !hidden;
  };
</script>

<Frame tag="nav" {...$$restProps} class={twMerge(navClass, $$props.class)}>
  <div class={twMerge(navDivClass, $$props.classNavDiv, (fluid && 'w-full') || 'container')}>
    <slot {hidden} {toggle} />
  </div>
</Frame>

<!--
  @component
  [Go to Navbar](https://flowbite-svelte.com/docs/components/navbar)
  ## Props
  @prop navClass: string = 'px-2 sm:px-4 py-2.5 w-full';
  @prop navDivClass: string = 'mx-auto flex flex-wrap justify-between items-center ';
  @prop fluid: boolean = false;
  ## Example
  ```
  <script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
  </script>

  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src="/images/flowbite-svelte-icon-logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite
      </span>
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
