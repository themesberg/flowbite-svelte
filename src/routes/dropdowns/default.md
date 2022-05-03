---
layout: dropdownLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Dropdown, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/DropdownDefault.json'
  // Props table
  export let dropdownItems = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']
  
 let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let dropdownClass = 'hidden absolute top-12 right-8 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';
  let dropdownClass2 = 'hidden absolute top-12 -left-48 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';
  let items = [
    {
      href: "/",
      name: "Dashboard",
    },
    {
      href: "/",
      name: "Settings",
    },
    {
      href: "/",
      name: "Sign out",
    },
  ];
  let items2 = [
    {
      href: "/",
      name: "Dashboard",
    },
    {
      href: "/",
      name: "Settings",
      divider: true
    },
    {
      href: "/",
      name: "Sign out",
    },
  ];

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Dropdown',
      href:'/dropdowns/'
    },
    {
      label:'Dropdown default',
      href:'/dropdowns/default'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Dropdown</h1>

<Htwo label="Examples" />

<p>* Adding a dropdown id is recommended.</p>

<ExampleDiv>
<Dropdown {items} label="Dropdown button" id="drop1"/>
</ExampleDiv>

```html
<script>
  import { Dropdown } from 'flowbite-svelte';
  let items = [
    {
      href: "/",
      name: "Dashboard",
    },
    {
      href: "/",
      name: "Settings",
    },
    {
      href: "/",
      name: "Sign out",
    },
  ];
</script>

<Dropdown {items} label="Dropdown button" id="drop1"/>
```

<Htwo label="Dropdown divider" />

<ExampleDiv>
<Dropdown items={items2} color="red" label="Dropdown button" id="drop2"/>
</ExampleDiv>

```html
<script>
  import { Dropdown }from 'flowbite-svelte';
  let items = [
    {
      href: "/",
      name: "Dashboard",
    },
    {
      href: "/",
      name: "Settings",
      divider: true
    },
    {
      href: "/",
      name: "Sign out",
    },
  ];
</script>

<Dropdown {items} color="red" label="Dropdown button" id="drop1"/>
```

<Htwo label="Dropdown header" />

<ExampleDiv>
<Dropdown {items} color="purple-outline" label="Dropdown button" id="drop3">
<div slot="header">
 <span class="block text-sm">Bonnie Green</span>
    <span class="block text-sm font-medium truncat">name@flowbite.com</span>
</div>
</Dropdown>
</ExampleDiv>


```html
<Dropdown {items} color="purple-outline" label="Dropdown button"  id="drop3">
<div slot="header">
 <span class="block text-sm">Bonnie Green</span>
    <span class="block text-sm font-medium truncat">name@flowbite.com</span>
</div>
</Dropdown>
```


<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={dropdownItems} rowState='hover' />
</Table>