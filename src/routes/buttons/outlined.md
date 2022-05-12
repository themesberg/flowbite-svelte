---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Button , Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Button.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Buttons',
      href:'/buttons/'
    },
    {
      label:'Outline button',
      href:'/buttons/outlined'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Outlined Buttons</h1>

```js
import { Button } from "flowbite-svelte";
```

<Htwo label="Size xs" />

<ExampleDiv>
  <Button name="Button text-xs" textSize="text-xs" btnColor="blue-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="dark-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="green-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="purple-outline" />
</ExampleDiv>

```html
<Button name="Button text-xs" textSize="text-xs" btnColor="blue-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="dark-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="green-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="purple-outline" />
```

<Htwo label="Size sm" />

<ExampleDiv>
  <Button name="Button" btnColor="blue-outline" />
  <Button name="Button" btnColor="dark-outline" />
  <Button name="Button" btnColor="green-outline" />
  <Button name="Button" btnColor="red-outline" />
  <Button name="Button" btnColor="red-outline" />
  <Button name="Button" btnColor="purple-outline" />
</ExampleDiv>

```html
<Button name="Button" btnColor="blue-outline" />
<Button name="Button" btnColor="dark-outline" />
<Button name="Button" btnColor="green-outline" />
<Button name="Button" btnColor="red-outline" />
<Button name="Button" btnColor="red-outline" />
<Button name="Button" btnColor="purple-outline" />
```

<Htwo label="Size base" />

<ExampleDiv>
<Button name="Button" textSize="text-base" btnColor="blue-outline" />
<Button name="Button" textSize="text-base" btnColor="dark-outline" />
<Button name="Button" textSize="text-base" btnColor="green-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="purple-outline" />
</ExampleDiv>

```html
<Button name="Button" textSize="text-base" btnColor="blue-outline" />
<Button name="Button" textSize="text-base" btnColor="dark-outline" />
<Button name="Button" textSize="text-base" btnColor="green-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="purple-outline" />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>


<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>