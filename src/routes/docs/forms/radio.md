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
  import { CompoAttributesViewer, DocBadgeList, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, A } from '$lib'

  const components = 'Radio, Label, Helper'
</script>

The radio component can be used to allow the user to choose a single option from one or more available options coded with the utility classes from Tailwind CSS and available in multiple styles, variants, and colors and support dark mode.

## Setup

```svelte example hideOutput
<script>
  import { Radio } from 'flowbite-svelte';
</script>
```

## Radio examples

Use the default example of a radio component with the checked and unchecked state.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import { Radio } from 'flowbite-svelte';
  let selectedValue = "2";
</script>

<Radio name="example1" value="1" bind:group={selectedValue}>Default radio</Radio>
<Radio name="example1" value="2" bind:group={selectedValue}>Checked state</Radio>
```

## Disabled state

Apply the `disabled` attribute to the radio component to disallow the selection for the user.

This example can be used for the disabled state of the radio component by applying the disabled attribute to the input element.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import { Radio } from 'flowbite-svelte';
  let selectedValue = "2";
</script>

<Radio name="disabled-state" disabled value="1" bind:group={selectedValue}>Disabled radio</Radio>
<Radio name="disabled-state" disabled value="2" bind:group={selectedValue}>Disabled checked</Radio>
```

## Alternative syntax

If you need separate control over the label and the radio you can use the verbose syntax, but then you need to take care about aligning manually.

```svelte example class="flex flex-col gap-4"
<script>
  import { Radio, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow, Label } from 'flowbite-svelte';
</script>

<Table>
  <TableHead>
    <TableHeadCell>Left column</TableHeadCell>
    <TableHeadCell>Right column</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y dark:divide-gray-700">
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Label for="radio1">Default radio</Label></TableBodyCell>
      <TableBodyCell><Label for="radio2">Disabled radio</Label></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Radio name="separate" id="radio1" /></TableBodyCell>
      <TableBodyCell><Radio name="separate" id="radio2" disabled /></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

<Label color="red" class="mt-4 flex items-center font-bold italic">
  Label on the other side <Radio name="separate" class="ms-2" />
</Label>
```

## Radio with a link

Use this example if you want to add an anchor link inside the label of the radio component.

```svelte example hideScript
<script>
  import { Radio } from 'flowbite-svelte';
</script>

<Radio name="with-link">
  I agree with the <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline ms-1"> terms and conditions </a>
  .
</Radio>
```

## Helper text

Get started with this example if you want to add a secondary helper text for the radio component.

```svelte example
<script>
  import { Radio, Helper } from 'flowbite-svelte';
</script>

<Radio aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Radio>
<Helper id="helper-checkbox-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
```

## Bordered

Use this example of a radio inside a card element to enable a larger area of clicking activation.

```svelte example hideScript
<script>
  import { Radio } from 'flowbite-svelte';
  let selectedValue3 = "2"
</script>

<div class="grid grid-cols-2 gap-6">
  <div class="rounded-sm border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" value="1" bind:group={selectedValue3} class="w-full p-4">Default radio</Radio>
  </div>
  <div class="rounded-sm border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" value="2" bind:group={selectedValue3} class="w-full p-4">Checked state</Radio>
  </div>
</div>
```

## Radio list group

Use this example to show a list of radio items grouped inside a card.

```svelte example
<script>
  import { Radio } from 'flowbite-svelte';
  let technology = 'svelte';
</script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">
  Technology <span class="capitalize">{technology}</span>
</p>
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
  import { Radio } from 'flowbite-svelte';
</script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
  <li class="w-full"><Radio name="hor-list" class="p-3">Svelte</Radio></li>
  <li class="w-full"><Radio name="hor-list" class="p-3">Vue JS</Radio></li>
  <li class="w-full"><Radio name="hor-list" class="p-3">React</Radio></li>
  <li class="w-full"><Radio name="hor-list" class="p-3">Angular</Radio></li>
</ul>
```

## Radio in dropdown

Here’s an example of a list group that you can use right away.

```svelte example class="flex justify-center items-start h-80"
<script>
  import { Radio, Dropdown, Button, Helper } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let group3 = 2;
</script>

<Button>Dropdown radio<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
<Dropdown class="w-60">
  <ul class="p-2">
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
  </ul>
</Dropdown>
```

## Inline layout

You can align the radio elements horizontally by using a wrapper tag and applying the flex class.

