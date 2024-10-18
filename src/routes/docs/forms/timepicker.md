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

## Timepicker with dropdown

This example demonstrates how to use the timepicker with a dropdown for selecting duration.

```svelte example class="h-64"
<script>
  import { Label, Timepicker, P } from 'flowbite-svelte';

  let selectedTime = { time: '12:00', duration: '30' };
  const durations = [
    { value: '30', name: '30 minutes' },
    { value: '60', name: '1 hour' },
    { value: '120', name: '2 hours' }
  ];

  function handleChange(event) {
    selectedTime = event.detail;
  }
</script>

<Label>Select Time and Duration:</Label>
<Timepicker
  type="dropdown"
  optionLabel="Duration"
  options={durations}
  on:select={handleChange}
  value={selectedTime.time}
  selectedOption={selectedTime.duration}
/>

<P>Selected: {selectedTime.time}, Duration: {selectedTime.duration}</P>
```

## Timepicker with select

Use this example to show a select input next to the timepicker to select an option like a timezone.

```svelte example
<script>
  import { Label, Timepicker, P } from 'flowbite-svelte';
 
  let selectedTime = { time: '12:00', timezone: 'UTC' };
  const timezones = [
    { value: 'UTC', name: 'UTC' },
    { value: 'EST', name: 'Eastern Time (EST)' },
    { value: 'CST', name: 'Central Time (CST)' },
    { value: 'MST', name: 'Mountain Time (MST)' },
    { value: 'PST', name: 'Pacific Time (PST)' },
    { value: 'GMT', name: 'Greenwich Mean Time (GMT)' },
    { value: 'CET', name: 'Central European Time (CET)' },
  ];

  function handleChange(event) {
    selectedTime = event.detail;
  }
</script>

<Label>Select Time and Timezone:</Label>
<Timepicker
  type="select"
  optionLabel="Timezone"
  options={timezones}
  on:select={handleChange}
  value={selectedTime.time}
  selectedOption={selectedTime.timezone}
/>
<P>Selected: {selectedTime.time} {selectedTime.timezone}</P>
```

## Timepicker range selector

Use this example to select a time interval using two input fields, often used for the duration of an event. If you set the end time to be earlier than the start time, the component will automatically swap the two times.

```svelte example
<script>
  import { Label, Timepicker, P } from 'flowbite-svelte';

  let selectedTime = { time: '09:00', endTime: '17:00' };

  function handleChange(event) {
    selectedTime = event.detail;
  }
</script>

<Label>Select Time Range:</Label>
<Timepicker
  type="range"
  on:select={handleChange}
  value={selectedTime.time}
  endValue={selectedTime.endTime}
/>
<P>Selected Range: {selectedTime.time} - {selectedTime.endTime}</P>
```

## Timerange with dropdown

This example can be used to show the timerange picker inside a dropdown only when clicking on a button.

```svelte example class="h-80"
<script>
  import { Label, Timepicker, P } from 'flowbite-svelte';

  let selectedTimerange = { time: '09:00', endTime: '17:00' };

  function handleChange(event) {
    selectedTimerange = event.detail;
  }
</script>

<Label>Select Time Range:</Label>
<Timepicker
  type="timerange-dropdown"
  on:select={handleChange}
  value={selectedTimerange.time}
  endValue={selectedTimerange.endTime}
/>
<P>Selected Range: {selectedTimerange.time} - {selectedTimerange.endTime}</P>
```

## Timerange picker with toggle

This example demonstrates a timerange picker that can be toggled on and off, allowing users to select a start and end time when the picker is visible.

```svelte example class="h-96"
<script>
  import { Label, Timepicker, P } from 'flowbite-svelte';

  let selectedTimerange = { time: '09:00', endTime: '17:00' };

  function handleChange(event) {
    selectedTimerange = event.detail;
  }
</script>

<Label class="mb-2" for="timerange-toggle">Toggle Time Range:</Label>
<Timepicker
  type="timerange-toggle"
  toggleLabel="Toggle Time Range Picker"
  on:select={handleChange}
  value={selectedTimerange.time}
  endValue={selectedTimerange.endTime}
/>

<P>Selected Range: {selectedTimerange.time} - {selectedTimerange.endTime}</P>
```

## Props

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Timepicker](https://flowbite.com/docs/forms/timepicker/)

<GitHubCompoLinks {components}/>
