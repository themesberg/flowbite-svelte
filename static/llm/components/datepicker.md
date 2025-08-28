# Svelte Datepicker - Flowbite


The Datepicker component provides an interactive calendar interface for selecting single dates or date ranges. It's fully integrated with flowbite-svelte's design system and offers various customization options.

## Setup

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>
```

## Default Datepicker

Use the Datepicker for single date selection. The selected date is bound to the `value` prop.

```svelte
{#include Default.svelte}
```

## Date Range Selection

Enable date range selection using the `range` prop. The start and end dates are bound to `rangeFrom` and `rangeTo` respectively.

```svelte
{#include Range.svelte}
```

## Inline Datepicker

Use the `inline` prop to display the calendar without a popup.

```svelte
{#include Inline.svelte}
```

## Color and classes

Select one of the following colors for the `color` prop:
`primary`(default), `blue`, `red`, `green`, `yellow`, `purple`, `dark`, `light`, `alternative`, `secondary`, `gray`, `orange`, `amber`, `lime`, `emerald`, `teal`, `cyan`, `sky`, `indigo`, `violet`, `fuchsia`, `pink`, `rose`.

The `classes` prop has the following `class` for disposal: `base`, `input`, `titleVariant`, `polite`, `button`,`actionButtons`, `columnHeader`, `grid`, `nav`, `dayButton`, `monthButton`.

```svelte
{#include Color.svelte}
```

## Localization

Set a specific locale for date formatting using the `locale` prop.

```svelte
{#include Localization.svelte}
```

## Custom Date Format

Specify a custom date format using the `dateFormat` prop.

```svelte
{#include Format.svelte}
```

## Action Buttons

Add action buttons (Today, Clear, Apply) using the `showActionButtons` prop. You can also listen for the `clear` and `apply` events to perform specific actions when these buttons are clicked.

```svelte
{#include Action.svelte}
```

## Custom Title

Add a custom title to the Datepicker using the `title` prop.

```svelte
{#include Title.svelte}
```

## Disabled State

Use the `disabled` prop to disable the Datepicker.

```svelte
{#include Disabled.svelte}
```

## Required Field

Mark the Datepicker as a required field using the `required` prop.

```svelte
{#include Required.svelte}
```

## Custom First Day of Week

Set a custom first day of the week using the `firstDayOfWeek` prop.

```svelte
{#include First.svelte}
```

## Event Handling

Listen for date selection events using the `onselect` event.

```svelte
{#include Event.svelte}
```

## Restricting the selectable date range

Use `availableFrom` and/or `availableTo` props to restrict the selectable date range.

```svelte
{#include Restricting.svelte}
```

## Local translation

Set `translationLocale` to change translation. The following example shows German date format (DD.MM.YYYY) but English text.

```svelte
{#include Local.svelte}
```

## Accessing Datepicker Element with elementRef

```svelte
{#include ElementRef.svelte}
```

## Usage & Localization

```svelte
{#include Usage.svelte}
```

## actionSlot

Add `actionSlot` snippet with `selectedDate`, `handleClear`, `handleApply`, `close` params.

```svelte
{#include ActionSlot.svelte}
```

## Component data

### Datepicker

#### Types

[DatepickerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L457)

#### Props

- value: $bindable()
- defaultDate: null
- range: false
- rangeFrom: $bindable()
- rangeTo: $bindable()
- availableFrom: null
- availableTo: null
- locale: "default"
- translationLocale: locale
- firstDayOfWeek: 0
- dateFormat
- placeholder: "Select date"
- disabled: false
- required: false
- inputClass: ""
- color: "primary"
- inline: false
- autohide: true
- showActionButtons: false
- title: ""
- onselect
- onclear
- onapply
- btnClass
- inputmode: "none"
- classes
- monthColor: "alternative"
- monthBtnSelected: "bg-primary-500 text-white"
- monthBtn: "text-gray-700 dark:text-gray-300"
- class: className
- elementRef: $bindable()
- actionSlot


## References

- [Flowbite Datepicker (JavaScript)](https://flowbite.com/docs/plugins/Datepicker/)


