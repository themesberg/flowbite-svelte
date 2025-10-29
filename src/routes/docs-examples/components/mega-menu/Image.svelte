<script lang="ts">
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Button } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  let menu = [
    { name: "About us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact" },
    { name: "Library", href: "/library" },
    { name: "Newsletter", href: "/news" },
    { name: "Support Center", href: "/support" },
    { name: "Resources", href: "/resource" },
    { name: "Playground", href: "/play" },
    { name: "Terms", href: "/tersm" },
    { name: "Pro Version", href: "/pro" },
    { name: "License", href: "/license" }
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
    <MegaMenu full items={menu}>
      {#snippet children({ item })}
        <a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500 hover:underline">
          {item.name}
        </a>
      {/snippet}
      {#snippet extra()}
        <a
          href="/"
          class="mt-4 block rounded-lg bg-gray-500 bg-cover bg-local bg-center bg-no-repeat p-4 text-left bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
          style="background-image: url(/images/dashboard-overview.png)"
        >
          <p class="mb-5 max-w-xl p-0 text-sm leading-tight font-extrabold tracking-tight text-white">Preview the new Flowbite dashboard navigation.</p>
          <Button>Get started</Button>
        </a>
      {/snippet}
    </MegaMenu>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/services">Products</NavLi>
    <NavLi href="/services">Contact</NavLi>
  </NavUl>
</Navbar>
