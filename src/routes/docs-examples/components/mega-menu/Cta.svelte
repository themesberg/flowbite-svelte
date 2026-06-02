<script lang="ts">
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from "flowbite-svelte";
  import { ChevronDownOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  let menu = [
    { name: "About us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "Library", href: "#" },
    { name: "Newsletter", href: "#" },
    { name: "Support Center", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Playground", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Pro Version", href: "#" },
    { name: "License", href: "#" }
  ];
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="text-heading self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Company<ChevronDownOutline class="text-fg-brand ms-2 inline h-6 w-6" />
    </NavLi>
    <MegaMenu full items={menu}>
      {#snippet children({ item })}
        <a href={item.href} class="hover:text-fg-brand hover:underline">
          {item.name}
        </a>
      {/snippet}
      {#snippet addon()}
        <h2 class="text-heading mt-4 mb-2 font-semibold">Our brands</h2>
        <p class="text-body mb-2 p-0 text-sm font-light">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
        <a href="/" class="text-fg-brand inline-flex items-center text-sm font-medium hover:underline">
          Explore our brands
          <span class="sr-only">Explore our brands</span>
          <ArrowRightOutline class="text-fg-brand ms-2 h-6 w-6" />
        </a>
      {/snippet}
    </MegaMenu>
    <NavLi href="#">Marketplace</NavLi>
    <NavLi href="#">Resources</NavLi>
    <NavLi href="#">Contact</NavLi>
  </NavUl>
</Navbar>
