---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Checkbox, Label, Helper ,Breadcrumb } from "$lib/index"
  import componentProps from '../props/Checkbox.json'
  import componentProps2 from '../props/Label.json'
  import componentProps3 from '../props/Helper.json'
  let items = componentProps.props
  let items2 = componentProps2.props
  let items3 = componentProps3.props

let propHeader = ['Name', 'Type', 'Default']
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Forms',
      href:'/forms/'
    },
    {
      label:'Checkbox',
      href:'/forms/checkbox'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Checkbox Components</h1>

<Htwo label="Examples" />

<ExampleDiv>
<div class="flex items-center mb-4">
<Checkbox id='default-checkbox' value='' />
<Label for='default-checkbox' class='ml-2'>Default checkbox</Label>
</div>
<div class="flex items-center mb-4">
<Checkbox checked id='checked-checkbox' value='' />
<Label for='checked-checkbox' class='ml-2'>Checked state</Label>
</div>
</ExampleDiv>

```html
<script>
import { Checkbox, Label, Helper } from 'flowbite-svelte'
</script>

<div class="flex items-center mb-4">
<Checkbox id='default-checkbox' value='' />
<Label for='default-checkbox' class='ml-2'>Default checkbox</Label>
</div>
<div class="flex items-center mb-4">
<Checkbox checked id='checked-checkbox' value='' />
<Label for='checked-checkbox' class='ml-2'>Checked state</Label>
</div>
```

<Htwo label="Disabled state" />

<ExampleDiv>
<div class="flex items-center mb-4">
<Checkbox disabled id='disabled-checkbox' value='' />
<Label color='disabled' for='disabled-checkbox' class='ml-2'>Disabled checkbox</Label>
</div>
<div class="flex items-center mb-4">
<Checkbox disabled checked id='disabled-checked-checkbox' value='' />
<Label color='disabled' for='disabled-checked-checkbox' class='ml-2'>Disabled checked</Label>
</div>
</ExampleDiv>

```html
<div class="flex items-center mb-4">
<Checkbox disabled id='disabled-checkbox' value='' />
<Label color='disabled' for='disabled-checkbox' class='ml-2'>Disabled checkbox</Label>
</div>
<div class="flex items-center mb-4">
<Checkbox disabled checked id='disabled-checked-checkbox' value='' />
<Label color='disabled' for='disabled-checked-checkbox' class='ml-2'>Disabled checked</Label>
</div>
```

<Htwo label="Checkbox with a link" />

<ExampleDiv>
<div class="flex items-center mb-4">
<Checkbox id='link-checkbox' value='' />
<Label for='link-checkbox' class='ml-2'>I agree with the <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</Label>
</div>
</ExampleDiv>

```html
<div class="flex items-center mb-4">
<Checkbox id='link-checkbox' value='' />
<Label for='link-checkbox' class='ml-2'>I agree with the <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</Label>
</div>
```

<Htwo label="Helper text" />

<ExampleDiv>
<div class="flex">
  <div class="flex items-center h-5">
    <Checkbox id='helper-checkbox' aria-describedby="helper-checkbox-text" value='' />
  </div>
  <div class="ml-2 text-sm">
    <Label for='helper-checkbox'>Free shipping via Flowbite</Label>
    <Helper>For orders shipped from $25 in books or $29 in other categories</Helper>
  </div>
</div>
</ExampleDiv>

```html
<div class="flex">
  <div class="flex items-center h-5">
    <Checkbox id='helper-checkbox' aria-describedby="helper-checkbox-text" value='' />
  </div>
  <div class="ml-2 text-sm">
    <Label for='helper-checkbox'>Free shipping via Flowbite</Label>
    <Helper>For orders shipped from $25 in books or $29 in other categories</Helper>
  </div>
</div>
```

<Htwo label="Inline" />

<ExampleDiv>
<div class="flex">
  <div class="flex items-center mr-4">
    <Checkbox id='inline-checkbox' value='' />
    <Label for='inline-checkbox' class='ml-2'>Inline 1</Label>
  </div>
  <div class="flex items-center mr-4">
    <Checkbox id='inline-2-checkbox' value='' />
    <Label for='inline-2-checkbox' class='ml-2'>Inline 2</Label>
  </div>
  <div class="flex items-center mr-4">
    <Checkbox checked id='inline-checked-checkbox' value='' />
    <Label for='inline-checked-checkbox' class='ml-2'>Inline checked</Label>
  </div>
  <div class="flex items-center mr-4">
    <Checkbox disabled id='inline-disabled-checkbox' value='' />
    <Label color='disabled' for='inline-disabled-checkbox' class='ml-2'>Inline disabled</Label>
  </div>
</div>
</ExampleDiv>

```html
<div class="flex">
  <div class="flex items-center mr-4">
    <Checkbox id='inline-checkbox' value='' />
    <Label for='inline-checkbox' class='ml-2'>Inline 1</Label>
  </div>
  <div class="flex items-center mr-4">
    <Checkbox id='inline-2-checkbox' value='' />
    <Label for='inline-2-checkbox' class='ml-2'>Inline 2</Label>
  </div>
  <div class="flex items-center mr-4">
    <Checkbox checked id='inline-checked-checkbox' value='' />
    <Label for='inline-checked-checkbox' class='ml-2'>Inline checked</Label>
  </div>
  <div class="flex items-center mr-4">
    <Checkbox disabled id='inline-disabled-checkbox' value='' />
    <Label color='disabled' for='inline-disabled-checkbox' class='ml-2'>Inline disabled</Label>
  </div>
</div>
```

<Htwo label="Colors" />

<ExampleDiv>
<div class="flex">
  <div class="flex items-center mr-4">
      <Checkbox checked color='red' id="red-checkbox" value="" />
      <Label for='red-checkbox' class='ml-2'>Red</Label>
  </div>
  <div class="flex items-center mr-4">
      <Checkbox checked color='green' id="green-checkbox" value="" />
      <Label for='green-checkbox' class='ml-2'>Green</Label>
  </div>
  <div class="flex items-center mr-4">
      <Checkbox checked color='purple' id="purple-checkbox" value="" />
      <Label for='purple-checkbox' class='ml-2'>Purple</Label>
  </div>
  <div class="flex items-center mr-4">
      <Checkbox checked color='teal' id="teal-checkbox" value="" />
      <Label for='teal-checkbox' class='ml-2'>Teal</Label>
  </div>
  <div class="flex items-center mr-4">
      <Checkbox checked color='yellow' id="yellow-checkbox" value="" />
      <Label for='yellow-checkbox' class='ml-2'>Yellow</Label>
  </div>
  <div class="flex items-center mr-4">
      <Checkbox checked color='orange' id="orange-checkbox" value="" />
      <Label for='orange-checkbox' class='ml-2'>Orange</Label>
  </div>
</div>
</ExampleDiv>

```html
<div class="flex">
  <div class="flex items-center mr-4">
      <Checkbox checked color='red' id="red-checkbox" value="" />
      <Label for='red-checkbox' class='ml-2'>Red</Label>
  </div>
  <div class="flex items-center mr-4">
      <Checkbox checked color='green' id="green-checkbox" value="" />
      <Label for='green-checkbox' class='ml-2'>Green</Label>
  </div>
  <div class="flex items-center mr-4">
      <Checkbox checked color='purple' id="purple-checkbox" value="" />
      <Label for='purple-checkbox' class='ml-2'>Purple</Label>
  </div>
  <div class="flex items-center mr-4">
      <Checkbox checked color='teal' id="teal-checkbox" value="" />
      <Label for='teal-checkbox' class='ml-2'>Teal</Label>
  </div>
  <div class="flex items-center mr-4">
      <Checkbox checked color='yellow' id="yellow-checkbox" value="" />
      <Label for='yellow-checkbox' class='ml-2'>Yellow</Label>
  </div>
  <div class="flex items-center mr-4">
      <Checkbox checked color='orange' id="orange-checkbox" value="" />
      <Label for='orange-checkbox' class='ml-2'>Orange</Label>
  </div>
</div>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Checkbox</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items} rowState='hover' />
</TableProp>

<h3>Label</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3>Helper</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>
