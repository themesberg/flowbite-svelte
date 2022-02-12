<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
  import { Navbar, DarkMode } from "$lib/index";
  export let menus = [
    {
      name: "Home",
      link: "/",
      rel: undefined,
    },
    {
      name: "Accordion",
      link: "/accordions",
      rel: undefined,
    },
    {
      name: "Alerts",
      link: "/alerts",
      rel: undefined,
    },
    {
      name: "Buttons",
      link: "/buttons",
      rel: undefined,
    },
    {
      name: "Cards",
      link: "/cards",
      rel: undefined,
    },
    {
      name: "Dropdown",
      link: "/dropdowns",
      rel: undefined,
    },
    {
      name: "List Group",
      link: "/list-group",
      rel: undefined,
    },
    {
      name: "Modals",
      link: "/modals",
      rel: undefined,
    },
    {
      name: "Navbar",
      link: "/navbar",
      rel: undefined,
    },
    {
      name: "Tabs",
      link: "/tabs",
      rel: undefined,
    },
  ];
</script>

<div class="mx-auto p-4">
  <DarkMode />
  <Navbar textsize="lg" {menus} />
  <div class="mt-8">
    <slot />
  </div>
</div>
