---
layout: formLayout
title: Svelte Range - Flowbite
breadcrumb_title: Range
dir: Forms
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Breadcrumb, BreadcrumbItem, Badge, Heading, A } from '$lib'
  
  import componentProps from '../props/Range.json'
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']

 let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let minmaxValue=5
  
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options</CompoDescription>

<ExampleDiv>
<GitHubSource href="forms/Range.svelte">Range</GitHubSource>
</ExampleDiv>

The range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using a sliding animation.

<Htwo label="Setup" />

```html
<script>
  import { Range } from 'flowbite-svelte'
</script>
```

<Htwo label="Range slider example" />

```svelte example
<script>
  import { Range, Label } from 'flowbite-svelte'
</script>

<Label>Default range</Label>
<Range id="range1" />
```

<Htwo label="Disabled state" />

```svelte example hideScript
<script>
  import { Range, Label } from 'flowbite-svelte'
</script>

<Label>Default range</Label>
<Range id="range-disabled" disabled/>
```

<Htwo label="Binding value" />

Use bind:value to bind the range input value as seen the the following examples.

<Htwo label="Min and max" />

```svelte example
<script>
  import { Range, Label } from 'flowbite-svelte'
  let minmaxValue=5
</script>

<Label>Min-max range</Label>
<Range id="range-minmax" min="0" max="10" bind:value={minmaxValue}/>
<p>Value: {minmaxValue}</p>
```

<Htwo label="Steps" />

```svelte example
<script>
  import { Range, Label } from 'flowbite-svelte'
  let stepValue=2.5
</script>

<Label>Range steps</Label>
<Range id="range-steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
```

<Htwo label="Sizes" />

```svelte example class="space-y-6" hideScript
<script>
  import { Range, Label } from 'flowbite-svelte'
</script>

<Label>Small range</Label>
<Range id="small-range" size="sm" />
<Label>Default range</Label>
<Range id="default-range" size="md"/>
<Label>Large range</Label>
<Range id="large-range" size="lg" />
```

<Htwo label="Unknown attributes" />

Since we added `$$restProps` to input field, you can contain the props which are not declared with export. It will pass down other unknown attributes to an element in a component.

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keypress</Badge>
<Badge large={true}>on:keyup</Badge>
</div>
