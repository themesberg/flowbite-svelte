<script lang="ts">
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from "flowbite-svelte";
  import { ChevronDownOutline, UserCircleOutline } from "flowbite-svelte-icons";
  let menu = [
    { name: "About us", href: "#", icon: UserCircleOutline },
    { name: "Blog", href: "#", icon: UserCircleOutline },
    { name: "Contact us", href: "#", icon: UserCircleOutline },
    { name: "Library", href: "#", icon: UserCircleOutline },
    { name: "Newsletter", href: "#", icon: UserCircleOutline },
    { name: "Support Center", href: "#", icon: UserCircleOutline },
    { name: "Resources", href: "#", icon: UserCircleOutline },
    { name: "Playground", href: "#", icon: UserCircleOutline },
    { name: "Terms", href: "#", icon: UserCircleOutline },
    { name: "Pro Version", href: "#", icon: UserCircleOutline },
    { name: "License", href: "#", icon: UserCircleOutline }
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
        <a href={item.href} class="hover:text-fg-brand flex items-center">
          <span class="sr-only">{item.name}</span>
          <svelte:component this={item.icon} class="me-2 h-4 w-4" />{item.name}
        </a>
      {/snippet}
    </MegaMenu>
    <NavLi href="#">Services</NavLi>
    <NavLi href="#">Products</NavLi>
    <NavLi href="#">Contact</NavLi>
  </NavUl>
</Navbar>
