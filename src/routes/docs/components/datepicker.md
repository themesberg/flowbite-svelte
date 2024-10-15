---
layout: componentLayout
title: Svelte DatePicker - Flowbite
breadcrumb_title: Svelte DatePicker
component_title: DatePicker
dir: Components
description: Use the DatePicker component to allow users to select a date or date range with an interactive calendar interface
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The DatePicker component provides an interactive calendar interface for selecting single dates or date ranges. It's fully integrated with Flowbite-Svelte's design system and offers various customization options.

## Setup

```svelte example hideOutput
<script>
  import { DatePicker } from 'flowbite-svelte';
</script>
```

## Default DatePicker

Use the DatePicker for single date selection. The selected date is bound to the `value` prop.

```svelte example
<script>
  import { DatePicker, P } from 'flowbite-svelte';
  let selectedDate = null;
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker bind:value={selectedDate} />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</P>
</div>
```

## Date Range Selection

Enable date range selection using the `range` prop. The start and end dates are bound to `rangeFrom` and `rangeTo` respectively.

```svelte example
<script>
  import { DatePicker, P } from 'flowbite-svelte';
  let dateRange = { from: null, to: null };
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} />
  <P class="mt-4">
    Selected range:
    {dateRange.from ? dateRange.from.toLocaleDateString() : 'None'} -
    {dateRange.to ? dateRange.to.toLocaleDateString() : 'None'}
  </P>
</div>
```

## Inline DatePicker

Use the `inline` prop to display the calendar without a popup.

```svelte example
<script>
  import { DatePicker, P } from 'flowbite-svelte';
  let selectedDate = null;
</script>

<div class="md:w-1/2">
  <DatePicker inline bind:value={selectedDate} />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</P>
</div>
```

## Custom Color

Customize the primary color of the DatePicker using the `color` prop.

```svelte example
<script>
  import { DatePicker } from 'flowbite-svelte';
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker color="red" />
</div>
```

## Localization

Set a specific locale for date formatting using the `locale` prop.

```svelte example
<script>
  import { DatePicker } from 'flowbite-svelte';
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker locale="fr-FR" />
</div>
```

## Custom Date Format

Specify a custom date format using the `dateFormat` prop.

```svelte example
<script>
  import { DatePicker } from 'flowbite-svelte';
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker dateFormat={{ year: 'numeric', month: 'short', day: '2-digit' }} />
</div>
```

## Action Buttons

Add action buttons (Today, Clear, Apply) using the `showActionButtons` prop. You can also listen for the `clear` and `apply` events to perform specific actions when these buttons are clicked.

```svelte example
<script>
  import { DatePicker, P } from 'flowbite-svelte';
  let selectedDate = null;
  let lastAction = '';

  function handleClear() {
    lastAction = 'Cleared';
  }

  function handleApply(event) {
    lastAction = 'Applied';
    selectedDate = event.detail;
  }
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker 
    bind:value={selectedDate} 
    showActionButtons 
    autohide={false}
    on:clear={handleClear}
    on:apply={handleApply}
  />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</P>
  <P class="mt-2">Last action: {lastAction}</P>
</div>
```

## Custom Title

Add a custom title to the DatePicker using the `title` prop.

```svelte example
<script>
  import { DatePicker } from 'flowbite-svelte';
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker title="Select your preferred date" />
</div>
```

## Disabled State

Use the `disabled` prop to disable the DatePicker.

```svelte example
<script>
  import { DatePicker } from 'flowbite-svelte';
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker disabled />
</div>
```

## Required Field

Mark the DatePicker as a required field using the `required` prop.

```svelte example
<script>
  import { DatePicker } from 'flowbite-svelte';
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker required />
</div>
```

## Custom First Day of Week

Set a custom first day of the week using the `firstDayOfWeek` prop.

```svelte example
<script>
  import { DatePicker } from 'flowbite-svelte';
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker firstDayOfWeek={0} />
</div>
```

## Event Handling

Listen for date selection events using the `on:select` event.

```svelte example
<script>
  import { DatePicker } from 'flowbite-svelte';
 
  function handleDateSelect(event) {
    console.log('Selected date:', event.detail);
  }
</script>

<div class="mb-64 md:w-1/2">
  <DatePicker on:select={handleDateSelect} />
</div>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### DatePicker styling

- Use the `class` prop to overwrite the input field's default class.
- Use the `color` prop to set the primary color theme for the date picker.

<CompoAttributesViewer {dirName} />

## References

- [Flowbite DatePicker (JavaScript)](https://flowbite.com/docs/plugins/datepicker/)

<GitHubCompoLinks />