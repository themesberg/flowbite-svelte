---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import CompoDescription from '../utils/CompoDescription.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { onMount } from 'svelte';
  import { Toggle, Breadcrumb, BreadcrumbItem } from "$lib/index"
  import { AtSymbol , Mail , Home} from 'svelte-heros'
  import componentProps from '../props/Toggle.json'
  import componentProps1 from '../props/Radio.json'
  let items = componentProps.props
  let items1 = componentProps1.props.filter(x=>['color', 'inline'].includes(x[0]))

  let propHeader = ['Name', 'Type', 'Default']

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms">Forms</BreadcrumbItem>
  <BreadcrumbItem>Toggle</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Toggle</h1>

<CompoDescription>Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors</CompoDescription>

<ExampleDiv>
<GitHubSource href="forms/Toggle.svelte">Toggle</GitHubSource>
</ExampleDiv>

The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

<Htwo label="Setup" />

```html
<script>
  import { Toggle } from 'flowbite-svelte'
</script>
```

<Htwo label="Toggle examples" />

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

<ExampleDiv class="flex flex-col gap-2">
  <Toggle>Toggle me</Toggle>
  <Toggle checked={true}>Checked toggle</Toggle>
  <Toggle disabled>Disabled toggle</Toggle>
  <Toggle checked disabled>Disabled checked</Toggle>
</ExampleDiv>

```html
<Toggle>Toggle me</Toggle>
<Toggle checked>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
```

<Htwo label="Colors" />

<ExampleDiv class="flex justify-between">
  <Toggle color="red" checked>Red</Toggle>
  <Toggle color="green" checked>Green</Toggle>
  <Toggle color="purple" checked>Purple</Toggle>
  <Toggle color="yellow" checked>Yellow</Toggle>
  <Toggle color="teal" checked>Teal</Toggle>
  <Toggle color="orange" checked>Orange</Toggle>
</ExampleDiv>

```html
<Toggle color="red" checked>Red</Toggle>
<Toggle color="green" checked>Green</Toggle>
<Toggle color="purple" checked>Purple</Toggle>
<Toggle color="yellow" checked>Yellow</Toggle>
<Toggle color="teal" checked>Teal</Toggle>
<Toggle color="orange" checked>Orange</Toggle>
```

<Htwo label="Sizes" />

<ExampleDiv class="flex flex-col gap-2">
  <Toggle size="small">Small toggle</Toggle>
  <Toggle size="default" checked>Default toggle</Toggle>
  <Toggle size="large" checked>Large toggle</Toggle>
</ExampleDiv>

```html
<Toggle size="small">Small toggle</Toggle>
<Toggle size="default" checked>Default toggle</Toggle>
<Toggle size="large" checked>Large toggle</Toggle>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

<h3>Toggle</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items.concat(items1)} rowState='hover' />
</TableProp>
