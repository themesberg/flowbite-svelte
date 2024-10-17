---
layout: componentLayout
title: Svelte Timepicker - Flowbite
breadcrumb_title: Svelte Timepicker
component_title: Timepicker
dir: Forms
description: Use the timepicker component to allow the user to select a time using a native time input element including hours and minutes
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks } from '../../utils'
  const components = 'Timepicker'
</script>

The timepicker component can be used to allow the user to select a specific time using a custom time input element and provides flexibility in styling and icon usage.

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

## Timepicker with icon

This example can be used to select a time via an input field where you can add an icon to the input group. You can use either a Flowbite Svelte icon component or a custom SVG.

```svelte example
<script>
  import { Label, Timepicker } from 'flowbite-svelte';
  import { ClockSolid } from 'flowbite-svelte-icons';

  const customSvg = `<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>`;
</script>

<Label>Select Time (Flowbite Icon):</Label>
<Timepicker icon={ClockSolid} />

<Label>Select Time (Custom SVG):</Label>
<Timepicker icon={customSvg} />
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