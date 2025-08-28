<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, P } from "flowbite-svelte";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>

<P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos impedit quo, quis quam in distinctio deleniti facere! Ea aliquid maiores iusto obcaecati rerum quisquam repellendus dignissimos rem quo veritatis.</P>

<P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos impedit quo, quis quam in distinctio deleniti facere! Ea aliquid maiores iusto obcaecati rerum quisquam repellendus dignissimos rem quo veritatis.</P>
