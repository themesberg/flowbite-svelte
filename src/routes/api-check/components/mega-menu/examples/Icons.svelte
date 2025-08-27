<script lang="ts">
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from "flowbite-svelte";
  import { ChevronDownOutline, UserCircleOutline } from "flowbite-svelte-icons";
  let menu = [
    { name: "About us", href: "/about", icon: UserCircleOutline },
    { name: "Blog", href: "/blog", icon: UserCircleOutline },
    { name: "Contact us", href: "/contact", icon: UserCircleOutline },
    { name: "Library", href: "/library", icon: UserCircleOutline },
    { name: "Newsletter", href: "/news", icon: UserCircleOutline },
    { name: "Support Center", href: "/support", icon: UserCircleOutline },
    { name: "Resources", href: "/resource", icon: UserCircleOutline },
    { name: "Playground", href: "/play", icon: UserCircleOutline },
    { name: "Terms", href: "/tersm", icon: UserCircleOutline },
    { name: "Pro Version", href: "/pro", icon: UserCircleOutline },
    { name: "License", href: "/license", icon: UserCircleOutline }
  ];
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Mega menu<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
    </NavLi>
    <MegaMenu items={menu}>
      {#snippet children({ item })}
        <a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500 flex items-center">
          <span class="sr-only">{item.name}</span>
          <svelte:component this={item.icon} class="me-2 h-4 w-4" />{item.name}
        </a>
      {/snippet}
    </MegaMenu>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/services">Products</NavLi>
    <NavLi href="/services">Contact</NavLi>
  </NavUl>
</Navbar>