```svelte example
<script>
  import { Radio } from 'flowbite-svelte';
  let inline1 = 'second';
</script>

<div class="flex gap-3">
  <Radio bind:group={inline1} value="first">Inline 1</Radio>
  <Radio bind:group={inline1} value="second">Inline 2 checked</Radio>
  <Radio bind:group={inline1} value="third">Inline 3</Radio>
  <Radio bind:group={inline1} value="fourth" disabled>Inline disabled</Radio>
</div>
```

You can use the property `inline` as the alternative.

```svelte example
<script>
  import { Radio } from 'flowbite-svelte';
  let inline2 = 'third';
</script>

<Radio bind:group={inline2} inline value="first" class="me-2">Inline 1</Radio>
<Radio bind:group={inline2} inline value="second" class="me-2">Inline 2</Radio>
<Radio bind:group={inline2} inline value="third" class="me-2">Inline checked</Radio>
<Radio bind:group={inline2} inline value="fourth" class="me-2" disabled>Inline disabled</Radio>
```

## Colors

```svelte example hideResponsiveButtons
<script>
  import { Radio } from 'flowbite-svelte';
  let colors = "text-purple-500";
</script>

<p class="mb-4 font-semibold {colors}">Select color</p>
<div class="flex gap-4">
  <Radio bind:group={colors} color="red" value="text-red-500">Red</Radio>
  <Radio bind:group={colors} color="green" value="text-green-500">Green</Radio>
  <Radio bind:group={colors} color="purple" value="text-purple-500">Purple</Radio>
  <Radio bind:group={colors} color="teal" value="text-teal-500">Teal</Radio>
  <Radio bind:group={colors} color="yellow" value="text-yellow-500">Yellow</Radio>
  <Radio bind:group={colors} color="orange" value="text-orange-500">Orange</Radio>
</div>
```

## Advanced layout

Use this example of an advanced layout of radio elements where the label parent element can be styled when the radio is checked.

```svelte example
<script>
  import { Radio } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
<div class="grid gap-6 w-full md:grid-cols-2">
  <Radio name="custom" custom>
    <div class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div>
        <div class="w-full text-lg font-semibold">0-50 MB</div>
        <div class="w-full">Good for small websites</div>
      </div>
      <ArrowRightOutline class="ms-3 w-10 h-10" />
    </div>
  </Radio>
  <Radio name="custom" custom>
    <div for="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="block">
        <div class="w-full text-lg font-semibold">500-1000 MB</div>
        <div class="w-full">Good for large websites</div>
      </div>
      <ArrowRightOutline class="ms-3 w-10 h-10" />
    </div>
  </Radio>
</div>
```

## RadioButton

The special case component - `RadioButton` - is the `Radio` with the [Button](/docs/components/buttons) look and feel. I can be used as standalone element or be wrapped inside [ButtonGroup](/docs/components/button-group).

This component accepts all props from the [Button](/docs/components/buttons) for styling and `Radio` for behaviour.

```svelte example class="space-y-4"
<script>
  import { RadioButton, ButtonGroup } from 'flowbite-svelte';
  import { ListMusicSolid, OrderedListOutline, ListOutline } from 'flowbite-svelte-icons';

  let radioGroup = "notes";
</script>

<div>
  <RadioButton value="notes" bind:group={radioGroup}><ListMusicSolid class="w-7 h-7" /></RadioButton>
  <RadioButton value="numbers" bind:group={radioGroup}><OrderedListOutline class="w-7 h-7"/></RadioButton>
  <RadioButton value="bullets" bind:group={radioGroup}><ListOutline class="w-7 h-7"/></RadioButton>
</div>

<ButtonGroup>
  <RadioButton value="notes" bind:group={radioGroup}><ListMusicSolid class="w-7 h-7"/></RadioButton>
  <RadioButton value="numbers" bind:group={radioGroup}><OrderedListOutline class="w-7 h-7"/></RadioButton>
  <RadioButton value="bullets" bind:group={radioGroup}><ListOutline class="w-7 h-7"/></RadioButton>
</ButtonGroup>

<p>List style: {radioGroup}</p>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Radio styling

- Use the `class` prop to overwrite the `label` and `input` tag class.

### Helper styling

- Use the `class` prop to overwrite the `p` tag class.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Radio](https://flowbite.com/docs/forms/radio/)

<GitHubCompoLinks {components}/>
