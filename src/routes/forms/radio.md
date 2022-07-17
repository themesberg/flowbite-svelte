---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Radio, Breadcrumb, BreadcrumbItem, Helper } from "$lib/index"
  import { Home } from 'svelte-heros'
  import componentProps from '../props/Radio.json'
  import componentProps2 from '../props/Label.json'
  import componentProps3 from '../props/Helper.json'
  let items = componentProps.props
  let items2 = componentProps2.props
  let items3 = componentProps3.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let colors = 'green';
  let technology = 'svelte';
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms">Forms</BreadcrumbItem>
  <BreadcrumbItem>Radio</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Radio Components</h1>

The radio component can be used to allow the user to choose a single option from one or more available options coded with the utility classes from Tailwind CSS and available in multiple styles, variants, and colors and support dark mode.

<Htwo label="Radio examples" />

<ExampleDiv>
<Radio name="example" class="mb-4">Default radio</Radio>
<Radio name="example" checked={true}>Checked state</Radio>
</ExampleDiv>

```html
<script>
	import { Radio, Label, Helper } from 'flowbite-svelte';
</script>

<Radio name="example" class="mb-4">Default radio</Radio>
<Radio name="example" checked>Checked state</Radio>
```

<Htwo label="Disabled state" />

Apply the `disabled` attribute to the radio component to disallow the selection for the user.

<p>This example can be used for the disabled state of the radio component by applying the disabled attribute to the input element.</p>

<ExampleDiv>
<Radio name="disabled-state" disabled class="mb-4">Disabled radio</Radio>
<Radio name="disabled-state" disabled checked >Disabled radio</Radio>
</ExampleDiv>

```html
<Radio name="disabled-state" disabled class="mb-4">Disabled radio</Radio>
<Radio name="disabled-state" disabled checked>Disabled radio</Radio>
```

<Htwo label="Radio with a link" />

<p>Use this example if you want to add an anchor link inside the label of the radio component.</p>

<ExampleDiv>
<Radio name="with-link">I agree with the <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline ml-1">terms and conditions</a>.</Radio>
</ExampleDiv>

```html
<Radio name="with-link">
	I agree with the
	<a href="/" class="text-blue-600 dark:text-blue-500 hover:underline ml-1">terms and conditions</a>.
</Radio>
```

<Htwo label="Helper text" />
<p>Get started with this example if you want to add a secondary helper text for the radio component.</p>

<ExampleDiv>
  <Radio aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Radio>
  <Helper id="helper-checkbox-text" class="ml-6">For orders shipped from $25 in books or $29 in other categories</Helper>
</ExampleDiv>

```html
  <Radio aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Radio>
  <Helper id="helper-checkbox-text" class="ml-6">For orders shipped from $25 in books or $29 in other categories</Helper>
```

<Htwo label="Bordered" />

Use this example of a radio inside a card element to enable a larger area of clicking activation.

<ExampleDiv>
<div class="grid grid-cols-2 gap-6">
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" class="w-full p-4">Default radio</Radio>
  </div>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" checked class="w-full p-4">Checked state</Radio>
  </div>
</div>
</ExampleDiv>

```html
<div class="rounded border border-gray-200 dark:border-gray-700">
	<Radio name="bordered" class="w-full p-4">Default radio</Radio>
</div>
<div class="rounded border border-gray-200 dark:border-gray-700">
	<Radio name="bordered" checked class="w-full p-4">Checked state</Radio>
</div>
```

<Htwo label="Radio list group" />

Use this example to show a list of radio items grouped inside a card.

<ExampleDiv>
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology <span class="capitalize">{technology}</span></p>
<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
    <li><Radio class="p-3" bind:group={technology} value="svelte">Svelte</Radio></li>
    <li><Radio class="p-3" bind:group={technology} value="vue js">Vue JS</Radio></li>
    <li><Radio class="p-3" bind:group={technology} value="react">React</Radio></li>
    <li><Radio class="p-3" bind:group={technology} value="angular">Angular</Radio></li>
</ul>
</ExampleDiv>

```html
<script>
  let technology = 'svelte';
</script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology <span class="capitalize">{technology}</span></p>
<ul	class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
	<li><Radio class="p-3" bind:group={technology} value="svelte">svelte</Radio></li>
	<li><Radio class="p-3" bind:group={technology} value="vue js">Vue JS</Radio></li>
	<li><Radio class="p-3" bind:group={technology} value="react">React</Radio></li>
	<li><Radio class="p-3" bind:group={technology} value="angular">Angular</Radio></li>
</ul>
```

<Htwo label="Horizontal list group" />

Use this example to show a list of radio items inside a card horizontally.

<ExampleDiv>
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
    <li class="w-full"><Radio name="hor-list" class="p-3">Svelte</Radio></li>
    <li class="w-full"><Radio name="hor-list" class="p-3">Vue JS</Radio></li>
    <li class="w-full"><Radio name="hor-list" class="p-3">React</Radio></li>
    <li class="w-full"><Radio name="hor-list" class="p-3">Angular</Radio></li>
