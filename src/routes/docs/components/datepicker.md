---
layout: componentLayout
title: Svelte Datepicker - Flowbite
breadcrumb_title: Svelte Datepicker
component_title: Datepicker
dir: Components
description: Use the Datepicker component to allow users to select a date or date range with an interactive calendar interface
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The Datepicker component provides an interactive calendar interface for selecting single dates or date ranges. It's fully integrated with flowbite-svelte's design system and offers various customization options.

## Setup

```svelte example hideOutput
<script>
  import { Datepicker } from "flowbite-svelte";
</script>
```

## Default Datepicker

Use the Datepicker for single date selection. The selected date is bound to the `value` prop.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker bind:value={selectedDate} />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
</div>
```

## Date Range Selection

Enable date range selection using the `range` prop. The start and end dates are bound to `rangeFrom` and `rangeTo` respectively.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";

  let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
    from: undefined,
    to: undefined
  });
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="pink" />
  <P class="mt-4">
    Selected range:
    {dateRange.from ? dateRange.from.toLocaleDateString() : "None"} -
    {dateRange.to ? dateRange.to.toLocaleDateString() : "None"}
  </P>
</div>
```

## Inline Datepicker

Use the `inline` prop to display the calendar without a popup.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);
</script>

<div class="md:w-1/2">
  <Datepicker inline bind:value={selectedDate} />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
</div>
```

## Color and classes

Select one of the following colors for the `color` prop:
`primary`(default), `blue`, `red`, `green`, `yellow`, `purple`, `dark`, `light`, `alternative`, `secondary`, `gray`, `orange`, `amber`, `lime`, `emerald`, `teal`, `cyan`, `sky`, `indigo`, `violet`, `fuchsia`, `pink`, `rose`.

The `classes` prop has the following `class` for disposal: `base`, `input`, `titleVariant`, `polite`, `button`,`actionButtons`, `columnHeader`, `grid`, `nav`, `dayButton`, `monthButton`.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker color="blue" classes={{ polite: "hover:text-blue-700!", dayButton: "hover:text-blue-400", titleVariant: "text-blue-800", monthButton: "text-blue-700" }} title="Select your preferred date" monthBtnSelected="bg-blue-200" />
</div>
```

## Localization

Set a specific locale for date formatting using the `locale` prop.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker locale="fr-FR" />
</div>
```

## Custom Date Format

Specify a custom date format using the `dateFormat` prop.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker dateFormat={{ year: "numeric", month: "short", day: "2-digit" }} />
</div>
```

## Action Buttons

Add action buttons (Today, Clear, Apply) using the `showActionButtons` prop. You can also listen for the `clear` and `apply` events to perform specific actions when these buttons are clicked.

```svelte example class="h-[460px]"
<script lang="ts">
  import { Datepicker, P, type DateOrRange } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);
  let lastAction = $state<string | undefined>();

  function handleClear() {
    lastAction = "Cleared";
  }

  function handleApply(detail: DateOrRange): void {
    lastAction = "Applied";
    if (detail instanceof Date) {
      selectedDate = detail;
    }
  }
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker bind:value={selectedDate} showActionButtons autohide={false} onclear={handleClear} onapply={handleApply} />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
  <P class="mt-2">Last action: {lastAction}</P>
</div>
```

## Custom Title

Add a custom title to the Datepicker using the `title` prop.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker title="Select your preferred date" />
</div>
```

## Disabled State

Use the `disabled` prop to disable the Datepicker.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker disabled />
</div>
```

## Required Field

Mark the Datepicker as a required field using the `required` prop.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker required />
</div>
```

## Custom First Day of Week

Set a custom first day of the week using the `firstDayOfWeek` prop.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker firstDayOfWeek={3} />
</div>
```

## Event Handling

Listen for date selection events using the `onselect` event.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker, type DateOrRange } from "flowbite-svelte";

  function handleDateSelect(detail: DateOrRange) {
    console.log("Selected date:", detail);
  }
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker onselect={handleDateSelect} />
</div>
```

## Restricting the selectable date range

Use `availableFrom` and/or `availableTo` props to restrict the selectable date range.

```svelte example class="h-[430px]"
<script lang="ts">
  import { Datepicker, P, type DateOrRange } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);

  // Helper function to add/subtract days
  function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  // Calculate dates relative to today
  const today = new Date();
  const availableFrom = addDays(today, -10); // 10 days ago
  const availableTo = addDays(today, 10); // 10 days from now

  function formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
</script>

<Datepicker bind:value={selectedDate} {availableFrom} {availableTo} placeholder="Select available date" />

<P class="mt-4">Available from: {formatDate(availableFrom)} to: {formatDate(availableTo)}</P>

<P>Selected date: {selectedDate ? formatDate(selectedDate) : "None selected"}</P>

<!-- Show some context -->
<P class="mt-4 text-sm text-gray-600">
  Today: {formatDate(today)}
  <br />
  Range: 10 days before today to 10 days after today
</P>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName} />

## References

- [Flowbite Datepicker (JavaScript)](https://flowbite.com/docs/plugins/Datepicker/)

<GitHubCompoLinks />
