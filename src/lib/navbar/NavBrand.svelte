<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let href: string = '';
</script>

<a {href} {...$$restProps} class={twMerge('flex items-center', $$props.class)}>
  <slot />
</a>

<!--
  @component
  [Go to Navbar](https://flowbite-svelte.com/docs/components/navbar)
  ## Props
  @prop href: string = '';
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