</ul>
</ExampleDiv>

```html
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
	<li class="w-full"><Radio name="hor-list" class="p-3">Svelte</Radio></li>
	<li class="w-full"><Radio name="hor-list" class="p-3">Vue JS</Radio></li>
	<li class="w-full"><Radio name="hor-list" class="p-3">React</Radio></li>
	<li class="w-full"><Radio name="hor-list" class="p-3">Angular</Radio></li>
</ul>
```

<!--
<Htwo label="Radio dropdown" />

Use this example to show a list of radio items inside a dropdown menu.

<ExampleDiv>
To do.
</ExampleDiv>
-->

<Htwo label="Inline layout" />

You can align the radio elements horizontally by using a wrapper tag and applying the flex class.

<ExampleDiv>
	<div class="flex gap-3">
		<Radio name="inline1">Inline 1</Radio>
		<Radio name="inline1">Inline 2</Radio>
		<Radio name="inline1" checked>Inline checked</Radio>
		<Radio name="inline1" disabled>Inline disabled</Radio>
	</div>
</ExampleDiv>

You can use the property `inline` as the alternative.

<ExampleDiv>
	<Radio name="inline2" inline class="mr-2">Inline 1</Radio>
	<Radio name="inline2" inline class="mr-2">Inline 2</Radio>
	<Radio name="inline2" inline class="mr-2" checked>Inline checked</Radio>
	<Radio name="inline2" inline class="mr-2" disabled>Inline disabled</Radio>
</ExampleDiv>

```html
<div class="flex gap-3">
	<Radio name="inline1">Inline 1</Radio>
	<Radio name="inline1">Inline 2</Radio>
	<Radio name="inline1" checked>Inline checked</Radio>
	<Radio name="inline1" disabled>Inline disabled</Radio>
</div>

<Radio name="inline2" inline class="mr-2">Inline 1</Radio>
<Radio name="inline2" inline class="mr-2">Inline 2</Radio>
<Radio name="inline2" inline class="mr-2" checked>Inline checked</Radio>
<Radio name="inline2" inline class="mr-2" disabled>Inline disabled</Radio>
```

<Htwo label="Colors" />

<ExampleDiv>
<p class="mb-4 font-semibold text-gray-900 dark:text-white {colors}">Select color</p>
<div class="flex gap-4">
  <Radio bind:group={colors} color='red' value='text-red-500' >Red</Radio>
  <Radio bind:group={colors} color='green' value='text-green-500' >Green</Radio>
  <Radio bind:group={colors} color='purple' value='text-purple-500' >Purple</Radio>
  <Radio bind:group={colors} color='teal' value='text-teal-500' >Teal</Radio>
  <Radio bind:group={colors} color='yellow' value='text-yellow-500' >Yellow</Radio>
  <Radio bind:group={colors} color='orange' value='text-orange-500' >Orange</Radio>
</div>
</ExampleDiv>

```html
<script>
  let colors;
</script>
<p class="mb-4 font-semibold text-gray-900 dark:text-white {colors}">Select color</p>
<div class="flex">
	<Radio bind:group={colors} color="red">Red</Radio>
	<Radio bind:group={colors} color="green">Green</Radio>
	<Radio bind:group={colors} color="purple">Purple</Radio>
	<Radio bind:group={colors} color="teal">Teal</Radio>
	<Radio bind:group={colors} color="yellow">Yellow</Radio>
	<Radio bind:group={colors} color="orange">Orange</Radio>
</div>
```

<Htwo label="Advanced layout" />

Use this example of an advanced layout of radio elements where the label parent element can be styled when the radio is checked.

<ExampleDiv>
  <p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
  <div class="grid gap-6 w-full md:grid-cols-2">
    <Radio name="custom" custom>
      <div class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div>
          <div class="w-full text-lg font-semibold">0-50 MB</div>
          <div class="w-full">Good for small websites</div>
        </div>
        <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </div>
    </Radio>
    <Radio name="custom" custom>
      <div for="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div class="block">
            <div class="w-full text-lg font-semibold">500-1000 MB</div>
            <div class="w-full">Good for large websites</div>
          </div>
          <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </div>
    </Radio>
  </div>
</ExampleDiv>

```html
<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
<div class="grid gap-6 w-full md:grid-cols-2">
  <Radio name="custom" custom>
    <div class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div>
        <div class="w-full text-lg font-semibold">0-50 MB</div>
        <div class="w-full">Good for small websites</div>
      </div>
      <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </div>
  </Radio>
  <Radio name="custom" custom>
    <div for="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="block">
          <div class="w-full text-lg font-semibold">500-1000 MB</div>
          <div class="w-full">Good for large websites</div>
        </div>
        <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </div>
  </Radio>
</div>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types
page</a> for type information.

All attributes of the `input` element like: name, id, autofocus, etc, can be set directly as component props.

<h3>Radio</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow items={items} rowState='hover' />
</TableProp>

<h3>Helper</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow items={items3} rowState='hover' />
</TableProp>