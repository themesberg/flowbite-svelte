---
layout: componentLayout
title: Svelte Timepicker - Flowbite
breadcrumb_title: Svelte Timepicker
component_title: Timepicker
dir: Forms
description: Use the timepicker component to allow the user to select a time using a native time input element including hours and minutes
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList, CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, A } from '$lib'

  const components = 'Timepicker'
</script>

The timepicker component can be used to allow the user to select a specific time using a native time input element. This component is built with Svelte and uses the native time input from HTML to handle the time functionality.

## Setup

```svelte example hideOutput
<script>
  import { Timepicker } from 'flowbite-svelte';
</script>
```

## Default timepicker

Use this example of a default timepicker component to allow the user to select a time value.

```svelte example
<script>
  import { Label, Timepicker } from 'flowbite-svelte';
</script>

<Label>Select Time:</Label>
<Timepicker />
```

## Timepicker with custom props

This example shows how to use the timepicker with custom properties.

```svelte example
<script>
  import { Label, Timepicker } from 'flowbite-svelte';
</script>

<Label for="appointment-time">Choose appointment time:</Label>
<Timepicker
  id="appointment-time"
  value="09:00"
  min="08:00"
  max="18:00"
/>
```

## Props

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Timepicker](https://flowbite.com/docs/forms/timepicker/)

<GitHubCompoLinks {components}/>