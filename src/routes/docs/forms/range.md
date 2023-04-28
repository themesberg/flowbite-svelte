---
layout: componentLayout
title: Svelte Range Slider - Flowbite
breadcrumb_title: Svelte Range Slider
component_title: Range
dir: Forms
description: Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, A } from '$lib'
  import { props as items } from '../../props/Range.json'

  const events = ["on:change","on:click","on:keydown","on:keypress","on:keyup"];

  let minmaxValue=5
</script>



The range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using a sliding animation.

## Setup

```svelte example hideOutput
<script>
  import { Range } from 'flowbite-svelte'
</script>
```

## Range slider example

```svelte example
<script>
  import { Range, Label } from 'flowbite-svelte'
</script>

<Label>Default range</Label>
<Range id="range1" />
```

## Disabled state

```svelte example hideScript
<script>
  import { Range, Label } from 'flowbite-svelte'
</script>

<Label>Default range</Label>
<Range id="range-disabled" disabled/>
```

## Binding value

Use bind:value to bind the range input value as seen the the following examples.

## Min and max

```svelte example
<script>
  import { Range, Label } from 'flowbite-svelte'
  let minmaxValue=5
</script>

<Label>Min-max range</Label>
<Range id="range-minmax" min="0" max="10" bind:value={minmaxValue}/>
<p>Value: {minmaxValue}</p>
```

## Steps

```svelte example
<script>
  import { Range, Label } from 'flowbite-svelte'
  let stepValue=2.5
</script>

<Label>Range steps</Label>
<Range id="range-steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
```

## Sizes

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

## Unknown attributes

Since we added `$$restProps` to input field, you can contain the props which are not declared with export. It will pass down other unknown attributes to an element in a component.

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

## Forwarded Events

<DocBadgeList items={events} />

