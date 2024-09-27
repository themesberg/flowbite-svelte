<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, uiHelpers } from '$lib';
  import { ChevronDownOutline, UserCircleOutline } from 'flowbite-svelte-icons';
  let menu = [
    { name: 'About us', href: '/about', Icon: UserCircleOutline },
    { name: 'Blog', href: '/blog', Icon: UserCircleOutline },
    { name: 'Contact us', href: '/contact', Icon: UserCircleOutline },
    { name: 'Library', href: '/library', Icon: UserCircleOutline },
    { name: 'Newsletter', href: '/news', Icon: UserCircleOutline },
    { name: 'Support Center', href: '/support', Icon: UserCircleOutline },
    { name: 'Resources', href: '/resource', Icon: UserCircleOutline },
    { name: 'Playground', href: '/play', Icon: UserCircleOutline },
    { name: 'Terms', href: '/tersm', Icon: UserCircleOutline },
    { name: 'Pro Version', href: '/pro', Icon: UserCircleOutline },
    { name: 'License', href: '/license', Icon: UserCircleOutline }
  ];
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let mega = uiHelpers();
  let megaStatus = $state(false);
  const toggleMega = mega.toggle;
  $effect(() => {
    navStatus = nav.isOpen;
    megaStatus = mega.isOpen;
  });
</script>

<div class="h-64">
  <Navbar {toggleNav} {closeNav} {navStatus}>
    {#snippet brand()}
      <NavBrand href="/">
        <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </NavBrand>
    {/snippet}
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi class="cursor-pointer" onclick={toggleMega}>
        Mega menu<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />
      </NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/services">Products</NavLi>
    </NavUl>
  </Navbar>
  <div class="relative">
    <MegaMenu items={menu} dropdownStatus={megaStatus} class="absolute -top-[20px] left-[300px] w-[450px]">
      {#snippet children(prop)}
        <a href={prop.item.href} class="flex items-center hover:text-primary-600 dark:hover:text-primary-500">
          <prop.item.Icon class="me-2 h-4 w-4" />
          {prop.item.name}
        </a>
      {/snippet}
    </MegaMenu>
  </div>
</div>
