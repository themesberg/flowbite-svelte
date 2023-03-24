---
layout: formLayout
title: Svelte Toggle (Switch) - Flowbite
breadcrumb_title: Toggle
dir: Forms
description: Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow, MetaTag } from '../utils'
  
  import { onMount } from 'svelte';
  import { Toggle, Breadcrumb, BreadcrumbItem, Badge, Heading, A } from '$lib'
  import { props as items } from '../props/Toggle.json'
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pt-28 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

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

```svelte example class="flex flex-col gap-2" hideScript
<script>
  import { Toggle } from 'flowbite-svelte'
</script>

<Toggle>Toggle me</Toggle>
<Toggle checked={true}>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
```

<Htwo label="Colors" />

```svelte example class="flex justify-between" hideScript
<script>
  import { Toggle } from 'flowbite-svelte'
</script>

<Toggle color="red" checked>Red</Toggle>
<Toggle color="green" checked>Green</Toggle>
<Toggle color="purple" checked>Purple</Toggle>
<Toggle color="yellow" checked>Yellow</Toggle>
<Toggle color="teal" checked>Teal</Toggle>
<Toggle color="orange" checked>Orange</Toggle>
```

<Htwo label="Sizes" />

```svelte example class="flex flex-col gap-2" hideScript
<script>
  import { Toggle } from 'flowbite-svelte'
</script>

<Toggle size="small">Small toggle</Toggle>
<Toggle size="default" checked>Default toggle</Toggle>
<Toggle size="large" checked>Large toggle</Toggle>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Toggle</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:click</Badge>
</div>