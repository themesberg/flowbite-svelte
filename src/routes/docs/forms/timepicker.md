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
  import { Timepicker } from "flowbite-svelte";
</script>
```

## Default timepicker

Use this example of a default timepicker component to allow the user to select a time value.

```svelte example
{#include Default.svelte}
```

## Using state and bind

```svelte example
{#include StateAndBind.svelte}
```

## Timepicker with icon

This example can be used to select a time via an input field where you can add an icon to the input group. You can use a Flowbite Svelte icon component or any other icon component.

```svelte example
{#include Icon.svelte}
```

## Timepicker with custom props

This example shows how to use the timepicker with custom properties.

```svelte example
{#include CustomProps.svelte}
```

## Timepicker with dropdown

This example demonstrates how to use the timepicker with a dropdown for selecting duration.

```svelte example class="h-64"
{#include Dropdown.svelte}
```

## Timepicker with select

Use this example to show a select input next to the timepicker to select an option like a timezone.

```svelte example
{#include Select.svelte}
```

## Timepicker range selector

Use this example to select a time interval using two input fields, often used for the duration of an event. If you set the end time to be earlier than the start time, the component will automatically swap the two times.

```svelte example
{#include Range.svelte}
```

## Timerange with dropdown

This example can be used to show the timerange picker inside a dropdown only when clicking on a button.

```svelte example class="h-80"
{#include Timerange.svelte}
```

## Timerange picker with toggle

This example demonstrates a timerange picker that can be toggled on and off, allowing users to select a start and end time when the picker is visible.

```svelte example class="h-96"
{#include Toggle.svelte}
```

## Inline timepicker buttons

This is an advanced example that you can use to show the details of an event and select a date of the event based on the Flowbite Datepicker and select the time using a predefined set of time intervals based on checkbox elements.

```svelte example class="p-4"
{#include Inline.svelte}
```

## Modal with timepicker

Use this example to select a date and time inside of a modal component based on the Flowbite Datepicker and select a time interval using checkbox elements with predefined time values for event time scheduling.

```svelte example hideResponsiveButtons
{#include Modal.svelte}
```

## Drawer with timepicker

Use this example to show multiple time interval selections inside of a drawer component to schedule time based on multiple entries (ie. days of the week) using the native browser time selection input element.

```svelte example class="flex justify-center p-4" hideResponsiveButtons
{#include Drawer.svelte}
```

## Props

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Timepicker](https://flowbite.com/docs/forms/timepicker/)

<GitHubCompoLinks {components}/>
