---
layout: buttongroupLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import {ButtonGroup, ButtonGroupItem, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import { UserSolid, AdjustmentsSolid, CloudDownloadSolid } from 'svelte-heros';
  import componentProps from '../props/ButtonGroup.json'
  import componentProps2 from '../props/ButtonGroupItem.json'
  // Props table
  let items = componentProps.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Button groups',
      href:'/button-groups/'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Button group</h1>

<Htwo label="Set up" />

```html
<script>
  	import { ButtonGroup, ButtonGroupItem } from 'flowbite-svelte';
	import { UserSolid, AdjustmentsSolid, CloudDownloadSolid } from 'svelte-heros';
</script>
```

<Htwo label="Default" />

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem>Proflie</ButtonGroupItem>
	<ButtonGroupItem>Settings</ButtonGroupItem>
	<ButtonGroupItem>Messages</ButtonGroupItem>
</ButtonGroup>
</ExampleDiv>


```html
<ButtonGroup>
	<ButtonGroupItem>Proflie</ButtonGroupItem>
	<ButtonGroupItem>Settings</ButtonGroupItem>
	<ButtonGroupItem>Messages</ButtonGroupItem>
</ButtonGroup>
```

<Htwo label="Default with links" />

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem href="/">Proflie</ButtonGroupItem>
	<ButtonGroupItem href="/">Settings</ButtonGroupItem>
	<ButtonGroupItem href="/">Messages</ButtonGroupItem>
</ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<ButtonGroupItem href="/">Proflie</ButtonGroupItem>
	<ButtonGroupItem href="/">Settings</ButtonGroupItem>
	<ButtonGroupItem href="/">Messages</ButtonGroupItem>
</ButtonGroup>
```

<Htwo label="Default with icon" />

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem>
		<UserSolid size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem>
		<AdjustmentsSolid size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem>
		<CloudDownloadSolid size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>
</ExampleDiv>


```html
<ButtonGroup>
	<ButtonGroupItem>
		<UserSolid size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem>
		<AdjustmentsSolid size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem>
		<CloudDownloadSolid size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>
```

<Htwo label="Outline" />

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem outline>Proflie</ButtonGroupItem>
	<ButtonGroupItem outline>Settings</ButtonGroupItem>
	<ButtonGroupItem outline>Messages</ButtonGroupItem>
</ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<ButtonGroupItem outline>Proflie</ButtonGroupItem>
	<ButtonGroupItem outline>Settings</ButtonGroupItem>
	<ButtonGroupItem outline>Messages</ButtonGroupItem>
</ButtonGroup>
```

<Htwo label="Outline with icon" />

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem outline>
		<UserSolid size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<AdjustmentsSolid size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<CloudDownloadSolid size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<ButtonGroupItem outline>
		<UserSolid size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<AdjustmentsSolid size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<CloudDownloadSolid size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>ButtonGroup</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>

<h3>ButtonGroupItem</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>