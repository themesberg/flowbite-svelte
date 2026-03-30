<script lang="ts">
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Button } from "flowbite-svelte";
  import { resolve } from "$app/paths";
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
    { name: "Terms", href: "/terms" },
    { name: "Pro Version", href: "/pro" },
    { name: "License", href: "/license" }
  ];
</script>

<Navbar>
  <NavBrand href={resolve("/")}>
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="text-heading self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Mega menu<ChevronDownOutline class="text-fg-brand ms-2 inline h-6 w-6" />
    </NavLi>
    <MegaMenu full items={menu}>
      {#snippet children({ item })}
        <a href={item.href} class="hover:text-fg-brand hover:underline">
          {item.name}
        </a>
      {/snippet}
      {#snippet addon()}
        <a
          href={resolve("/")}
          class="rounded-base bg-dark mt-4 block bg-cover bg-local bg-center bg-no-repeat p-4 text-left bg-blend-multiply hover:bg-blend-soft-light"
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
