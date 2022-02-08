<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
  import { Navbar } from "$lib/index";
  let menus = [
    {
      name: "Home",
      link: "/",
      rel: "",
    },
    {
      name: "Alerts",
      link: "/alerts",
      rel: "",
    },
    {
      name: "Buttons",
      link: "/buttons",
      rel: "",
    },
    {
      name: "Cards",
      link: "/cards",
      rel: "",
    },
    {
      name: "List Group",
      link: "/list-group",
      rel: "external",
    },
    {
      name: "Modals",
      link: "/modals",
      rel: "external",
    },
    {
      name: "Navbar",
      link: "/navbar",
      rel: "",
    },
    {
      name: "Tabs",
      link: "/tabs",
      rel: "external",
    },
  ];
</script>

<div class="mx-auto p-4">
  <Navbar textsize="lg" />
  <div class="mt-8">
    <slot />
  </div>
</div>
