---
layout: componentLayout
title: Svelte Tables - Flowbite
breadcrumb_title: Svelte Tables
component_title: Table
dir: Components
description: Use the table component to show text, images, links, and other elements inside a structured set of data made up of rows and columns of table cells
thumnailSize: w-48
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A, Badge } from '$lib'
  const dirName = toKebabCase(component_title)
  import { InfoCircleOutline } from "flowbite-svelte-icons";
</script>

The table component represents a set of structured elements made up of rows and columns as table cells that can be used to show data sets to your website users.

Get started with multiple variants and styles of these table components.

<Badge class="p-4 w-full" color="green">
  <P class="flex items-center gap-2">
    <span class="inline-flex">
      <InfoCircleOutline class="h-6 w-6 text-green-600 dark:text-green-500 " />
      <span class="sr-only">Info Circle</span>
    </span>
    <span>
      Use <A href="/docs/plugins/datatables" target="_blank">@flowbite-svelte-plugins/datatable</A> to search, sort, filter and paginate table data of rows and columns for your web application.
    </span>
  </P>
</Badge>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from "flowbite-svelte";
</script>
```

## Default table

Use the following example of a responsive table component to show multiple rows and columns of text data.

```svelte example
{#include Default.svelte}
```

## Striped rows

Set the `striped` prop to `true` to alternate background colors of every second table row.

```svelte example
{#include Striped.svelte}
```

## Hover state

Set `hoverable` to `true` to change the background color of a data row when hovering over the element with the cursor.

```svelte example
{#include Hover.svelte}
```

## Checkbox

Checkboxes can be used inside table data rows to select multiple data sets and apply a bulk action.

```svelte example
{#include Checkbox.svelte}
```

## Table from data

```svelte example
{#include Data.svelte}
```

## Dynamic data

```svelte example
{#include Dynamic.svelte}
```

## Sorting by column

Please use [DataTable](https://flowbite-svelte.com/docs/plugins/datatables)

## Table head

By default, the `<TableHead>` component will create a single `<tr>` element without any preset attributes and properties for you, and the slot of this component is implicitly required to be permitted contents of the `<tr>` element. If you want to get more controllability of the table head rows, e.g., customize the style or use multiple head rows, set the value of `defaultRow` prop to `false`, and the slot of this component is then implicitly required to be zero or more `<tr>` elements.

```svelte example
{#include Head.svelte}
```

## Table foot

Use this example where the `<tfoot>` HTML element can be used in conjunction with the head and caption of the table component.

```svelte example
{#include Foot.svelte}
```

## Table caption

Improve accessibility by using a caption inside the table as a heading to better describe what the table is about for screen readers.

```svelte example
{#include Caption.svelte}
```

## Without border

Use this example of a table component without any border between the table cells.

```svelte example
{#include WithoutBorder.svelte}
```

## Table with shadow

Use this example to apply a shadow border to the table component.

```svelte example
{#include Shadow.svelte}
```

## Overflow scrolling

Use this example to enable horizontal scrolling if the content inside the table overflows that maximum width.

```svelte example
{#include Scrolling.svelte}
```

## TableSearch

Use the following example to search in a table.
For more advanced usage, please see [this page](https://flowbite-svelte.com/docs/plugins/datatables).

```svelte example
{#include Search.svelte}
```

## Table colors

Use one of colors from blue, green, red, yellow, purple for the `color` prop. The default color is gray. You can reset all color by using the `color="custom"`.

```svelte example
{#include Colors1.svelte}
```

```svelte example
{#include Colors2.svelte}
```

## Striped rows color

Use this example to apply a different color to every second row inside the table.

```svelte example
{#include StripedColor.svelte}
```

## Click and double-click on row

An example to use `onclick` (main row) and on:dblclick (expanded row)

```svelte example
{#include DoubleClick.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Tables](https://flowbite.com/docs/components/tables/)

## GitHub Links

<GitHubCompoLinks />

## Machine-Readable LLM Files

<LlmLink />
