---
layout: doc
---

<script>
  import { DropdownNavbar }from '$lib/index';

  let menus = [
    {
      id: 1,
      name: "Home",
      href: "/",
      rel: "",
    },
    {
      id: 2,
      name: "Cards",
      href: "/cards",
      rel: "",
      child: [
        {
          id: 3,
          name: "Card",
          href: "/cards/card",
          rel: "",
        },
        {
          id: 4,
          name: "CTA Card",
          href: "/cards/cta",
          rel: "",
        },
        {
          id: 5,
          name: "Ecommerce Card",
          href: "/cards/ecommerce",
          rel: "",
        },
      ],
    },
    {
      id: 6,
      name: "Modals",
      href: "/",
      rel: "",
      child: [
        {
          id: 7,
          name: "Small",
          href: "/modals/small",
          rel: "",
        },
        {
          id: 8,
          name: "Medium",
          href: "/modals/medium",
          rel: "",
        },
      ],
    },
  ];
</script>



<h1 class="text-3xl w-full dark:text-white py-8">Dropdown Navbar</h1>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <DropdownNavbar textsize="text-lg" {menus} />
</div>

<p class="dark:text-white text-lg py-8">
  You can change textsize prop to text-xs, text-sm, text-base, text-lg or text-xl.
</p>

<h1 class="text-3xl w-full dark:text-white py-8">Dropdown Navbar Setup</h1>

```svelte
<script>
  import { DropdownNavbar } from "flowbite-svelte";
  let sitename = "Flowbite Svelte";
  let logo = "/images/mkdir-logo.webp";
  let alt = "flowbite-svelte";
  let textsize = "text-lg";
  let menus = [
    {
      id: 1,
      name: "Home",
      href: "/",
      rel: "",
    },
    {
      id: 2,
      name: "Cards",
      href: "/cards",
      rel: "",
      child: [
        {
          id: 3,
          name: "Card",
          href: "/cards/card",
          rel: "",
        },
        {
          id: 4,
          name: "CTA Card",
          href: "/cards/cta",
          rel: "",
        },
        {
          id: 5,
          name: "Ecommerce Card",
          href: "/cards/ecommerce",
          rel: "",
        },
      ],
    },
    {
      id: 6,
      name: "Modals",
      href: "/",
      rel: "",
      child: [
        {
          id: 7,
          name: "Small",
          href: "/modals/small",
          rel: "",
        },
        {
          id: 8,
          name: "Medium",
          href: "/modals/medium",
          rel: "",
        },
      ],
    },
  ];
</script>

<DropdownNavbar {menus} {sitename} {alt} {logo} {textsize} />
```
