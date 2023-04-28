---
layout: componentLayout
title: Svelte Datepicker - Flowbite
breadcrumb_title: Svelte Datepicker
component_title: Datepicker
dir: Experimental
description: Start receiving date and time data from your users using this free datepicker element based on Tailwind utility-classes and vanilla JavaScript
thumnailSize: w-28
---


<script>
  import { TableProp, TableDefaultRow } from '../../utils'
  import { Alert } from '$lib'
  import { props as items } from '../../props/Datepicker.json'
</script>


Date picker component

<div class="p-8">
    <Alert color="red">
        <span class="font-medium">⚠️ Datepicker component is experimental and only works with SvelteKit.</span>
    </Alert>
</div>

## Setup

```svelte example hideOutput
<script>
    import { Datepicker } from "flowbite-svelte";
</script>
```

### Use rel="external"

This component is importing Flowbite datepicker javascript in the `svelte:head` section. When you are
linking to a page using this component, use `rel="external"`.

## Datepicker example

Use the following example of an input element to create a datepicker component. All you need to do is
to add the datepicker data attribute to any input element.

```svelte example hideOutput
<script>
    import { Datepicker } from "flowbite-svelte";
</script>
<Datepicker />
```

## Name and other attributes

The component has `$$restProps` attributes that can be used to pass any other attribute.

```svelte example hideOutput
<script>
    import { Datepicker } from "flowbite-svelte";
</script>
<Datepicker name="start" />
```

## Date range picker

Use the `range` prop and the following markup to initialize two datepickers as a range.

The range picker has input name of `start` and `end`.

```svelte example hideOutput
<script>
    import { Datepicker } from "flowbite-svelte";
</script>
<Datepicker range />
```

## Action buttons

By adding the `datepickerButtons` prop you will enable the today and clear buttons with the following features:
- Clicking on the today button will browse back to the current day/month/year
- Clicking on the clear button will reset all selections

```svelte example hideOutput
<script>
    import { Datepicker } from "flowbite-svelte";
</script>
<Datepicker datepickerButtons />
```

## Date format

If you want to use a custom format such as mm/dd/yyyythen you can use the `datepickerFormat="format"` prop to change it.

```svelte example hideOutput
<script>
    import { Datepicker } from "flowbite-svelte";
</script>
<Datepicker datepickerFormat="dd/mm/yyyy" />
```

## Orientation

You can override the default positioning algorithm by using the  `datepickerOrientation="top | right | bottom | left"`
prop. You can even combine right with bottom or left with top.

```svelte example hideOutput
<script>
    import { Datepicker } from "flowbite-svelte";
</script>
<Datepicker datepickerOrientation="bottom right" />
```

## Title

You can also add a title to the datepicker by using the `datepicker-title="title"` prop.

```svelte example hideOutput
<script>
    import { Datepicker } from "flowbite-svelte";
</script>
<Datepicker datepickerTitle="My Vacation" />
```

## Props

The component has the following props, type, and default values. See <a href="/docs/pages/typescript">types page</a> for type information.

<TableProp>
    <TableDefaultRow {items} rowState="hover" />
</TableProp>
