---
layout: listgroupLayout
---

<script>
  import { List, Table, TableDefaultRow }from '$lib/index';
  import {
    AdjustmentsIconSolid,
    UserCircleIconSolid,
    InboxInIconSolid,
    CloudDownloadIconSolid,
  } from "@codewithshin/svelte-heroicons";
  import componentProps from '../props/List.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
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
      icon: UserCircleIconSolid,
      href: "/",
    },
    {
      name: "Settings",
      icon: AdjustmentsIconSolid,
      href: "/",
    },
    {
      name: "Messages",
      icon: InboxInIconSolid,
      href: "/",
    },
    {
      name: "Download",
      icon: CloudDownloadIconSolid,
      href: "/",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white pt-16">List group</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

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
    AdjustmentsIconSolid,
    UserCircleIconSolid,
    InboxInIconSolid,
    CloudDownloadIconSolid,
  } from "@codewithshin/svelte-heroicons";

  let lists2 = [
    {
      name: "Profile",
      icon: UserCircleIconSolid,
      href: "/",
    },
    {
      name: "Settings",
      icon: AdjustmentsIconSolid,
      href: "/",
    },
    {
      name: "Messages",
      icon: InboxInIconSolid,
      href: "/",
    },
    {
      name: "Download",
      icon: CloudDownloadIconSolid,
      href: "/",
    },
  ];
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
