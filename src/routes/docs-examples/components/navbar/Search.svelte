<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Search, ToolbarButton } from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";
  import { fade } from "svelte/transition";
</script>

<Navbar>
  {#snippet children({ hidden, toggle })}
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
