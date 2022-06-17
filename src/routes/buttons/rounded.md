---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Button, Breadcrumb } from '$lib/index';
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
      label:'Round button',
      href:'/buttons/rounded'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Rounded Buttons</h1>

<Htwo label="Size xs" />

<ExampleDiv>
  <Button name="Button text-xs" textSize="text-xs" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="dark" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="light" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="green" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="red" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="yellow" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="purple" rounded="true" />
</ExampleDiv>

```html
<Button name="Button text-xs" textSize="text-xs" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="dark" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="light" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="green" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="red" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="yellow" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="purple" rounded="true" />
```

<Htwo label="Size sm" />

<ExampleDiv>
  <Button name="Button" textSize="text-sm" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="dark" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="light" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="green" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="red" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="yellow" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="purple" rounded="true" />
</ExampleDiv>

```html
<Button name="Button" textSize="text-sm" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="dark" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="light" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="green" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="red" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="yellow" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="purple" rounded="true" />
```

<Htwo label="Size base" />

<ExampleDiv>
  <Button name="Button" textSize="text-base" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="dark" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="light" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="green" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="red" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="yellow" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="purple" rounded="true" />
</ExampleDiv>

```html
<Button name="Button" textSize="text-base" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="dark" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="light" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="green" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="red" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="yellow" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="purple" rounded="true" />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>


<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>