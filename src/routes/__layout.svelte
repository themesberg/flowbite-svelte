<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
  import { Navbar, DarkMode } from "$lib/index";
  import Darkmode from "$lib/darkmode/DarkMode.svelte";
  let menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Alerts",
      link: "/alerts",
    },
    {
      name: "Buttons",
      link: "/buttons",
    },
    {
      name: "Cards",
      link: "/cards",
    },
    {
      name: "List Group",
      link: "/list-group",
    },
    {
      name: "Modals",
      link: "/modals",
    },
    {
      name: "Navbar",
      link: "/navbar",
    },
    {
      name: "Tabs",
      link: "/tabs",
    },
  ];
</script>

<div class="mx-auto p-4">
  <Darkmode />
  <Navbar textsize="lg" />
  <div class="mt-8">
    <slot />
  </div>
</div>
