<script lang="ts">
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
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
      Mega menu<ChevronDownOutline class="text-fg-brand ms-2 inline h-6 w-6" />
    </NavLi>
    <MegaMenu items={menu}>
      {#snippet children({ item })}
        <a href={item.href} class="hover:text-fg-brand">{item.name}</a>
      {/snippet}
    </MegaMenu>
    <NavLi href="#">Services</NavLi>
    <NavLi href="#">Products</NavLi>
    <NavLi href="#">Contact</NavLi>
  </NavUl>
</Navbar>
