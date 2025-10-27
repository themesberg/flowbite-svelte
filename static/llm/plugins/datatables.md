# Svelte DataTables - Flowbite


The datatable component examples from Flowbite are open-source under the MIT License and they are based on the [simple-datatables repository](https://github.com/fiduswriter/simple-datatables) from GitHub.

This page provides multiple examples of datatable components where you can search, sort, filter, and paginate table data up to thousands of entries.

All examples are responsive, dark mode and RTL support included and by installing the Flowbite-Svelte-DataTable plugin the custom styles will automatically be applied to the datatable components using Tailwind CSS.

## Installation

```svelte
pnpm i -D @flowbite-svelte-plugins/datatable
```

### app.d.ts

Update `app.d.ts` as the following:

```ts
declare global {
  namespace App {}
}

declare module "simple-datatables" {
  export { DataTable } from "simple-datatables/dist/dts/datatable";
  export { convertCSV, convertJSON } from "simple-datatables/dist/dts/convert";
  export { exportCSV, exportJSON, exportSQL, exportTXT } from "simple-datatables/dist/dts/export";
  export { createElement, isJson, isObject } from "simple-datatables/dist/dts/helpers";
  export { makeEditable } from "simple-datatables/dist/dts/editing";
  export { addColumnFilter } from "simple-datatables/dist/dts/column_filter";

  export type { DataTableOptions, DataTableConfiguration, ColumnOption, cellType, inputCellType, dataRowType, inputRowType, headerCellType, inputHeaderCellType, TableDataType, DataOption, renderType, nodeType, elementNodeType, textNodeType, cellDataType } from "simple-datatables/dist/dts/datatable";

  export interface SelectableDataRow {
    selected?: boolean;
    [key: string]: any;
  }
}

export {};
```

### app.css

```css
@source "../node_modules/simple-datatables/dist";
@source "../node_modules/@flowbite-svelte-plugins/datatable/dist";

.datatable-pagination .datatable-active a,
.datatable-pagination .datatable-active a:focus,
.datatable-pagination .datatable-active a:hover,
.datatable-pagination .datatable-active button,
.datatable-pagination .datatable-active button:focus,
.datatable-pagination .datatable-active button:hover {
  background-color: #ffe4de;
  cursor: default;
}

.datatable-wrapper .datatable-table tbody tr.selected {
  background-color: #fff1ee !important;
}
```

## Default datatable

Use this example to show table data with default sorting and pagination functionalities.

<Examples.DefaultDatatable />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/datatable/DefaultDatatable.svelte']}
/>

## Snippets

Use `captionSlot` and `footerSlot` `snippet`s.

<Examples.Slots />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/datatable/Slots.svelte']}
/>

## searchable and sortable

`searchable` and `sortable` options are `true` as default. You can disable it as the following example.

<Examples.TableSearch />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/datatable/TableSearch.svelte']}
/>

## Filtering data

Use the following example to enable filtering data based on a search query for each column.
Enabling search for each individual data column is an advanced way of letting users browse complex data.

<Examples.FilteringData />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/datatable/FilteringData.svelte']}
/>

## Table pagination

Pagination is enabled by default for all datatables, however, you can disable it by setting the option paging to false. Use the perPage option to specify how many data rows to show by default.

You can also set the perPageSelect option to set the selection options of the table.

<Examples.TablePagination />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/datatable/TablePagination.svelte']}
/>

## Selecting rows

Use this example to enable the selection of rows by clicking anywhere one of the table row elements.

Use `selectable` true and `rowRender` option to enable multi selection. Use `multiSelect` false to make single selection.

<Examples.SelectingRows />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/datatable/SelectingRows.svelte']}
/>

## Custom Cell Renderer

<Examples.CustomCellRenderer />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/datatable/CustomCellRenderer.svelte']}
/>

## Export

<Examples.Export />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/datatable/Export.svelte']}
/>

## Scroll Y

<Examples.Scrolly />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/datatable/Scrolly.svelte']}
/>

## AND Search

Try to search for "blossom 2014" in the two boxes. The OR-search will give you results that contain "2014" OR "Blossom", while the AND-search will only return results including both "2014" and "Blossom".

The search item separator for the extension column is ";" so that searching for "3147;5018" will return no results, but searching for "3147" or "5018" will return the row that contains that value.

<Table items={andsearch} dataTableOptions={andsearchOptions}/>

```svelte
<script lang="ts">
  import { Table } from "@flowbite-svelte-plugins/datatable";
  import andsearch from "./data/andsearch.json";
  import type { DataTableOptions } from "simple-datatables";

  const andsearchOptions: DataTableOptions = {
    perPageSelect: [5, 10, 15, ["All", -1]],
    columns: [
      {
        select: 1,
        searchItemSeparator: ";",
        ignorePunctuation: false
      },
      {
        select: 2,
        sortSequence: ["desc", "asc"]
      },
      {
        select: 3,
        sortSequence: ["desc"]
      },
      {
        select: 4,
        cellClass: "green",
        headerClass: "red"
      }
    ],
    template: (options, dom) => `<div class='${options.classes.top}'>
        <div class='${options.classes.dropdown}'>
            <label>
                <select class='${options.classes.selector}'></select> ${options.labels.perPage}
            </label>
        </div>
        <div class='${options.classes.search}'>
            <input class='${options.classes.input}' placeholder='OR search' type='search' title='${options.labels.searchTitle}'${dom.id ? ` aria-controls="${dom.id}"` : ""}>
            <input class='${options.classes.input}' placeholder='AND search' type='search' data-and="true" title='${options.labels.searchTitle}'${dom.id ? ` aria-controls="${dom.id}"` : ""}>
        </div>
        </div>
        <div class='${options.classes.container}'${options.scrollY.length ? ` style='height: ${options.scrollY}; overflow-Y: auto;'` : ""}></div>
        <div class='${options.classes.bottom}'>
        <div class='${options.classes.info}'></div>
        <nav class='${options.classes.pagination}'></nav>
    </div>`
  };
</script>

<Table items={andsearch} dataTableOptions={andsearchOptions} />
```

## DataTable Event Callbacks

The DataTable component exposes callback props that allow you to hook into the underlying simple-datatables library events. These callbacks provide access to the table lifecycle and user interactions.

### Initialization Events

#### `onInitStart`

Called when table initialization begins. Useful for showing loading indicators.

```ts
typescriptonInitStart?: () => void
```

#### `onInitComplete`

Called when the table is fully initialized and ready for interaction.

```ts
typescriptonInitComplete?: (dataTable: DataTable) => void
```

#### `onInitError`

Called if table initialization fails.

```ts
typescriptonInitError?: (error: Error) => void
```

### Data Events

#### `onRefresh`

Called when the table data is refreshed.

```ts
typescriptonRefresh?: (dataTable: DataTable) => void
```

#### `onUpdate`

Called when the table is updated (e.g., after sorting or filtering).

```ts
typescriptonUpdate?: (dataTable: DataTable) => void
```

### User Interaction Events

#### `onSort`

Called when a column is sorted.

```ts
typescriptonSort?: (column: number, direction: string, dataTable: DataTable) => void
```

#### `onSearch`

Called when a search is performed.

```ts
typescriptonSearch?: (query: string, matched: any[], dataTable: DataTable) => void
```

#### `onPage`

Called when pagination changes.

```ts
typescriptonPage?: (page: number, dataTable: DataTable) => void
```

### Selection Events (when selectable=true)

#### `onSelectRow`

Called when a row is selected.

```ts
typescriptonSelectRow?: (rowIndex: number, event: Event, dataTable: DataTable) => void
```

#### `onSelectAll`

Called when all rows are selected.

```ts
typescriptonSelectAll?: (dataTable: DataTable) => void
```

#### `onDeselectRow`

Called when a row is deselected.

```ts
typescriptonDeselectRow?: (rowIndex: number, dataTable: DataTable) => void
```

#### `onDeselectAll`

Called when all rows are deselected.

```ts
typescriptonDeselectAll?: (dataTable: DataTable) => void
```

### Example

<Examples.Callback />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/datatable/Callback.svelte']}
/>

## Component data

The component has the following props, type, and default values. See [types page](https://github.com/shinokada/flowbite-svelte-plugins/blob/main/apps/flowbite-svelte-chart/src/lib/types.ts) for type information.

<CompoAttributesViewer {components} plugin="datatable"/>

## References

- [@flowbite-svelte-plugins/datatable](https://github.com/shinokada/flowbite-svelte-plugins/blob/main/apps/flowbite-svelte-datatable/src/lib/Table.svelte)
