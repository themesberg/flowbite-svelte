---
layout: componentLayout
title: Svelte Checkbox - Flowbite
breadcrumb_title: Svelte Checkbox
component_title: Checkbox
dir: Forms
description: Get started with the checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors
thumnailSize: w-72
---

<script>
  import { CompoAttributesViewer, DocBadgeList, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, A } from '$lib'

  const components = 'Checkbox, Label, Helper'
</script>

The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple styles, sizes, colors, and variants.

## Setup

```svelte example hideOutput
<script>
  import { Checkbox } from 'flowbite-svelte';
</script>
```

## Checkbox examples

Use this default example of a checbkox element in a checked and unchecked state.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import { Checkbox } from 'flowbite-svelte';
</script>

<Checkbox>Default checkbox</Checkbox>
<Checkbox checked>Checked state</Checkbox>
```

## Disabled state

This example can be used for the disabled state of the checkbox component by applying the disabled attribute to the input element.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import { Checkbox } from 'flowbite-svelte';
</script>

<Checkbox disabled>Disabled checkbox</Checkbox>
<Checkbox disabled checked>Disabled checked</Checkbox>
```

## Alternative syntax

If you need separate control over the label and the checkbox you can use the verbose syntax, but then you need to take care about aligning manually.

```svelte example class="flex flex-col gap-4"
<script>
  import { Checkbox, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, Label, TableBodyRow } from 'flowbite-svelte';
</script>

<Table>
  <TableHead>
    <TableHeadCell>Left column</TableHeadCell>
    <TableHeadCell>Right column</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y dark:divide-gray-700">
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Label for="checkbox1">Default checkbox</Label></TableBodyCell>
      <TableBodyCell><Label for="checkbox2">Disabled checkbox</Label></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Checkbox id="checkbox1" checked /></TableBodyCell>
      <TableBodyCell><Checkbox id="checkbox2" disabled /></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

<Label color="red" class="mt-4 flex items-center font-bold italic">
  Label on the other side <Checkbox class="ms-2" />
</Label>
```

## Checkbox with a link

Use this example if you want to add an anchor link inside the label of the checkbox component.

```svelte example hideScript
<script>
  import { Checkbox } from 'flowbite-svelte';
</script>

<Checkbox>
  I agree with the
  <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline ms-1">terms and conditions</a>
  .
</Checkbox>
```

## Helper text

Get started with this example if you want to add a secondary helper text for the checkbox component.

```svelte example
<script>
  import { Checkbox, Helper } from 'flowbite-svelte';
</script>

<Checkbox aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Checkbox>
<Helper id="helper-checkbox-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
```

## Bordered

Use this example of a checkbox inside a card element to enable a larger area of clicking activation.

```svelte example hideScript
<script>
  import { Checkbox } from 'flowbite-svelte';
</script>

<div class="rounded border border-gray-200 dark:border-gray-700">
  <Checkbox class="w-full p-4">Default radio</Checkbox>
</div>
<div class="rounded border border-gray-200 dark:border-gray-700">
  <Checkbox checked class="w-full p-4">Checked state</Checkbox>
</div>
```

## Checkbox list group

Use this example to show a list of checkbox items grouped inside a card.

```svelte example hideScript
<script>
  import { Checkbox } from 'flowbite-svelte';
</script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>
<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
  <li><Checkbox class="p-3">svelte</Checkbox></li>
  <li><Checkbox class="p-3">Vue JS</Checkbox></li>
  <li><Checkbox class="p-3">React</Checkbox></li>
  <li><Checkbox class="p-3">Angular</Checkbox></li>
</ul>
```

## Horizontal list group

Use this example to show a list of checkbox items inside a card horizontally.

```svelte example hideScript
<script>
  import { Checkbox } from 'flowbite-svelte';
</script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
  <li class="w-full"><Checkbox class="p-3">Svelte</Checkbox></li>
  <li class="w-full"><Checkbox class="p-3">Vue JS</Checkbox></li>
  <li class="w-full"><Checkbox class="p-3">React</Checkbox></li>
  <li class="w-full"><Checkbox class="p-3">Angular</Checkbox></li>
</ul>
```

## Checkbox dropdown

Use this example to show a list of checkbox items inside a dropdown menu.

```svelte example class="flex justify-center items-start h-96"
<script>
  import { Dropdown, DropdownItem, Checkbox, Button, Search } from 'flowbite-svelte';
  import { ChevronDownSolid, UserRemoveSolid } from 'flowbite-svelte-icons';
</script>

<Button>Project users<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
<Dropdown class="overflow-y-auto px-3 pb-3 text-sm h-44">
  <div slot="header" class="p-3">
    <Search size="md" />
  </div>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Robert Gouth</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Jese Leos</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox checked>Bonnie Green</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Jese Leos</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Robert Gouth</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Bonnie Green</Checkbox>
  </li>
  <a slot="footer" href="/" class="flex items-center p-3 -mb-1 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
    <UserRemoveSolid class="w-5 h-5 me-1" />Delete user
  </a>
</Dropdown>
```

