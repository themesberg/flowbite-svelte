---
layout: buttongroupLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import {ButtonGroup, ButtonGroupOutline, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import {UserCircleOutline, AdjustmentsOutline, CloudDownloadOutline} from "svelte-heros"
  import componentProps from '../props/ButtonGroup.json'
  import componentProps2 from '../props/ButtonGroupOutline.json'
  // Props table
  let items = componentProps.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let buttons1 = [
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
  let buttons2 = [
  {
    name: "Profile",
    href:"/",
    icon: UserCircleOutline,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
  {
    name: "Settings",
    href:"/",
    icon: AdjustmentsOutline,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
  {
    name: "Messages",
    href:"/",
    icon: CloudDownloadOutline,
    iconSize: 18,
    iconClass: "text-blue-700"
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
      label:'Button group default',
      href:'/button-groups/default'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Button Group</h1>

<Htwo label="Set up" />

```html
<script>
  import {ButtonGroup, ButtonGroupOutline} from 'flowbite-svelte'
  import {UserCircleOutline, AdjustmentsOutline, CloudDownloadOutline} from "svelte-heros"
  let buttons1 = [
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
  let buttons2 = [
  {
    name: "Profile",
    href:"/",
    icon: UserCircleOutline,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
  {
    name: "Settings",
    href:"/",
    icon: AdjustmentsOutline,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
  {
    name: "Messages",
    href:"/",
    icon: CloudDownloadOutline,
    iconSize: 18,
    iconClass: "text-blue-700"
  },
];
</script>
```

<Htwo label="Default" />

<ExampleDiv>
<ButtonGroup buttons={buttons1}/>
</ExampleDiv>


```html
<ButtonGroup buttons={buttons1}/>
```

<Htwo label="Default with icon" />

<ExampleDiv>
<ButtonGroup buttons={buttons2}/>
</ExampleDiv>


```html
<ButtonGroup buttons={buttons2}/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<h3>ButtonGroup</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>

<h3>ButtonGroupOutline</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>