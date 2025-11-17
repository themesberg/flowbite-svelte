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

```svelte
<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";

  let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
    from: undefined,
    to: undefined
  });
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="blue" />
  <P class="mt-4">
    Selected range:
    {dateRange.from ? dateRange.from.toLocaleDateString() : "None"} -
    {dateRange.to ? dateRange.to.toLocaleDateString() : "None"}
  </P>
</div>
```

## Inline Datepicker

Use the `inline` prop to display the calendar without a popup.

```svelte
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

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker
    color="blue"
    classes={{ polite: "hover:text-blue-700!", dayButton: "hover:text-blue-400", titleVariant: "text-blue-800", monthButton: "text-blue-700" }}
    title="Select your preferred date"
    monthBtnSelected="bg-blue-200"
  />
</div>
```

## Localization

Set a specific locale for date formatting using the `locale` prop.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker locale="fr-FR" />
</div>
```

## Custom Date Format

Specify a custom date format using the `dateFormat` prop.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker dateFormat={{ year: "numeric", month: "short", day: "2-digit" }} />
</div>
```

## Action Buttons

Add action buttons (Today, Clear, Apply) using the `showActionButtons` prop. You can also listen for the `clear` and `apply` events to perform specific actions when these buttons are clicked.

```svelte
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

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker title="Select your preferred date" />
</div>
```

## Disabled State

Use the `disabled` prop to disable the Datepicker.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker disabled />
</div>
```

## Required Field

Mark the Datepicker as a required field using the `required` prop.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker required />
</div>
```

## Custom First Day of Week

Set a custom first day of the week using the `firstDayOfWeek` prop.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker firstDayOfWeek={3} />
</div>
```

## Event Handling

Listen for date selection events using the `onselect` event.

```svelte
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

```svelte
<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";
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

## Local translation

Set `translationLocale` to change translation. The following example shows German date format (DD.MM.YYYY) but English text.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker locale="de-DE" translationLocale="en-US" />
</div>
```

## Accessing Datepicker Element with elementRef

```svelte
<script lang="ts">
  import { Datepicker, Button } from "flowbite-svelte";

  let datepickerRef: HTMLInputElement | undefined = $state();
  let selectedDate: Date | undefined = $state();
</script>

<Datepicker bind:elementRef={datepickerRef} bind:value={selectedDate} placeholder="Select a date" />

<div class="my-4">
  <Button onclick={() => datepickerRef?.focus()}>Focus Datepicker</Button>

  <Button onclick={() => datepickerRef?.select()}>Select All Text</Button>

  <Button onclick={() => datepickerRef?.blur()}>Blur Datepicker</Button>
</div>
```

## Usage & Localization

```svelte
<script lang="ts">
  import { Datepicker, P, Label, Select, Button } from "flowbite-svelte";

  let value = $state<Date | undefined>(undefined);
  let locale = $state("de");
  const locales = [
    { value: "en-US", name: "en-US (US)" },
    { value: "en-GB", name: "en-GB (UK)" },
    { value: "de", name: "de (Germany)" },
    { value: "fr", name: "fr (France)" },
    { value: "ja", name: "ja (Japan)" }
  ];

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log("Selected date:", value ? value.toLocaleDateString(locale) : "None");
  };

  $effect(() => {
    // Only clear if locale is actually changing from a previous value
    if (locale) {
      value = undefined;
    }
  });
</script>

<div class="overflow-visible p-4">
  <h1 class="mb-4 text-xl font-bold">Datepicker Locale Test</h1>
  <form onsubmit={handleSubmit} class="mb-4">
    <Label>
      Choose locale:
      <Select class="mb-4 w-40 rounded p-2" items={locales} bind:value={locale} />
    </Label>

    <Datepicker bind:value {locale} translationLocale={locale} placeholder="Type a date or use calendar" />

    <P class="mt-4">
      <strong>Selected Locale:</strong>
      {locale}
      <br />
      <strong>Selected Date:</strong>
      {value ? value.toLocaleDateString(locale) : "None"}
    </P>
    <Button type="submit" class="mt-4">Submit</Button>
  </form>
</div>
```

## actionSlot

Add `actionSlot` snippet with `selectedDate`, `handleClear`, `handleApply`, `close` params.

```svelte
<script lang="ts">
  import { Datepicker, P, Button } from "$lib";
  let selectedDate = $state<Date | undefined>(undefined);
  let lastAction = $state<string | undefined>();
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker bind:value={selectedDate} autohide={false}>
    {#snippet actionSlot({ selectedDate, handleClear, handleApply })}
      <div class="mt-2 flex gap-2">
        <Button size="sm" onclick={handleClear}>Clear</Button>
        <Button size="sm" onclick={() => selectedDate && handleApply(selectedDate)} disabled={!selectedDate}>Apply</Button>
        <Button size="sm" onclick={() => console.log("Selection:", selectedDate || "None")}>Show Selection</Button>
      </div>
    {/snippet}
  </Datepicker>
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
  <P class="mt-2">Last action: {lastAction}</P>
</div>

Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem rerum, optio adipisci illum at earum fugiat eius minus quae! Quisquam cumque architecto facilis? Tempora ipsum perferendis quo
explicabo minus.
```

## Input Props

```svelte
<script lang="ts">
  import { Label, Datepicker } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);
</script>

<Label class="mb-2 flex items-center font-bold italic">My Datepicker</Label>
<Datepicker bind:value={selectedDate} inputProps={{ id: "my-datepicker" }} />
```

## Component data

### Datepicker

#### Types

[DatepickerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L496)

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
- inputProps: {


## References

- [Flowbite Datepicker (JavaScript)](https://flowbite.com/docs/plugins/Datepicker/)
