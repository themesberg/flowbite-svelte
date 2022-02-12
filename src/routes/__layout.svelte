<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
  import { Navbar, DarkMode } from "$lib/index";
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
  <Navbar textsize="lg" />
  <div class="mt-8">
    <slot />
  </div>
</div>
