---
layout: listgroupLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
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
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

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

<ExampleDiv class="flex justify-center">
 <List {lists} />
</ExampleDiv>


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

<ExampleDiv class="flex justify-center">
  <List lists={lists2} />
</ExampleDiv>

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

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
