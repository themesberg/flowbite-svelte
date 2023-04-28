---
layout: componentLayout
title: Svelte Radio - Flowbite
breadcrumb_title: Svelte Radio
component_title: Radio
dir: Forms
description: Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple styles and colors
thumnailSize: w-72
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, A } from '$lib'
  import { props as items } from '../../props/Radio.json'
  import { props as items2 } from '../../props/Label.json'
  import { props as items3 } from '../../props/Helper.json'

  const events = ["on:blur","on:change","on:click","on:focus","on:keydown","on:keypress","on:keyup","on:mouseenter","on:mouseleave","on:mouseover","on:paste"];
</script>



The radio component can be used to allow the user to choose a single option from one or more available options coded with the utility classes from Tailwind CSS and available in multiple styles, variants, and colors and support dark mode.

## Setup

```svelte example hideOutput
<script>
  import { Radio } from 'flowbite-svelte'
</script>
```

## Radio examples

Use the default example of a radio component with the checked and unchecked state.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import { Radio } from 'flowbite-svelte'
</script>

<Radio name="example">Default radio</Radio>
<Radio name="example">Checked state</Radio>
```

## Disabled state

Apply the `disabled` attribute to the radio component to disallow the selection for the user.

This example can be used for the disabled state of the radio component by applying the disabled attribute to the input element.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import { Radio } from 'flowbite-svelte'
</script>

<Radio name="disabled-state" disabled>Disabled radio</Radio>
<Radio name="disabled-state" disabled>Disabled checked</Radio>
```

## Alternative syntax

If you need separate control over the label and the radio you can use the verbose syntax, but then you need to take care about aligning manually.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import { Radio, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow, Label } from 'flowbite-svelte'
</script>

<Table>
  <TableHead>
    <TableHeadCell>Left column</TableHeadCell>
    <TableHeadCell>Right column</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y dark:divide-gray-700">
    <TableBodyRow class="divide-x dark:divide-gray-700">
      <TableBodyCell><Label for="radio1">Default radio</Label></TableBodyCell>
      <TableBodyCell><Label for="radio2">Disabled radio</Label></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow class="divide-x dark:divide-gray-700">
      <TableBodyCell><Radio name="separate" id="radio1" /></TableBodyCell>
      <TableBodyCell><Radio name="separate" id="radio2" disabled/></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

<Label color='red' class="mt-4 flex items-center font-bold italic">
  Label on the other side <Radio name="separate" class="ml-2"/>
</Label>
```

## Radio with a link

Use this example if you want to add an anchor link inside the label of the radio component.

```svelte example hideScript
<script>
  import { Radio } from 'flowbite-svelte'
</script>

<Radio name="with-link">I agree with the <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline ml-1">terms and conditions</a>.</Radio>
```

## Helper text

Get started with this example if you want to add a secondary helper text for the radio component.

```svelte example
<script>
  import { Radio, Helper } from 'flowbite-svelte'
</script>

<Radio aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Radio>
<Helper id="helper-checkbox-text" class="pl-6">For orders shipped from $25 in books or $29 in other categories</Helper>
```

## Bordered

Use this example of a radio inside a card element to enable a larger area of clicking activation.

```svelte example hideScript
<script>
  import { Radio } from 'flowbite-svelte'
</script>

<div class="grid grid-cols-2 gap-6">
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" class="w-full p-4">Default radio</Radio>
  </div>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" class="w-full p-4">Checked state</Radio>
  </div>
</div>
```

## Radio list group

Use this example to show a list of radio items grouped inside a card.

```svelte example hideScript
<script>
  import { Radio } from 'flowbite-svelte'
  let technology = 'svelte';
</script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology <span class="capitalize">{technology}</span></p>
<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
    <li><Radio class="p-3" bind:group={technology} value="svelte">Svelte</Radio></li>
    <li><Radio class="p-3" bind:group={technology} value="vue js">Vue JS</Radio></li>
    <li><Radio class="p-3" bind:group={technology} value="react">React</Radio></li>
    <li><Radio class="p-3" bind:group={technology} value="angular">Angular</Radio></li>
</ul>
```

## Horizontal list group

Use this example to show a list of radio items inside a card horizontally.

```svelte example hideScript
<script>
  import { Radio } from 'flowbite-svelte'
</script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
  <li class="w-full"><Radio name="hor-list" class="p-3">Svelte</Radio></li>
  <li class="w-full"><Radio name="hor-list" class="p-3">Vue JS</Radio></li>
  <li class="w-full"><Radio name="hor-list" class="p-3">React</Radio></li>
  <li class="w-full"><Radio name="hor-list" class="p-3">Angular</Radio></li>
</ul>
```

## Radio in dropdown

Here’s an example of a list group that you can use right away.

```svelte example hideScript class="flex justify-center items-start h-80"
<script>
  import { Radio, Dropdown, Button, Chevron, Helper } from 'flowbite-svelte'
  let group3=2;
</script>

<Button><Chevron>Dropdown radio</Chevron></Button>
<Dropdown class="w-60 p-3 space-y-1">
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>
    <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>
    <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>
    <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
  </li>
</Dropdown>
```

## Inline layout

You can align the radio elements horizontally by using a wrapper tag and applying the flex class.

```svelte example
<script>
  import { Radio } from 'flowbite-svelte'
  let inline1 = 'second';
</script>

<div class="flex gap-3">
  <Radio group={inline1} value="first">Inline 1</Radio>
  <Radio group={inline1} value="second">Inline 2 checked</Radio>
  <Radio group={inline1} value="third">Inline 3</Radio>
  <Radio group={inline1} value="fourth" disabled>Inline disabled</Radio>
</div>
```

You can use the property `inline` as the alternative.

```svelte example
<script>
  import { Radio } from 'flowbite-svelte'
  let inline2 = 'third';
</script>

<Radio group={inline2} inline value="first" class="mr-2">Inline 1</Radio>
<Radio group={inline2} inline value="second" class="mr-2">Inline 2</Radio>
<Radio group={inline2} inline value="third" class="mr-2">Inline checked</Radio>
<Radio group={inline2} inline value="fourth" class="mr-2" disabled>Inline disabled</Radio>
```

## Colors

```svelte example
<script>
  import { Radio } from 'flowbite-svelte'
  let colors;
</script>

<p class="mb-4 font-semibold {colors}">Select color</p>
<div class="flex gap-4">
  <Radio bind:group={colors} color='red' value='text-red-500' >Red</Radio>
  <Radio bind:group={colors} color='green' value='text-green-500' >Green</Radio>
  <Radio bind:group={colors} color='purple' value='text-purple-500' >Purple</Radio>
  <Radio bind:group={colors} color='teal' value='text-teal-500' >Teal</Radio>
  <Radio bind:group={colors} color='yellow' value='text-yellow-500' >Yellow</Radio>
  <Radio bind:group={colors} color='orange' value='text-orange-500' >Orange</Radio>
</div>
```

## Advanced layout

Use this example of an advanced layout of radio elements where the label parent element can be styled when the radio is checked.

```svelte example hideScript
<script>
  import { Radio } from 'flowbite-svelte'
</script>

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

## Props

The component has the following props, type, and default values. See <a href="/docs/pages/typescript">types
page</a> for type information.

All attributes of the `input` element like: name, id, autofocus, etc, can be set directly as component props.

### Radio

<TableProp>
<TableDefaultRow items={items} rowState='hover' />
</TableProp>

### Helper

<TableProp>
<TableDefaultRow items={items3} rowState='hover' />
</TableProp>

## Forwarded Events

<DocBadgeList items={events} />
