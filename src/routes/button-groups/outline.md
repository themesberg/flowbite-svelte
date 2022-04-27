---
layout: buttongroupLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { ButtonGroupOutline, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import {UserCircleSolid, AdjustmentsSolid, CloudDownloadSolid} from "svelte-heros"
  
  import componentProps from '../props/ButtonGroupOutline.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'


  let buttons1 = [
  {
    name: "Profile",
    href:"/",
    icon: UserCircleSolid,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
  {
    name: "Settings",
    href:"/",
    icon: AdjustmentsSolid,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
  {
    name: "Messages",
    href:"/",
    icon: CloudDownloadSolid,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
];
  let buttons2 = [
  {
    name: "Profile",
  },
  {
    name: "Settings",
  },
  {
    name: "Messages",
  },
];

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Button groups',
      href:'/button-groups/'
    },
    {
      label:'Button group outline',
      href:'/button-groups/outline'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Outline Button Group</h1>

<Htwo label="Set up" />


```html
<script>
  import { ButtonGroupOutline} from 'flowbite-svelte'
  import {UserCircleSolid, AdjustmentsSolid, CloudDownloadSolid} from "svelte-heros"
  let buttons1 = [
  {
    name: "Profile",
    href:"/",
    icon: UserCircleSolid,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
  {
    name: "Settings",
    href:"/",
    icon: AdjustmentsSolid,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
  {
    name: "Messages",
    href:"/",
    icon: CloudDownloadSolid,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
];
  let buttons2 = [
  {
    name: "Profile",
  },
  {
    name: "Settings",
  },
  {
    name: "Messages",
  },
];
</script>
```

<Htwo label="OUtline default" />


<div
  class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ButtonGroupOutline buttons={buttons2}/>
</div>

```html
<ButtonGroupOutline buttons={buttons2}/>
```

<Htwo label="Outline with icon" />

<div
  class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  
<ButtonGroupOutline buttons={buttons1}/>
</div>

```html
<ButtonGroupOutline buttons={buttons1}/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
