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
{#include Default.svelte}
```

## Date Range Selection

Enable date range selection using the `range` prop. The start and end dates are bound to `rangeFrom` and `rangeTo` respectively.

```svelte example class="h-[430px]"
{#include Range.svelte}
```

## Inline Datepicker

Use the `inline` prop to display the calendar without a popup.

```svelte example class="h-[430px]"
{#include Inline.svelte}
```

## Color and classes

Select one of the following colors for the `color` prop:
`primary`(default), `blue`, `red`, `green`, `yellow`, `purple`, `dark`, `light`, `alternative`, `secondary`, `gray`, `orange`, `amber`, `lime`, `emerald`, `teal`, `cyan`, `sky`, `indigo`, `violet`, `fuchsia`, `pink`, `rose`.

The `classes` prop has the following `class` for disposal: `base`, `input`, `titleVariant`, `polite`, `button`,`actionButtons`, `columnHeader`, `grid`, `nav`, `dayButton`, `monthButton`.

```svelte example class="h-[430px]"
{#include Color.svelte}
```

## Localization

Set a specific locale for date formatting using the `locale` prop.

```svelte example class="h-[430px]"
{#include Localization.svelte}
```

## Custom Date Format

Specify a custom date format using the `dateFormat` prop.

```svelte example class="h-[430px]"
{#include Format.svelte}
```

## Action Buttons

Add action buttons (Today, Clear, Apply) using the `showActionButtons` prop. You can also listen for the `clear` and `apply` events to perform specific actions when these buttons are clicked.

```svelte example class="h-[460px]"
{#include Action.svelte}
```

## Custom Title

Add a custom title to the Datepicker using the `title` prop.

```svelte example class="h-[430px]"
{#include Title.svelte}
```

## Disabled State

Use the `disabled` prop to disable the Datepicker.

```svelte example class="h-[430px]"
{#include Disabled.svelte}
```

## Required Field

Mark the Datepicker as a required field using the `required` prop.

```svelte example class="h-[430px]"
{#include Required.svelte}
```

## Custom First Day of Week

Set a custom first day of the week using the `firstDayOfWeek` prop.

```svelte example class="h-[430px]"
{#include First.svelte}
```

## Event Handling

Listen for date selection events using the `onselect` event.

```svelte example class="h-[430px]"
{#include Event.svelte}
```

## Restricting the selectable date range

Use `availableFrom` and/or `availableTo` props to restrict the selectable date range.

```svelte example class="h-[430px]"
{#include Restricting.svelte}
```

## Local translation

Set `translationLocale` to change translation. The following example shows German date format (DD.MM.YYYY) but English text.

```svelte example class="h-[430px]"
{#include Local.svelte}
```

## Accessing Datepicker Element with elementRef

```svelte example class="h-[430px]"
{#include ElementRef.svelte}
```

## Usage & Localization

```svelte example class="h-[530px]"
{#include Usage.svelte}
```

## actionSlot

Add `actionSlot` snippet with `selectedDate`, `handleClear`, `handleApply`, `close` params.

```svelte example
{#include ActionSlot.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName} />

## References

- [Flowbite Datepicker (JavaScript)](https://flowbite.com/docs/plugins/Datepicker/)

<GitHubCompoLinks />
