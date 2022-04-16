---
layout: navbarLayout
---

<script>
  import { DropdownNavbar, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/DropdownNavbar.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'


  let menus = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Cards",
      href: "/cards",
      child: [
        {
          name: "Card",
          href: "/cards/card",
        },
        {
          name: "CTA Card",
          href: "/cards/cta",
        },
        {
          name: "Ecommerce Card",
          href: "/cards/ecommerce",
        },
      ],
    },
    {
      name: "Modals",
      href: "/",
      child: [
        {
          name: "Small",
          href: "/modals/small",
        },
        {
          name: "Medium",
          href: "/modals/medium",
        },
      ],
    },
  ];
</script>


<h1 class="text-3xl w-full dark:text-white pt-16" id="Dropdown_Navbar">Dropdown Navbar</h1>

<h2 class="text-2xl w-full dark:text-white py-8" id="Examples">Examples</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <DropdownNavbar textsize="text-lg" {menus} />
</div>

<p class="dark:text-white text-lg py-8">
  You can change textsize prop to text-xs, text-sm, text-base, text-lg or text-xl.
</p>

<h1 class="text-3xl w-full dark:text-white py-8" id="Dropdown_Navbar_Setup">Dropdown Navbar Setup</h1>

```html
<script>
  import { DropdownNavbar } from "flowbite-svelte";
  let sitename = "Flowbite Svelte";
  let logo = "/images/flowbite-svelte-logo-30.png";
  let alt = "flowbite-svelte";
  let textsize = "text-lg";
  let menus = [
    {
      name: "Home",
      href: "/",
      rel: "",
    },
    {
      name: "Cards",
      href: "/cards",
      rel: "",
      child: [
        {
          name: "Card",
          href: "/cards/card",
          rel: "",
        },
        {
          name: "CTA Card",
          href: "/cards/cta",
          rel: "",
        },
        {
          name: "Ecommerce Card",
          href: "/cards/ecommerce",
          rel: "",
        },
      ],
    },
    {
      name: "Modals",
      href: "/",
      rel: "",
      child: [
        {
          name: "Small",
          href: "/modals/small",
          rel: "",
        },
        {
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

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>