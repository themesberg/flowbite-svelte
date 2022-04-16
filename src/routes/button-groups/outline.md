---
layout: buttongroupLayout
---

<script>
  import { ButtonGroupOutline, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import {UserCircleIconSolid, AdjustmentsIconSolid, CloudDownloadIconSolid} from "@codewithshin/svelte-heroicons"
  
  import componentProps from '../props/ButtonGroupOutline.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'


  let buttons1 = [
  {
    name: "Profile",
    href:"/",
    icon: UserCircleIconSolid
  },
  {
    name: "Settings",
    href:"/",
    icon: AdjustmentsIconSolid
  },
  {
    name: "Messages",
    href:"/",
    icon: CloudDownloadIconSolid
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

<h1 class="text-3xl w-full dark:text-white py-8">Outline Button Group</h1>

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Setup</h2>

```html
<script>
  import { ButtonGroupOutline} from 'flowbite-svelte'
  import {UserCircleIconSolid, AdjustmentsIconSolid, CloudDownloadIconSolid} from "@codewithshin/svelte-heroicons"
  let buttons1 = [
  {
    name: "Profile",
    href:"/",
    icon: UserCircleIconSolid
  },
  {
    name: "Settings",
    href:"/",
    icon: AdjustmentsIconSolid
  },
  {
    name: "Messages",
    href:"/",
    icon: CloudDownloadIconSolid
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

<h2 class="text-2xl w-full dark:text-white py-8">Outline default</h2>

<div
  class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ButtonGroupOutline buttons={buttons2}/>
</div>

```html
<ButtonGroupOutline buttons={buttons2}/>
```


<h2 class="text-2xl w-full dark:text-white py-8">Outline with icon</h2>

<div
  class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  
<ButtonGroupOutline buttons={buttons1}/>
</div>

```html
<ButtonGroupOutline buttons={buttons1}/>
```


<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
