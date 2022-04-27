---
layout: tabLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { PillTabs, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/PillTabs.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let tabs = [
    {
      name: "Profile",
      selected: true,
      href: "/",
    },
    {
      name: "Dashboard",
      selected: false,
      href: "/",
    },
    {
      name: "Settings",
      selected: false,
      href: "/",
    },
    {
      name: "Contacts",
      selected: false,
      href: "/",
    },
  ];

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Tabs',
      href:'/tabs/'
    },
    {
      label:'Pill tabs',
      href:'/tabs/pilltabs'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Pill Tabs</h1>

<Htwo label="Examples" />

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
   <PillTabs {tabs} />
</div>

```html
<script>
  import { PillTabs } from "flowbite-svelte";
  let tabs = [
    {
      name: "Profile",
      selected: true,
      href: "/profile",
    },
    {
      name: "Dashboard",
      selected: false,
      href: "/dashboard",
    },
    {
      name: "Settings",
      selected: false,
      href: "/settings",
    },
    {
      name: "Contact",
      selected: false,
      href: "/contact",
    },
  ];
</script>

<PillTabs {tabs} />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>