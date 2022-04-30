---
layout: buttongroupLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { ButtonGroupOutline, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import {UserCircleSolid, AdjustmentsSolid, CloudDownloadSolid} from "svelte-heros"
  
  import componentProps from '../props/ButtonGroupOutline.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'


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


<ExampleDiv>
  <ButtonGroupOutline buttons={buttons2}/>
</ExampleDiv>

```html
<ButtonGroupOutline buttons={buttons2}/>
```

<Htwo label="Outline with icon" />

<ExampleDiv>
<ButtonGroupOutline buttons={buttons1}/>
</ExampleDiv>

```html
<ButtonGroupOutline buttons={buttons1}/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
