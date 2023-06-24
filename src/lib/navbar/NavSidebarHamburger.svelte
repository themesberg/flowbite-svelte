<script lang="ts">
  import ToolbarButton from '../toolbar/ToolbarButton.svelte';
  import { twMerge } from 'tailwind-merge';
  import SidebarMenu from './SidebarMenu.svelte';

  export let btnClass: string = 'ml-3 md:hidden';
  export let sideMenuClass: string = 'h-6 w-6 shrink-0';
</script>

<ToolbarButton name="Open main menu" on:click {...$$restProps} class={twMerge(btnClass, $$props.class)}>
  <SidebarMenu class={twMerge(sideMenuClass, $$props.classSideMenu)} variation="solid" />
</ToolbarButton>

<!--
  @component
  [Go to Navbar](https://flowbite-svelte.com/docs/components/navbar)
  ## Props
  @prop btnClass: string = 'ml-3 md:hidden';
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
