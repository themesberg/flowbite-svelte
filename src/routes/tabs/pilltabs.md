---
layout: tabLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { PillTabs, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/PillTabs.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

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

<ExampleDiv>
   <PillTabs {tabs} />
</ExampleDiv>

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

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>