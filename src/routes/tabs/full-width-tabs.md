---
layout: tabLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { FullWidthTabs, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import componentProps from '../props/FullWidthTabs.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let tabLabel = 'Select a target'
  let tabs = [
  {
    name: "Profile",
    active: true,
    href: "/",
    rel: undefined,
  },
  {
    name: "Dashboard",
    active: false,
    href: "/",
  },
  {
    name: "Settings",
    active: false,
    href: "/",
  },
  {
    name: "Contacts",
    active: false,
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
      label:'Full-width tabs',
      href:'/tabs/full-width-tabs'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Full Width Tabs</h1>

<Htwo label="Examples" />

<ExampleDiv>
<FullWidthTabs {tabs} {tabLabel} />
</ExampleDiv>

```html
<script>
  import { FullWidthTabs } from 'flowbite-svelte'
  let tabLabel = 'Select a target'
  let tabs = [
  {
    name: "Profile",
    active: true,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Dashboard",
    active: false,
    href: "/",
  },
  {
    name: "Settings",
    active: false,
    href: "/",
  },
  {
    name: "Contacts",
    active: false,
    href: "/",
  },
];
</script>

<FullWidthTabs {tabs} {tabLabel}/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>