---
layout: dropdownLayout
---

<script>
  import { Dropdown, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/DropdownDefault.json'
  // Props table
  export let dropdownItems = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']
  
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
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

<h2 class="text-2xl w-full dark:text-white py-4"><a id="Default_Dropdown">Examples</a></h2>

<p>* Adding a dropdown id is recommended.</p>

<div class="container flex justify-center rounded-xl my-4 mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Dropdown {items} label="Dropdown button" id="drop1"/>
</div>

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

<h2 class="text-2xl w-full dark:text-white py-4"><a id="Dropdown_divider">Dropdown divider</a></h2>

<div class="container flex justify-center rounded-xl my-4 mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Dropdown items={items2} color="red" label="Dropdown button" id="drop2"/>
</div>

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

<h2 class="text-2xl w-full dark:text-white py-4">Dropdown header</h2>

<div class="container flex justify-center rounded-xl my-4 mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Dropdown {items} color="purple-outline" label="Dropdown button" id="drop3">
<div slot="header">
 <span class="block text-sm">Bonnie Green</span>
    <span class="block text-sm font-medium truncat">name@flowbite.com</span>
</div>
</Dropdown>
</div>


```html
<Dropdown {items} color="purple-outline" label="Dropdown button"  id="drop3">
<div slot="header">
 <span class="block text-sm">Bonnie Green</span>
    <span class="block text-sm font-medium truncat">name@flowbite.com</span>
</div>
</Dropdown>
```


<h2 class="text-2xl w-full dark:text-white py-4"><a id="Props">Props</a></h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={dropdownItems} rowState='hover' />
</Table>