## Inline layout

You can align the checkbox elements horizontally by using a wrapper tag and applying the flex class.

```svelte example hideScript
<script>
  import { Checkbox } from 'flowbite-svelte';
</script>

<div class="flex gap-3">
  <Checkbox>Inline 1</Checkbox>
  <Checkbox>Inline 2</Checkbox>
  <Checkbox checked>Inline checked</Checkbox>
  <Checkbox disabled>Inline disabled</Checkbox>
</div>
```

You can use the property `inline` as the alternative.

```svelte example hideScript
<script>
  import { Checkbox } from 'flowbite-svelte';
</script>

<Checkbox inline class="me-2">Inline 1</Checkbox>
<Checkbox inline class="me-2">Inline 2</Checkbox>
<Checkbox inline class="me-2" checked>Inline checked</Checkbox>
<Checkbox inline class="me-2" disabled>Inline disabled</Checkbox>
```

## Colors

```svelte example hideScript hideResponsiveButtons
<script>
  import { Label, Checkbox } from 'flowbite-svelte';
</script>

<div class="flex gap-4">
  <Checkbox checked color="red">Red</Checkbox>
  <Checkbox checked color="green">Green</Checkbox>
  <Checkbox checked color="purple">Purple</Checkbox>
  <Checkbox checked color="teal">Teal</Checkbox>
  <Checkbox checked color="yellow">Yellow</Checkbox>
  <Checkbox checked color="orange">Orange</Checkbox>
  <Label class="flex items-center">
    <Checkbox checked inline class="text-sky-400 focus:ring-pink-500" />
    Your custom color
  </Label>
</div>
```

## CheckboxButton

The special case component - `CheckboxButton` - is the `Checkbox` with the [Button](/docs/components/buttons) look and feel. I can be used as standalone element or be wrapped inside [ButtonGroup](/docs/components/button-group).

This component accepts all props from the [Button](/docs/components/buttons) for styling and `Checkbox` for behaviour.

```svelte example hideScript class="space-y-4"
<script>
  import { ButtonGroup, CheckboxButton } from 'flowbite-svelte';
  import {AppleSolid, FacebookSolid, DiscordSolid, DropboxSolid } from 'flowbite-svelte-icons';
</script>

  <div>
    <CheckboxButton><AppleSolid class="me-2"/>Apple</CheckboxButton>
    <CheckboxButton><FacebookSolid class="me-2"/>Facebook</CheckboxButton>
    <CheckboxButton><DiscordSolid class="me-2"/>Discord</CheckboxButton>
    <CheckboxButton><DropboxSolid class="me-2"/>Dropbox</CheckboxButton>
  </div>

  <ButtonGroup>
    <CheckboxButton><AppleSolid class="me-2"/>Apple</CheckboxButton>
    <CheckboxButton><FacebookSolid class="me-2"/>Facebook</CheckboxButton>
    <CheckboxButton><DiscordSolid class="me-2"/>Discord</CheckboxButton>
    <CheckboxButton><DropboxSolid class="me-2"/>Dropbox</CheckboxButton>
  </ButtonGroup>
```

## Advanced layout

Use this example of an advanced layout of checkbox elements where the label parent element can be styled when the checkbox is checked.

```svelte example
<script>
  import { Checkbox } from 'flowbite-svelte';
  import React from '../../utils/icons/React.svelte';
  import Vue from '../../utils/icons/Vue.svelte';
  import Angular from '../../utils/icons/Angular.svelte';
</script>

<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
<div class="grid gap-6 w-full md:grid-cols-3">
  <Checkbox custom>
    <div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <React />
      <div class="w-full text-lg font-semibold">React Js</div>
      <div class="w-full text-sm">A JavaScript library for building user interfaces.</div>
    </div>
  </Checkbox>
  <Checkbox custom>
    <div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Vue />
      <div class="w-full text-lg font-semibold">Vue Js</div>
      <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>
    </div>
  </Checkbox>
  <Checkbox custom>
    <div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Angular />
      <div class="w-full text-lg font-semibold">Angular</div>
      <div class="w-full text-sm">A TypeScript-based web application framework.</div>
    </div>
  </Checkbox>
</div>
```

## Group variable

```svelte example
<script>
  import { Button, Checkbox } from 'flowbite-svelte';

  let group = [2, 3];
</script>

<div class="flex gap-2">
  <Checkbox bind:group value={1}>One</Checkbox>
  <Checkbox bind:group value={2}>Two</Checkbox>
  <Checkbox bind:group value={3}>Three</Checkbox>
</div>
<div class="my-2 border border-gray-200 dark:border-gray-700 rounded-lg p-2 w-44">Group: {group}</div>
<Button on:click={() => (group.length = 0)}>Clear</Button>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Checkbox styling

- Use the `class` prop to overwrite the `label` and `input` tag class.

### Helper styling

- Use the `class` prop to overwrite the `p` tag class.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Checkbox](https://flowbite.com/docs/forms/checkbox/)

<GitHubCompoLinks {components} dir="forms"/>
