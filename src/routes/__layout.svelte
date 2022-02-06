<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
  import { onMount } from "svelte";
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
    list_group,
    modals,
    navbar,
    tabs,
  } from "./items.js";

  let asideClass =
    "absolute w-auto bg-white pt-8 shadow-lg z-50 px-4 h-full bg-white dark:bg-gray-800";
  let headerClass =
    "px-8 bg-white h-14 pt-3 text-gray-600 border-b-2 bg-white dark:bg-gray-800 dark:text-white";
  let siteName = "Svelte Flow";
  let navClass =
    "py-0 px-8 bg-white text-sm bg-white dark:bg-gray-800 dark:text-white";
  let navDivClass = "pb-4";
  let navDivClasslast = "pb-24";
  let siteClass = "w-10/12 pt-1 pl-8";
  let siteText = "text-lg";
  let topli = "text-base";

  // let mode;

  // const toggleTheme = () => {
  //   // console.log("clicked theme icon");
  //   if (localStorage.getItem("color-theme") === "dark") {
  //     console.log("it's dark");
  //     mode = "dark";
  //     window.document.documentElement.classList.remove("dark");
  //     window.document.documentElement.classList.add("light");
  //     localStorage.setItem("color-theme", "light");
  //   } else {
  //     console.log("it's light");
  //     mode = "light";
  //     window.document.documentElement.classList.remove("light");
  //     window.document.documentElement.classList.add("dark");
  //     localStorage.setItem("color-theme", "dark");
  //   }
  // };

  // onMount(() => {
  //   let themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  //   let themeToggleLightIcon = document.getElementById(
  //     "theme-toggle-light-icon"
  //   );
  //   if (
  //     localStorage.getItem("color-theme") === "dark" ||
  //     (!("color-theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //     themeToggleDarkIcon.classList.add("hidden");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     themeToggleLightIcon.classList.add("hidden");
  //   }
  // });
</script>

<div class="z-50 w-full h-9">
  <Navbar {siteName} {headerClass} {topMenus} {siteClass} {siteText} {topli} />
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
</div>
<div class="mx-auto px-4 pt-4">
  <Darkmode />
  <div class="mt-8 w-full">
    <slot />
  </div>
</div>
