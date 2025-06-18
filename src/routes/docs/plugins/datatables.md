---
layout: componentLayout
title: Svelte DataTables - Flowbite
breadcrumb_title: Svelte DataTables
component_title: DataTables
dir: components
description: Use the datatable component to search, sort, filter, export and paginate table data of rows and columns for your web application.
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

  import { Badge, P } from "$lib"
  import { InfoCircleOutline } from "flowbite-svelte-icons";
</script>

The datatable component examples from Flowbite are open-source under the MIT License and they are based on the [simple-datatables repository](https://github.com/fiduswriter/simple-datatables) from GitHub.

This page provides multiple examples of datatable components where you can search, sort, filter, paginate and export table data up to thousands of entries.

All examples are responsive, dark mode and RTL support included and by installing the Flowbite-Svelte-DataTable plugin the custom styles will automatically be applied to the datatable components using Tailwind CSS.

## Installation

```svelte example hideOutput
pnpm i -D @flowbite-svelte-plugins/datatable simple-datatables
```

Update `app.css`:

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
## Component data

The component has the following props, type, and default values. See [types page](https://github.com/shinokada/flowbite-svelte-plugins/blob/main/apps/flowbite-svelte-chart/src/lib/types.ts) for type information.

<CompoAttributesViewer {components} plugin="datatable"/>

## References

- [@flowbite-svelte-plugins/datatable](https://github.com/shinokada/flowbite-svelte-plugins/blob/main/apps/flowbite-svelte-datatable/src/lib/Table.svelte)