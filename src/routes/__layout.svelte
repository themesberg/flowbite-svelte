<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
  import { Darkmode } from "$lib/index";
  import {
    Aside,
    Nav,
    SidebarList,
    Navbar,
  } from "@codewithshin/svelte-sidebar";

  import {
    svelteflows,
    topMenus,
    alerts,
    buttons,
    cards,
    darkmode,
    list_group,
    modals,
    navbar,
    tabs,
  } from "./items.js";

  let asideClass =
    "absolute w-auto bg-white pt-8 shadow-lg z-50 px-4 h-full bg-white dark:bg-gray-800";
  let headerClass =
    "px-8 bg-white h-14 pt-3 text-gray-600 border-b-2 bg-white dark:bg-gray-800 dark:text-white dark:border-b-1";
  let siteName = "Svelte Flow";
  let navClass =
    "py-0 px-8 bg-white text-sm bg-white dark:bg-gray-800 dark:text-white";
  let navDivClass = "pb-4";
  let navDivClasslast = "pb-24";
  let siteClass = "w-10/12 pt-1 pl-8 sm:w-1/2";
  let siteText = "text-lg";
  let topli =
    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700 text-lg z-50 bg-white dark:bg-gray-800";
  let topul =
    "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 dark:bg-gray-800";
  let topMenuDiv =
    "container flex flex-wrap flex-end justify-between items-center mx-auto dark:bg-gray-700";
</script>

<Navbar
  {siteName}
  {headerClass}
  {topMenus}
  {siteClass}
  {siteText}
  {topMenuDiv}
  {topul}
  {topli}
/>
<Aside {asideClass}>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4"><a href="/" rel="external">Svelte-Flow</a></h3>
    {#each svelteflows as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">Alerts</h3>
    {#each alerts as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">Buttons</h3>
    {#each buttons as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">Cards</h3>
    {#each cards as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">Dark mode</h3>
    {#each darkmode as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">List group</h3>
    {#each list_group as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">Modals</h3>
    {#each modals as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
  <Nav {navClass} {navDivClass}>
    <h3 class="text-base pb-4">Navbar</h3>
    {#each navbar as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
  <Nav {navClass} navDivClass={navDivClasslast}>
    <h3 class="text-base pb-4">Tabs</h3>
    {#each tabs as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
</Aside>

<main class="container mx-auto px-4 pt-4">
  <Darkmode />
  <div class="mt-8 w-full">
    <slot />
  </div>
</main>
