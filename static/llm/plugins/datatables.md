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

<Table {items} />

```svelte
<script lang="ts">
  import { Table } from "@flowbite-svelte-plugins/datatable";
  import items from "./data/sample.json";
</script>

<Table {items} />
```

## Snippets

Use `captionSlot` and `footerSlot` `snippet`s.

<Table {items}>
	{#snippet captionSlot()}
		<Heading tag="h5" class="text-left text-primary-700">Caption</Heading>
		<P
			>Browse a list of Flowbite products designed to help you work and play, stay organized, get
			answers, keep in touch, grow your business, and more.</P
		>
	{/snippet}
	{#snippet footerSlot()}
		<tr>
			<td
				colspan={4}
				class="whitespace-normal text-left text-base font-normal leading-normal tracking-normal text-gray-900 dark:text-white"
			><Span highlight="red" class="bold">footerSlot:</Span>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam placeat eum
				facilis aliquam, adipisci consequuntur excepturi rerum distinctio illum quibusdam neque
				magni quaerat dolorum hic labore repellat omnis? Quisquam?
			</td>
		</tr>
	{/snippet}
</Table>

```svelte
<script lang="ts">
  import { Table } from "@flowbite-svelte-plugins/datatable";
  import { P, Heading } from "flowbite-svelte";
  import items from "./data/sample.json";
</script>

<Table {items}>
  {#snippet captionSlot()}
    <Heading tag="h5" class="text-primary-700 text-left">Caption</Heading>
    <P>Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</P>
  {/snippet}
  {#snippet footerSlot()}
    <tr>
      <td colspan={4} class="text-left text-base leading-normal font-normal tracking-normal whitespace-normal text-gray-900 dark:text-white">
        <Span highlight="red" class="bold">footerSlot:</Span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam placeat eum facilis aliquam, adipisci consequuntur excepturi rerum distinctio illum quibusdam neque magni quaerat dolorum hic labore repellat omnis? Quisquam?
      </td>
    </tr>
  {/snippet}
</Table>
```

## searchable and sortable

`searchable` and `sortable` options are `true` as default. You can disable it as the following example.

<Table {items} dataTableOptions={{searchable: false, sortable: false}} />

```svelte
<Table {items} dataTableOptions={{ searchable: false, sortable: false }} />
```

## Filtering data

Use the following example to enable filtering data based on a search query for each column.
Enabling search for each individual data column is an advanced way of letting users browse complex data.

<Table items={products} dataTableOptions={filterOptions} />

```svelte
<script lang="ts">
  import { Table } from "@flowbite-svelte-plugins/datatable";
  import products from "./data/products.json";
  import type { DataTableOptions } from "simple-datatables";

  const filterOptions: DataTableOptions = {
    tableRender: (data: any[], table: any, type: string) => {
      if (type === "print") {
        return table;
      }

      const tHead = table.childNodes[0];
      const filterHeaders = {
        nodeName: "TR",
        attributes: {
          class: "search-filtering-row"
        },
        childNodes: tHead.childNodes[0].childNodes.map((_th: any, index: number) => ({
          nodeName: "TH",
          childNodes: [
            {
              nodeName: "INPUT",
              attributes: {
                class: "datatable-input",
                type: "search",
                placeholder: `Filter column ${index + 1}`,
                "data-columns": `[${index}]`
              }
            }
          ]
        }))
      };

      tHead.childNodes.push(filterHeaders);
      return table;
    }
  };
</script>

<Table items={products} dataTableOptions={filterOptions} />
```

## Table pagination

Pagination is enabled by default for all datatables, however, you can disable it by setting the option paging to false. Use the perPage option to specify how many data rows to show by default.

You can also set the perPageSelect option to set the selection options of the table.

<Table items={aimodels} dataTableOptions={paginationOptions} />

```svelte
<script lang="ts">
  import { Table } from "@flowbite-svelte-plugins/datatable";
  import aimodels from "./data/aimodels.json";
  import type { DataTableOptions } from "simple-datatables";

  const paginationOptions: DataTableOptions = {
    paging: true,
    perPage: 5,
    perPageSelect: [5, 10, 15, 20, 25],
    sortable: false
  };
</script>

<Table items={aimodels} dataTableOptions={paginationOptions} />
```

## Selecting rows

Use this example to enable the selection of rows by clicking anywhere one of the table row elements.

Use `selectable` true and `rowRender` option to enable multi selection. Use `multiSelect` false to make single selection.

<Table selectable {items} dataTableOptions={selectRowsOptions} />

```svelte
<script lang="ts">
  import { Table } from "@flowbite-svelte-plugins/datatable";
  import items from "./data/sample.json";

  const selectRowsOptions = {
    rowRender: (row: any, tr: any, _index: number) => {
      if (!tr.attributes) {
        tr.attributes = {};
      }
      if (!tr.attributes.class) {
        tr.attributes.class = "";
      }
      if (row.selected) {
        tr.attributes.class += " selected";
      } else {
        tr.attributes.class = tr.attributes.class.replace(" selected", "");
      }
      return tr;
    }
  };
</script>

<Table selectable {items} dataTableOptions={selectRowsOptions} />
```

## Custom Cell Renderer

<Table dataTableOptions={cellRendererOptions} />

```svelte
<script lang="ts">
  import { Table } from "@flowbite-svelte-plugins/datatable";
  import type { DataTableOptions } from "simple-datatables";

  // Define types for the render function parameters
  interface CellNode {
    nodeName: string;
    attributes?: Record<string, string | number>;
    childNodes?: (CellNode | TextNode)[];
  }

  interface TextNode {
    nodeName: "#text";
    data: string;
  }

  interface TableCell {
    childNodes: (CellNode | TextNode)[];
    data: any;
  }

  interface TableRow {
    attributes?: Record<string, string>;
    cells: TableCell[];
  }

  // Type the render functions properly
  const renderIcon = function (data: any, _cell: TableCell, _dataIndex: number, _cellIndex: number): string {
    if (data === "Latte") {
      return `☕ ${data}`;
    } else if (data === "Green tea") {
      return `🍵 ${data}`;
    }
    return `🌿 ${data}`;
  };

  // Price column cell manipulation
  const renderButton = function (data: any, cell: TableCell, dataIndex: number, _cellIndex: number): void {
    cell.childNodes.push({
      nodeName: "BUTTON",
      attributes: {
        "data-row": dataIndex,
        class: "buy-now"
      },
      childNodes: [
        {
          nodeName: "#text",
          data: "Buy Now!"
        }
      ]
    });
  };

  // Caffeinated column cell manipulation
  const renderYesNo = function (data: any, cell: TableCell, _dataIndex: number, _cellIndex: number): void {
    if ([true, false].includes(data)) {
      cell.childNodes = [
        {
          nodeName: "SPAN",
          attributes: {
            class: data === true ? "caffeinated" : "uncaffeinated"
          },
          childNodes: [
            {
              nodeName: "#text",
              data: data === true ? "Yes" : "No"
            }
          ]
        }
      ];
    }
  };

  // Numbers with styling
  const renderHighLow = function (data: any, cell: TableCell, _dataIndex: number, _cellIndex: number): void {
    const cellTextNode = cell.childNodes[0];
    const currencyNode: CellNode = {
      nodeName: "SPAN",
      attributes: {
        class: "currency "
      },
      childNodes: [cellTextNode]
    };
    cell.childNodes = [currencyNode];

    if (data < 0) {
      currencyNode.attributes!.class += "currency--loss";
    } else if (data > 0) {
      currencyNode.attributes!.class += "currency--profit";
    } else if (data === 0) {
      currencyNode.attributes!.class += "currency--zero";
    }
  };

  const data = {
    headings: ["ID", "Drink", "Price", "Caffeinated", "Profit"],
    data: [
      [574, "Latte", 4.0, false, 0.0],
      [984, "Herbal tea", 3.0, false, 0.56],
      [312, "Green tea", 3.0, true, 1.72],
      [312, "Latte", 3.0, true, -1.21],
      [312, "Green tea", 3.0, false, 0.0],
      [312, "Green tea", 3.0, false, 0.0],
      [312, "Green tea", 3.0, true, 1.72],
      [312, "Latte", 3.0, true, 1.72],
      [312, "Green tea", 3.0, true, -1.21],
      [312, "Green tea", 3.0, false, 0.0],
      [312, "Green tea", 3.0, true, 1.72],
      [312, "Green tea", 3.0, true, 1.72],
      [312, "Latte", 3.0, false, 0.0],
      [312, "Latte", 3.0, true, 1.72],
      [312, "Green tea", 3.0, false, 0.0],
      [312, "Green tea", 3.0, true, 1.72],
      [312, "Latte", 3.0, false, 0.0],
      [312, "Latte", 3.0, true, -1.21],
      [312, "Latte", 3.0, true, 1.72],
      [312, "Latte", 3.0, false, 0.0],
      [312, "Latte", 3.0, false, 0.0],
      [312, "Latte", 3.0, true, 1.72],
      [312, "Green tea", 3.0, true, -1.21],
      [312, "Green tea", 3.0, true, -1.21],
      [312, "Green tea", 3.0, true, -1.21]
    ]
  } as const;

  const cellRendererOptions: DataTableOptions = {
    data,
    rowRender: (row: TableRow, tr: TableRow, _index: number) => {
      if ([true, false].includes(row.cells[3].data)) {
        if (!tr.attributes) {
          tr.attributes = {};
        }
        if (!tr.attributes.class) {
          tr.attributes.class = row.cells[3].data === true ? "yes" : "no";
        } else {
          tr.attributes.class += row.cells[3].data === true ? " yes" : " no";
        }
      }
    },
    columns: [
      {
        select: 0,
        hidden: true,
        type: "number"
      },
      {
        select: 1,
        render: renderIcon,
        type: "string"
      },
      {
        select: 2,
        render: renderButton,
        type: "number"
      },
      {
        select: 3,
        render: renderYesNo,
        type: "boolean"
      },
      {
        select: 4,
        render: renderHighLow,
        type: "number"
      }
    ]
  };
</script>

<Table dataTableOptions={cellRendererOptions} />
```

## Export

<Table bind:this={tableComponent} {items} />

<div class="mt-4 space-x-2">
	<Button onclick={handleCSV}>Export CSV</Button>
	<Button onclick={handleSQL}>Export SQL</Button>
	<Button onclick={handleTXT}>Export TXT</Button>
	<Button onclick={handleJSON}>Export JSON</Button>
</div>

```svelte
<script lang="ts">
  import { Table } from "@flowbite-svelte-plugins/datatable";
  import { Button } from "flowbite-svelte";
  import { exportJSON, exportCSV, exportTXT, exportSQL } from "simple-datatables";

  import items from "./data/sample.json";

  let tableComponent: any;

  const handleCSV = () => {
    if (tableComponent?.dataTableInstance) {
      exportCSV(tableComponent.dataTableInstance, {
        download: true,
        lineDelimiter: "\n",
        columnDelimiter: ";"
      });
    }
  };

  const handleSQL = () => {
    if (tableComponent?.dataTableInstance) {
      exportSQL(tableComponent.dataTableInstance, {
        download: true,
        tableName: "export_table"
      });
    }
  };

  const handleTXT = () => {
    if (tableComponent?.dataTableInstance) {
      exportTXT(tableComponent.dataTableInstance, {
        download: true
      });
    }
  };

  const handleJSON = () => {
    if (tableComponent?.dataTableInstance) {
      exportJSON(tableComponent.dataTableInstance, {
        download: true,
        space: 3
      });
    }
  };
</script>

<Table bind:this={tableComponent} {items} />

<div class="mt-4 space-x-2">
  <Button onclick={handleCSV}>Export CSV</Button>
  <Button onclick={handleSQL}>Export SQL</Button>
  <Button onclick={handleTXT}>Export TXT</Button>
  <Button onclick={handleJSON}>Export JSON</Button>
</div>
```

## Scroll Y

<Table items={products} dataTableOptions={scrollyOptions}/>

```svelte
<script lang="ts">
  import { Table } from "@flowbite-svelte-plugins/datatable";
  import products from "./data/products.json";
  import type { DataTableOptions } from "simple-datatables";

  const scrollyOptions: DataTableOptions = {
    paging: false,
    scrollY: "30vh",
    rowNavigation: true,
    tabIndex: 1
  };
</script>

<Table items={products} dataTableOptions={scrollyOptions} />
```

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

```svelte
<script lang="ts">
  import { Table } from "@flowbite-svelte-plugins/datatable";
  import items from "./data/sample.json";
  import type { DataTable } from "simple-datatables";
  import { Spinner } from "flowbite-svelte";

  let isTableLoading = true;
  let tableInstance: DataTable | null = null;

  function handleInitStart(): void {
    console.log("Table initialization started");
    isTableLoading = true;
  }

  function handleInitComplete(dataTable: DataTable): void {
    console.log("Table ready:", dataTable);
    isTableLoading = false;
  }

  function handleInitError(error: Error): void {
    console.error("Table initialization failed:", error);
    isTableLoading = false;
  }

  function handleSort(column: number, direction: string, dataTable: DataTable): void {
    console.log(`Column ${column} sorted ${direction}`);
  }

  function handleSearch(query: string, matched: any[], dataTable: DataTable): void {
    console.log(`Search: "${query}" found ${matched.length} results`);
  }

  function handleRowSelect(rowIndex: number, event: Event, dataTable: DataTable): void {
    console.log(`Row ${rowIndex} selected`);
  }
</script>

{#if isTableLoading}
  <div class="loading-spinner">
    <div class="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
    <span>Loading table...</span>
  </div>
{/if}

<Table {items} bind:isLoading={isTableLoading} bind:dataTableInstance={tableInstance} onInitStart={handleInitStart} onInitComplete={handleInitComplete} onInitError={handleInitError} onSort={handleSort} onSearch={handleSearch} onSelectRow={handleRowSelect} selectable={true} dataTableOptions={selectRowsOptions} />
```

## Component data

The component has the following props, type, and default values. See [types page](https://github.com/shinokada/flowbite-svelte-plugins/blob/main/apps/flowbite-svelte-chart/src/lib/types.ts) for type information.

<CompoAttributesViewer {components} plugin="datatable"/>

## References

- [@flowbite-svelte-plugins/datatable](https://github.com/shinokada/flowbite-svelte-plugins/blob/main/apps/flowbite-svelte-datatable/src/lib/Table.svelte)
