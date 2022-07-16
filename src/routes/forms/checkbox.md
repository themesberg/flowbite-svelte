---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Checkbox, Label, Helper ,Breadcrumb, BreadcrumbItem, Card } from "$lib/index"
  import { Home } from 'svelte-heros'
  import componentProps from '../props/Checkbox.json'
  import componentProps2 from '../props/Label.json'
  import componentProps3 from '../props/Helper.json'
  let items = componentProps.props
  let items2 = componentProps2.props
  let items3 = componentProps3.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms">Forms</BreadcrumbItem>
  <BreadcrumbItem>Checkbox</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Checkbox Components</h1>

<Htwo label="Checkbox examples" />

<ExampleDiv>
<Checkbox  class="mb-4" readonly>Default checkbox</Checkbox>
<Checkbox checked >Checked state</Checkbox>
</ExampleDiv>

```html
<script>
	import { Checkbox, Label, Helper } from 'flowbite-svelte';
</script>

<Checkbox class="mb-4">Default checkbox</Checkbox>
<Checkbox checked>Checked state</Checkbox>
```

<Htwo label="Disabled state" />

<p>This example can be used for the disabled state of the checkbox component by applying the disabled attribute to the input element.</p>

<ExampleDiv>
<Checkbox disabled class="mb-4">Disabled checkbox</Checkbox>
<Checkbox disabled checked >Disabled checkbox</Checkbox>
</ExampleDiv>

```html
<Checkbox disabled class="mb-4">Disabled checkbox</Checkbox>
<Checkbox disabled checked>Disabled checkbox</Checkbox>
```

<Htwo label="Checkbox with a link" />

<p>Use this example if you want to add an anchor link inside the label of the checkbox component.</p>

<ExampleDiv>
<Checkbox>I agree with the <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</Checkbox>
</ExampleDiv>

```html
<Checkbox>
	I agree with the
	<a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.
</Checkbox>
```

<Htwo label="Helper text" />
<p>Get started with this example if you want to add a secondary helper text for the checkbox component.</p>

<ExampleDiv>
  <Checkbox>Free shipping via Flowbite
    <span slot="helper">For orders shipped from $25 in books or $29 in other categories</span>
  </Checkbox>
</ExampleDiv>

```html
<Checkbox
	>Free shipping via Flowbite
	<span slot="helper">For orders shipped from $25 in books or $29 in other categories</span>
</Checkbox>
```

<Htwo label="Bordered" />
<p>Use this example of a checkbox inside a card element to enable a larger area of clicking activation.</p>

<ExampleDiv>
<div class="grid grid-cols-2 gap-6">
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Checkbox class="w-full p-4">Default radio</Checkbox>
  </div>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Checkbox checked class="w-full p-4">Checked state</Checkbox>
  </div>
</div>
</ExampleDiv>

```html
<div class="rounded border border-gray-200 dark:border-gray-700">
	<Checkbox class="w-full p-4">Default radio</Checkbox>
</div>
<div class="rounded border border-gray-200 dark:border-gray-700">
	<Checkbox checked class="w-full p-4">Checked state</Checkbox>
</div>
```

<Htwo label="Checkbox list group" />

Use this example to show a list of checkbox items grouped inside a card.

<ExampleDiv>
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>
<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
    <li><Checkbox class="p-3">Svelte</Checkbox></li>
    <li><Checkbox class="p-3">Vue JS</Checkbox></li>
    <li><Checkbox class="p-3">React</Checkbox></li>
    <li><Checkbox class="p-3">Angular</Checkbox></li>
</ul>
</ExampleDiv>

```html
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>
<ul
	class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600"
>
	<li><Checkbox class="p-3">svelte</Checkbox></li>
	<li><Checkbox class="p-3">Vue JS</Checkbox></li>
	<li><Checkbox class="p-3">React</Checkbox></li>
	<li><Checkbox class="p-3">Angular</Checkbox></li>
</ul>
```

<Htwo label="Horizontal list group" />

Use this example to show a list of checkbox items inside a card horizontally.

<ExampleDiv>
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
    <li class="w-full"><Checkbox class="p-3">Svelte</Checkbox></li>
    <li class="w-full"><Checkbox class="p-3">Vue JS</Checkbox></li>
    <li class="w-full"><Checkbox class="p-3">React</Checkbox></li>
    <li class="w-full"><Checkbox class="p-3">Angular</Checkbox></li>
</ul>
</ExampleDiv>

```html
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul
	class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600"
>
	<li class="w-full"><Checkbox class="p-3">Svelte</Checkbox></li>
	<li class="w-full"><Checkbox class="p-3">Vue JS</Checkbox></li>
	<li class="w-full"><Checkbox class="p-3">React</Checkbox></li>
	<li class="w-full"><Checkbox class="p-3">Angular</Checkbox></li>
</ul>
```

<!--
<Htwo label="Checkbox dropdown" />

Use this example to show a list of checkbox items inside a dropdown menu.

<ExampleDiv>
To do.
</ExampleDiv>
-->

<Htwo label="Inline layout" />

You can align the checkbox elements horizontally by using a wrapper tag and applying the flex class.

<ExampleDiv>
	<div class="flex gap-3">
		<Checkbox>Inline 1</Checkbox>
		<Checkbox>Inline 2</Checkbox>
		<Checkbox checked>Inline checked</Checkbox>
		<Checkbox disabled>Inline disabled</Checkbox>
	</div>
</ExampleDiv>

You can use the property `inline` as the alternative.

<ExampleDiv>
	<Checkbox inline class="mr-2">Inline 1</Checkbox>
	<Checkbox inline class="mr-2">Inline 2</Checkbox>
	<Checkbox inline class="mr-2" checked>Inline checked</Checkbox>
	<Checkbox inline class="mr-2" disabled>Inline disabled</Checkbox>
</ExampleDiv>

```html
<div class="flex gap-3">
	<Checkbox>Inline 1</Checkbox>
	<Checkbox>Inline 2</Checkbox>
	<Checkbox checked>Inline checked</Checkbox>
	<Checkbox disabled>Inline disabled</Checkbox>
</div>

<Checkbox inline class="mr-2">Inline 1</Checkbox>
<Checkbox inline class="mr-2">Inline 2</Checkbox>
<Checkbox inline class="mr-2" checked>Inline checked</Checkbox>
<Checkbox inline class="mr-2" disabled>Inline disabled</Checkbox>
```

<Htwo label="Colors" />

<ExampleDiv>
<div class="flex gap-4">
  <Checkbox checked color='red' >Red</Checkbox>
  <Checkbox checked color='green' >Green</Checkbox>
  <Checkbox checked color='purple' >Purple</Checkbox>
  <Checkbox checked color='teal' >Teal</Checkbox>
  <Checkbox checked color='yellow' >Yellow</Checkbox>
  <Checkbox checked color='orange' >Orange</Checkbox>
</div>
</ExampleDiv>

```html
<div class="flex">
	<Checkbox checked color="red">Red</Checkbox>
	<Checkbox checked color="green">Green</Checkbox>
	<Checkbox checked color="purple">Purple</Checkbox>
	<Checkbox checked color="teal">Teal</Checkbox>
	<Checkbox checked color="yellow">Yellow</Checkbox>
	<Checkbox checked color="orange">Orange</Checkbox>
</div>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types
page</a> for type information.

All attributes of the `input` element like: name, id, autofocus, etc, can be set directly as component props.

<h3>Checkbox</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow items={items} rowState='hover' />
</TableProp>
