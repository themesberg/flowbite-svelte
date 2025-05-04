<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Button } from "$lib";
  import { ChevronDownOutline, ArrowRightOutline, UserCircleOutline } from "flowbite-svelte-icons";
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
  let open = $state();
  let menu1 = [
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
  let menu2 = [
    { name: "Online Stores", help: "Connect with third-party tools that you're already using." },
    { name: "Segmentation", help: "Connect with third-party tools that you're already using." },
    { name: "Marketing CRM", help: "Connect with third-party tools that you're already using." },

    { name: "Online Stores", help: "Connect with third-party tools that you're already using." },
    { name: "Segmentation", help: "Connect with third-party tools that you're already using." },
    { name: "Marketing CRM", help: "Connect with third-party tools that you're already using." },

    { name: "Audience Management", help: "Connect with third-party tools that you're already using." },
    { name: "Creative Tools", help: "Connect with third-party tools that you're already using." },
    { name: "Marketing Automation", help: "Connect with third-party tools that you're already using." }
  ];
  let menu3 = [
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

<h1 class="my-4 text-3xl">Megamenu</h1>

The mega menu component is a full-width dropdown that can be triggered by clicking on the menu item and it shows a list of links that you can use to navigate through the pages on a website. Setup Default mega menu Use this example to show a list of links aligned on three columns inside the mega menu dropdown.

<h2 class="text-2xl">Default mega menu</h2>
<div class="border rounded p-4 my-4 h-72">
  <Navbar>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi class="cursor-pointer" onclick={() => (open = true)}>
        Mega menu<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
      </NavLi>
      <MegaMenu items={menu}>
        {#snippet children({ item })}
          <a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500">{item.name}</a>
        {/snippet}
      </MegaMenu>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/services">Products</NavLi>
      <NavLi href="/services">Contact</NavLi>
    </NavUl>
  </Navbar>
</div>

<h2 class="text-2xl">Mega menu with icons</h2>
Mega menu with icons This example of a mega menu dropdown can be used to also show an icon near the text of the link.

<div class="border rounded p-4 my-4 h-72">
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
      <MegaMenu items={menu1}>
        {#snippet children({ item })}
          <a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500 flex items-center">
            <span class="sr-only">{item.name}</span>
            <item.icon class="me-2 h-4 w-4" />{item.name}
          </a>
        {/snippet}
      </MegaMenu>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/services">Products</NavLi>
      <NavLi href="/services">Contact</NavLi>
    </NavUl>
  </Navbar>
</div>

<h2 class="text-2xl">Full width dropdown</h2>
Full width dropdown Use this example to show a mega menu dropdown that spans the entire width of the document page.

<div class="border rounded p-4 my-4 h-72">
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
      <MegaMenu full items={menu2}>
        {#snippet children({ item })}
          <a href="/" class="block h-full rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="font-semibold dark:text-white">{item.name}</div>
            <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.help}</span>
          </a>
        {/snippet}
      </MegaMenu>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/services">Products</NavLi>
      <NavLi href="/services">Contact</NavLi>
    </NavUl>
  </Navbar>
</div>

<h2 class="text-2xl">Full width with CTA</h2>
Full width with CTA This example can be used to also show a CTA button or link next to the menu items inside the dropdown.

<div class="border rounded p-4 my-4 h-72">
  <Navbar>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi class="cursor-pointer">
        Company<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
      </NavLi>
      <MegaMenu full items={menu}>
        {#snippet children({ item })}
          <a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500 hover:underline">
            {item.name}
          </a>
        {/snippet}
        {#snippet extra()}
          <h2 class="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
          <p class="mb-2 p-0 text-sm font-light text-gray-500 dark:text-gray-300">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
          <a href="/" class="text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700 inline-flex items-center text-sm font-medium hover:underline">
            Explore our brands
            <span class="sr-only">Explore our brands</span>
            <ArrowRightOutline class="text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700  ms-2 h-6 w-6" />
          </a>
        {/snippet}
      </MegaMenu>
      <NavLi href="/services">Marketplace</NavLi>
      <NavLi href="/services">Resources</NavLi>
      <NavLi href="/services">Contact</NavLi>
    </NavUl>
  </Navbar>
</div>

<h2 class="text-2xl">Fill width with image</h2>
Full width with image This example can be used to also show a CTA with a backdround image inside the dropdown next to the other menu items and links.

<div class="border rounded p-4 my-4 h-72">
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
      <MegaMenu full items={menu3}>
        {#snippet children({ item })}
          <a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500 hover:underline">
            {item.name}
          </a>
        {/snippet}
        {#snippet extra()}
          <a href="/" class="mt-4 block rounded-lg bg-gray-500 bg-cover bg-local bg-center bg-no-repeat p-4 text-left bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" style="background-image: url(/images/dashboard-overview.png)">
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
</div>
