---
layout: componentLayout
title: Svelte DataTables - Flowbite
breadcrumb_title: Svelte DataTables
component_title: DataTables
dir: components
description: Use the datatable component to search, sort, filter and paginate table data of rows and columns for your web application.
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks } from '../../utils'
  import componentData1 from '../../component-data/Chart.json'
  import componentData2 from '../../component-data/Card.json'
  const components = 'Table'

  import { Table } from '@flowbite-svelte-plugins/datatable';
	import items from './data/sample.json';
  // filtering
  import products from './data/products.json';
  import type { DataTableOptions } from 'simple-datatables';

	const filterOptions: DataTableOptions = {
		tableRender: (data: any[], table: any, type: string) => {
			if (type === 'print') {
				return table;
			}

			const tHead = table.childNodes[0];
			const filterHeaders = {
				nodeName: 'TR',
				attributes: {
					class: 'search-filtering-row'
				},
				childNodes: tHead.childNodes[0].childNodes.map((_th: any, index: number) => ({
					nodeName: 'TH',
					childNodes: [
						{
							nodeName: 'INPUT',
							attributes: {
								class: 'datatable-input',
								type: 'search',
								placeholder: `Filter column ${index + 1}`,
								'data-columns': `[${index}]`
							}
						}
					]
				}))
			};

			tHead.childNodes.push(filterHeaders);
			return table;
		}
	};

  // selecting rows
  const selectRowsOptions = {
		rowRender: (row: any, tr: any, _index: number) => {
			if (!tr.attributes) {
				tr.attributes = {};
			}
			if (!tr.attributes.class) {
				tr.attributes.class = '';
			}
			if (row.selected) {
				tr.attributes.class += ' selected';
			} else {
				tr.attributes.class = tr.attributes.class.replace(' selected', '');
			}
			return tr;
		}
	};

  // pagination
  import aimodels from './data/aimodels.json';

	const paginationOptions: DataTableOptions = {
		paging: true,
		perPage: 5,
		perPageSelect: [5, 10, 15, 20, 25],
		sortable: false
	};

  // cellrenderer
  // Define types for the render function parameters
	interface CellNode {
		nodeName: string;
		attributes?: Record<string, string | number>;
		childNodes?: (CellNode | TextNode)[];
	}

	interface TextNode {
		nodeName: '#text';
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
	const renderIcon = function (
		data: any,
		_cell: TableCell,
		_dataIndex: number,
		_cellIndex: number
	): string {
		if (data === 'Latte') {
			return `☕ ${data}`;
		} else if (data === 'Green tea') {
			return `🍵 ${data}`;
		}
		return `🌿 ${data}`;
	};

	// Price column cell manipulation
	const renderButton = function (
		data: any,
		cell: TableCell,
		dataIndex: number,
		_cellIndex: number
	): void {
		cell.childNodes.push({
			nodeName: 'BUTTON',
			attributes: {
				'data-row': dataIndex,
				class: 'buy-now'
			},
			childNodes: [
				{
					nodeName: '#text',
					data: 'Buy Now!'
				}
			]
		});
	};

	// Caffeinated column cell manipulation
	const renderYesNo = function (
		data: any,
		cell: TableCell,
		_dataIndex: number,
		_cellIndex: number
	): void {
		if ([true, false].includes(data)) {
			cell.childNodes = [
				{
					nodeName: 'SPAN',
					attributes: {
						class: data === true ? 'caffeinated' : 'uncaffeinated'
					},
					childNodes: [
						{
							nodeName: '#text',
							data: data === true ? 'Yes' : 'No'
						}
					]
				}
			];
		}
	};

	// Numbers with styling
	const renderHighLow = function (
		data: any,
		cell: TableCell,
		_dataIndex: number,
		_cellIndex: number
	): void {
		const cellTextNode = cell.childNodes[0];
		const currencyNode: CellNode = {
			nodeName: 'SPAN',
			attributes: {
				class: 'currency '
			},
			childNodes: [cellTextNode]
		};
		cell.childNodes = [currencyNode];

		if (data < 0) {
			currencyNode.attributes!.class += 'currency--loss';
		} else if (data > 0) {
			currencyNode.attributes!.class += 'currency--profit';
		} else if (data === 0) {
			currencyNode.attributes!.class += 'currency--zero';
		}
	};

	const data = {
		headings: ['ID', 'Drink', 'Price', 'Caffeinated', 'Profit'],
		data: [
			[574, 'Latte', 4.0, false, 0.0],
			[984, 'Herbal tea', 3.0, false, 0.56],
			[312, 'Green tea', 3.0, true, 1.72],
			[312, 'Latte', 3.0, true, -1.21],
			[312, 'Green tea', 3.0, false, 0.0],
			[312, 'Green tea', 3.0, false, 0.0],
			[312, 'Green tea', 3.0, true, 1.72],
			[312, 'Latte', 3.0, true, 1.72],
			[312, 'Green tea', 3.0, true, -1.21],
			[312, 'Green tea', 3.0, false, 0.0],
			[312, 'Green tea', 3.0, true, 1.72],
			[312, 'Green tea', 3.0, true, 1.72],
			[312, 'Latte', 3.0, false, 0.0],
			[312, 'Latte', 3.0, true, 1.72],
			[312, 'Green tea', 3.0, false, 0.0],
			[312, 'Green tea', 3.0, true, 1.72],
			[312, 'Latte', 3.0, false, 0.0],
			[312, 'Latte', 3.0, true, -1.21],
			[312, 'Latte', 3.0, true, 1.72],
			[312, 'Latte', 3.0, false, 0.0],
			[312, 'Latte', 3.0, false, 0.0],
			[312, 'Latte', 3.0, true, 1.72],
			[312, 'Green tea', 3.0, true, -1.21],
			[312, 'Green tea', 3.0, true, -1.21],
			[312, 'Green tea', 3.0, true, -1.21]
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
					tr.attributes.class = row.cells[3].data === true ? 'yes' : 'no';
				} else {
					tr.attributes.class += row.cells[3].data === true ? ' yes' : ' no';
				}
			}
		},
		columns: [
			{
				select: 0,
				hidden: true,
				type: 'number'
			},
			{
				select: 1,
				render: renderIcon,
				type: 'string'
			},
			{
				select: 2,
				render: renderButton,
				type: 'number'
			},
			{
				select: 3,
				render: renderYesNo,
				type: 'boolean'
			},
			{
				select: 4,
				render: renderHighLow,
				type: 'number'
			}
		]
	};

  // Export
  import { exportJSON, exportCSV, exportTXT, exportSQL } from 'simple-datatables';

	let tableComponent: any;

	const handleCSV = () => {
		if (tableComponent?.dataTableInstance) {
			exportCSV(tableComponent.dataTableInstance, {
				download: true,
				lineDelimiter: '\n',
				columnDelimiter: ';'
			});
		}
	};

	const handleSQL = () => {
		if (tableComponent?.dataTableInstance) {
			exportSQL(tableComponent.dataTableInstance, {
				download: true,
				tableName: 'export_table'
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

  import { Badge, P, Button } from "$lib"
  import { InfoCircleOutline } from "flowbite-svelte-icons";
</script>

The datatable component examples from Flowbite are open-source under the MIT License and they are based on the [simple-datatables repository](https://github.com/fiduswriter/simple-datatables) from GitHub.

This page provides multiple examples of datatable components where you can search, sort, filter, and paginate table data up to thousands of entries.

All examples are responsive, dark mode and RTL support included and by installing the Flowbite-Svelte-DataTable plugin the custom styles will automatically be applied to the datatable components using Tailwind CSS.

## Installation

```svelte example hideOutput
pnpm i -D @flowbite-svelte-plugins/datatable simple-datatables
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

```svelte example hideOutput
<script lang="ts">
	import { Table } from '@flowbite-svelte-plugins/datatable';
	import items from './data/sample.json';
</script>

<Table {items} />
```

## searchable and sortable
`searchable` and `sortable` options are `true` as default. You can disable it as the following example.

<Table {items} dataTableOptions={{searchable: false, sortable: false}} />

```svelte example hideOutput
<Table {items} dataTableOptions={{searchable: false, sortable: false}} />
```

## Filtering data
Use the following example to enable filtering data based on a search query for each column.
Enabling search for each individual data column is an advanced way of letting users browse complex data.

<Table items={products} dataTableOptions={filterOptions} />

```svelte example hideOutput
<script lang="ts">
	import { Table } from '@flowbite-svelte-plugins/datatable';
	import products from './data/products.json';
	import type { DataTableOptions } from 'simple-datatables';

	const filterOptions: DataTableOptions = {
		tableRender: (data: any[], table: any, type: string) => {
			if (type === 'print') {
				return table;
			}

			const tHead = table.childNodes[0];
			const filterHeaders = {
				nodeName: 'TR',
				attributes: {
					class: 'search-filtering-row'
				},
				childNodes: tHead.childNodes[0].childNodes.map((_th: any, index: number) => ({
					nodeName: 'TH',
					childNodes: [
						{
							nodeName: 'INPUT',
							attributes: {
								class: 'datatable-input',
								type: 'search',
								placeholder: `Filter column ${index + 1}`,
								'data-columns': `[${index}]`
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


```svelte example hideOutput
<script lang="ts">
	import { Table } from '@flowbite-svelte-plugins/datatable';
	import aimodels from './data/aimodels.json';
	import type { DataTableOptions } from 'simple-datatables';

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

```svelte example hideOutput
<script lang="ts">
	import { Table } from '@flowbite-svelte-plugins/datatable';
	import items from './data/sample.json';

	const selectRowsOptions = {
		rowRender: (row: any, tr: any, _index: number) => {
			if (!tr.attributes) {
				tr.attributes = {};
			}
			if (!tr.attributes.class) {
				tr.attributes.class = '';
			}
			if (row.selected) {
				tr.attributes.class += ' selected';
			} else {
				tr.attributes.class = tr.attributes.class.replace(' selected', '');
			}
			return tr;
		}
	};
</script>

<Table selectable {items} dataTableOptions={selectRowsOptions} />
```

## Custom Cell Renderer

<Table dataTableOptions={cellRendererOptions} />

```svelte example hideOutput
<script lang="ts">
	import { Table } from '@flowbite-svelte-plugins/datatable';
	import type { DataTableOptions } from 'simple-datatables';

	// Define types for the render function parameters
	interface CellNode {
		nodeName: string;
		attributes?: Record<string, string | number>;
		childNodes?: (CellNode | TextNode)[];
	}

	interface TextNode {
		nodeName: '#text';
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
	const renderIcon = function (
		data: any,
		_cell: TableCell,
		_dataIndex: number,
		_cellIndex: number
	): string {
		if (data === 'Latte') {
			return `☕ ${data}`;
		} else if (data === 'Green tea') {
			return `🍵 ${data}`;
		}
		return `🌿 ${data}`;
	};

	// Price column cell manipulation
	const renderButton = function (
		data: any,
		cell: TableCell,
		dataIndex: number,
		_cellIndex: number
	): void {
		cell.childNodes.push({
			nodeName: 'BUTTON',
			attributes: {
				'data-row': dataIndex,
				class: 'buy-now'
			},
			childNodes: [
				{
					nodeName: '#text',
					data: 'Buy Now!'
				}
			]
		});
	};

	// Caffeinated column cell manipulation
	const renderYesNo = function (
		data: any,
		cell: TableCell,
		_dataIndex: number,
		_cellIndex: number
	): void {
		if ([true, false].includes(data)) {
			cell.childNodes = [
				{
					nodeName: 'SPAN',
					attributes: {
						class: data === true ? 'caffeinated' : 'uncaffeinated'
					},
					childNodes: [
						{
							nodeName: '#text',
							data: data === true ? 'Yes' : 'No'
						}
					]
				}
			];
		}
	};

	// Numbers with styling
	const renderHighLow = function (
		data: any,
		cell: TableCell,
		_dataIndex: number,
		_cellIndex: number
	): void {
		const cellTextNode = cell.childNodes[0];
		const currencyNode: CellNode = {
			nodeName: 'SPAN',
			attributes: {
				class: 'currency '
			},
			childNodes: [cellTextNode]
		};
		cell.childNodes = [currencyNode];

		if (data < 0) {
			currencyNode.attributes!.class += 'currency--loss';
		} else if (data > 0) {
			currencyNode.attributes!.class += 'currency--profit';
		} else if (data === 0) {
			currencyNode.attributes!.class += 'currency--zero';
		}
	};

	const data = {
		headings: ['ID', 'Drink', 'Price', 'Caffeinated', 'Profit'],
		data: [
			[574, 'Latte', 4.0, false, 0.0],
			[984, 'Herbal tea', 3.0, false, 0.56],
			[312, 'Green tea', 3.0, true, 1.72],
			[312, 'Latte', 3.0, true, -1.21],
			[312, 'Green tea', 3.0, false, 0.0],
			[312, 'Green tea', 3.0, false, 0.0],
			[312, 'Green tea', 3.0, true, 1.72],
			[312, 'Latte', 3.0, true, 1.72],
			[312, 'Green tea', 3.0, true, -1.21],
			[312, 'Green tea', 3.0, false, 0.0],
			[312, 'Green tea', 3.0, true, 1.72],
			[312, 'Green tea', 3.0, true, 1.72],
			[312, 'Latte', 3.0, false, 0.0],
			[312, 'Latte', 3.0, true, 1.72],
			[312, 'Green tea', 3.0, false, 0.0],
			[312, 'Green tea', 3.0, true, 1.72],
			[312, 'Latte', 3.0, false, 0.0],
			[312, 'Latte', 3.0, true, -1.21],
			[312, 'Latte', 3.0, true, 1.72],
			[312, 'Latte', 3.0, false, 0.0],
			[312, 'Latte', 3.0, false, 0.0],
			[312, 'Latte', 3.0, true, 1.72],
			[312, 'Green tea', 3.0, true, -1.21],
			[312, 'Green tea', 3.0, true, -1.21],
			[312, 'Green tea', 3.0, true, -1.21]
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
					tr.attributes.class = row.cells[3].data === true ? 'yes' : 'no';
				} else {
					tr.attributes.class += row.cells[3].data === true ? ' yes' : ' no';
				}
			}
		},
		columns: [
			{
				select: 0,
				hidden: true,
				type: 'number'
			},
			{
				select: 1,
				render: renderIcon,
				type: 'string'
			},
			{
				select: 2,
				render: renderButton,
				type: 'number'
			},
			{
				select: 3,
				render: renderYesNo,
				type: 'boolean'
			},
			{
				select: 4,
				render: renderHighLow,
				type: 'number'
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

```svelte example hideOutput
<script lang="ts">
	import { Table } from '@flowbite-svelte-plugins/datatable';
	import { Button } from 'flowbite-svelte';
	import { exportJSON, exportCSV, exportTXT, exportSQL } from 'simple-datatables';

	import items from './data/sample.json';

	let tableComponent: any;

	const handleCSV = () => {
		if (tableComponent?.dataTableInstance) {
			exportCSV(tableComponent.dataTableInstance, {
				download: true,
				lineDelimiter: '\n',
				columnDelimiter: ';'
			});
		}
	};

	const handleSQL = () => {
		if (tableComponent?.dataTableInstance) {
			exportSQL(tableComponent.dataTableInstance, {
				download: true,
				tableName: 'export_table'
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

## Component data

The component has the following props, type, and default values. See [types page](https://github.com/shinokada/flowbite-svelte-plugins/blob/main/apps/flowbite-svelte-chart/src/lib/types.ts) for type information.

<CompoAttributesViewer {components} plugin="datatable"/>

## References

- [@flowbite-svelte-plugins/datatable](https://github.com/shinokada/flowbite-svelte-plugins/blob/main/apps/flowbite-svelte-datatable/src/lib/Table.svelte)