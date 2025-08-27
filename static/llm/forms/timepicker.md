# Svelte Timepicker - Flowbite


The timepicker component can be used to allow the user to select a specific time using a custom time input element and provides flexibility in styling and icon usage.

## Setup

```svelte
<script>
  import { Timepicker } from "flowbite-svelte";
</script>
```

## Default timepicker

Use this example of a default timepicker component to allow the user to select a time value.

```svelte
{@include Default.svelte}
```

## Using state and bind

```svelte
{@include StateAndBind.svelte}
```

## Timepicker with icon

This example can be used to select a time via an input field where you can add an icon to the input group. You can use a Flowbite Svelte icon component or any other icon component.

```svelte
{@include Icon.svelte}
```

## Timepicker with custom props

This example shows how to use the timepicker with custom properties.

```svelte
{@include CustomProps.svelte}
```

## Timepicker with dropdown

This example demonstrates how to use the timepicker with a dropdown for selecting duration.

```svelte
{@include Dropdown.svelte}
```

## Timepicker with select

Use this example to show a select input next to the timepicker to select an option like a timezone.

```svelte
{@include Select.svelte}
```

## Timepicker range selector

Use this example to select a time interval using two input fields, often used for the duration of an event. If you set the end time to be earlier than the start time, the component will automatically swap the two times.

```svelte
{@include Range.svelte}
```

## Timerange with dropdown

This example can be used to show the timerange picker inside a dropdown only when clicking on a button.

```svelte
{@include Timerange.svelte}
```

## Timerange picker with toggle

This example demonstrates a timerange picker that can be toggled on and off, allowing users to select a start and end time when the picker is visible.

```svelte
{@include Toggle.svelte}
```

## Inline timepicker buttons

This is an advanced example that you can use to show the details of an event and select a date of the event based on the Flowbite Datepicker and select the time using a predefined set of time intervals based on checkbox elements.

```svelte
{@include Inline.svelte}
```

## Modal with timepicker

Use this example to select a date and time inside of a modal component based on the Flowbite Datepicker and select a time interval using checkbox elements with predefined time values for event time scheduling.

```svelte
{@include Modal.svelte}
```

## Drawer with timepicker

Use this example to show multiple time interval selections inside of a drawer component to schedule time based on multiple entries (ie. days of the week) using the native browser time selection input element.

```svelte
{@include Drawer.svelte}
```

## Props

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Timepicker](https://flowbite.com/docs/forms/timepicker/)

<GitHubCompoLinks {components}/>
