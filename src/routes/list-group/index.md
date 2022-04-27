---
layout: listgroupLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { List, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import {
    AdjustmentsOutline,
    UserCircleOutline,
    InboxInOutline,
    CloudDownloadOutline,
  } from "svelte-heros";
  import componentProps from '../props/List.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let lists = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Alerts",
      href: "/alert",
    },
    {
      name: "Cards",
      href: "/cards",
    },
    {
      name: "List Group",
      href: "/list-group/list",
    },
    {
      name: "Modals",
      href: "/modals",
    },
    {
      name: "Tabs",
      href: "/tabs",
    },
  ];
  let lists2 = [
    {
      name: "Profile",
      icon: UserCircleOutline,
      iconSize: 18,
      iconClass: "text-blue-500 dark:text-pink-700",
      href: "/",
    },
    {
      name: "Settings",
      icon: AdjustmentsOutline,
      iconSize: 18,
      iconClass: "text-blue-500 dark:text-purple-500",
      href: "/",
    },
    {
      name: "Messages",
      icon: InboxInOutline,
      iconSize: 18,
      iconClass: "text-blue-500 dark:text-green-500",
      href: "/",
    },
    {
      name: "Download",
      icon: CloudDownloadOutline,
      iconSize: 18,
      iconClass: "text-blue-500 dark:text-red-500",
      href: "/",
    },
  ];

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'List group',
      href:'/list-group/'
    }
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">List group</h1>

<Htwo label="Examples" />

<div
  class="container flex flex-wrap space-x-8 justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
 <List {lists} />
</div>


```html
<script>
  import { List } from "flowbite-svelte";

  let lists = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Alerts",
      href: "/alert",
    },
    {
      name: "Cards",
      href: "/cards",
    },
    {
      name: "List Group",
      href: "/list-group/list",
    },
    {
      name: "Modals",
      href: "/modals",
    },
    {
      name: "Tabs",
      href: "/tabs",
    },
  ];
</script>
````

<div
  class="container flex flex-wrap space-x-8 justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <List lists={lists2} />
</div>

```html
<script>
  import { List } from "flowbite-svelte";
  import {
    AdjustmentsOutline,
    UserCircleOutline,
    InboxInOutline,
    CloudDownloadOutline,
  } from "svelte-heros";

  let lists2 = [
    {
      name: "Profile",
      icon: UserCircleOutline,
      iconSize: 18,
      iconClass: "text-blue-500 dark:text-pink-700",
      href: "/",
    },
    {
      name: "Settings",
      icon: AdjustmentsOutline,
      iconSize: 18,
      iconClass: "text-blue-500 dark:text-purple-500",
      href: "/",
    },
    {
      name: "Messages",
      icon: InboxInOutline,
      iconSize: 18,
      iconClass: "text-blue-500 dark:text-green-500",
      href: "/",
    },
    {
      name: "Download",
      icon: CloudDownloadOutline,
      iconSize: 18,
      iconClass: "text-blue-500 dark:text-red-500",
      href: "/",
    },
  ];
</script>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
