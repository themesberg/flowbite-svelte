<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider, Search, ToolbarButton, Button, Avatar, DropdownHeader, DropdownGroup, ImagePlaceholder, Skeleton, TextPlaceholder } from "$lib";
  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";
  import { fade } from "svelte/transition";
  import { page } from "$app/state";

  let activeUrl = $derived(page.url.pathname);
  let activeClass = "text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent";
  let nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
</script>

<h1 class="my-4 text-3xl">Navbar</h1>

<h2 class="my-4 text-2xl">Default navbar</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
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
</div>

<h2 class="my-4 text-2xl">Active class</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Navbar>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/docs/components/accordion">Accordion</NavLi>
      <NavLi href="/docs/components/alert">Alert</NavLi>
      <NavLi href="/docs/components/avatar">Avatar</NavLi>
    </NavUl>
  </Navbar>
</div>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Navbar>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl} {activeClass} {nonActiveClass}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/docs/components/accordion">Accordion</NavLi>
      <NavLi href="/docs/components/alert">Alert</NavLi>
      <NavLi href="/docs/components/avatar">Avatar</NavLi>
    </NavUl>
  </Navbar>
</div>

<h2 class="my-4 text-2xl">Navbar with dropdown</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Navbar>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
      <NavLi href="/">Home</NavLi>
      <NavLi class="cursor-pointer">
        Dropdown<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
      </NavLi>
      <Dropdown simple class="w-44">
        <DropdownItem href="/">Dashboard</DropdownItem>
        <DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
        <DropdownItem href="/">Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/">Sign out</DropdownItem>
      </Dropdown>
      <NavLi href="/settings">Setting</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
</div>

<h2 class="my-4 text-2xl">Navbar with search</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Navbar>
    {#snippet children({ hidden, toggle, NavContainer })}
      <NavBrand href="/">
        <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </NavBrand>
      <div class="flex md:order-2">
        <ToolbarButton class="block md:hidden" onclick={toggle}>
          <SearchOutline class="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </ToolbarButton>
        <div class="hidden md:block">
          <Search size="md" class="ms-auto" placeholder="Search..." />
        </div>
        <NavHamburger />
      </div>
      {#if !hidden}
        <div class="mt-2 w-full md:hidden" transition:fade>
          <Search size="md" placeholder="Search..." />
        </div>
      {/if}
      <NavUl>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/docs/components/navbar">Navbar</NavLi>
      </NavUl>
    {/snippet}
  </Navbar>
</div>

<h2 class="my-4 text-2xl">Navbar with CTA button</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Navbar>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <div class="flex md:order-2">
      <Button size="sm">Get started</Button>
      <NavHamburger />
    </div>
    <NavUl class="order-1">
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
</div>

<h2 class="my-4 text-2xl">Sticky navbar</h2>

<div class="h-96 overflow-hidden rounded border border-gray-200 md:h-80 dark:border-gray-600">
  <div class="relative px-8">
    <Navbar class="absolute start-0 top-0 z-20 w-full border-b bg-white px-2 py-2.5 sm:px-4">
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
    <div style="height:300px;" class="overflow-scroll pt-16 pb-16">
      <Skeleton class="mt-16 mb-8" />
      <ImagePlaceholder class="my-8" />
      <TextPlaceholder class="my-8" />
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">User menu dropdown</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Navbar>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <div class="flex items-center md:order-2">
      <Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
      <NavHamburger />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
        <span class="block text-sm">Bonnie Green</span>
        <span class="block truncate text-sm font-medium">name@flowbite.com</span>
      </DropdownHeader>
      <DropdownGroup>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
      </DropdownGroup>
      <DropdownHeader>Sign out</DropdownHeader>
    </Dropdown>
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
</div>

<h2 class="my-4 text-2xl">Solid background</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Navbar class="bg-primary-100 dark:bg-primary-700">
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
</div>
