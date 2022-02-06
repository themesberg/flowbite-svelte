<script context="module">
</script>

<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
  import { browser } from "$app/env";
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

  if (browser) {
    let themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    let themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    // Change the icons inside the button based on previous settings
    // if (
    //   localStorage.getItem("color-theme") === "dark" ||
    //   (!("color-theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) {
    //   themeToggleLightIcon.classList.remove("hidden");
    // } else {
    //   themeToggleDarkIcon.classList.remove("hidden");
    // }

    let themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }
        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  }
</script>

<svelte:head>
  <script>
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  </script>
</svelte:head>

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
  <button
    id="theme-toggle"
    type="button"
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
  >
    <svg
      id="theme-toggle-dark-icon"
      class="hidden w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      /></svg
    >
    <svg
      id="theme-toggle-light-icon"
      class="hidden w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        fill-rule="evenodd"
        clip-rule="evenodd"
      /></svg
    >
  </button>
  <div class="mt-8 w-full">
    <slot />
  </div>
</div>
