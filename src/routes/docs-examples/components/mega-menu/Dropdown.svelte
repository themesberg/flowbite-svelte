<script lang="ts">
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
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
