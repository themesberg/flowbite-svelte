---
layout: tableLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow } from '../utils'
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch, Breadcrumb, BreadcrumbItem } from '$lib'
  
  
  import componentProps1 from '../props/Table.json'
  import componentProps2 from '../props/TableBodyCell.json'
  import componentProps3 from '../props/TableBodyRow.json'
  import componentProps4 from '../props/TableSearch.json'
	import componentProps5 from '../props/TableHead.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
  let items3 = componentProps3.props
  let items4 = componentProps4.props
	let items5 = componentProps5.props
  let propHeader = ['Name', 'Type', 'Default']

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let searchTerm = '';
	let items = [
		{ id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
		{ id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
		{ id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
		{ id: 4, maker: 'Saab', type: 'IJK', make: 2020 }
	];
	$: filteredItems = items.filter(
		(item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Tables</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Tables</h1>

<CompoDescription>Use the table component to show text, images, links, and other elements inside a structured set of data made up of rows and columns of table cells</CompoDescription>

<ExampleDiv>
<GitHubSource href="tables/Table.svelte">Table</GitHubSource>
<GitHubSource href="tables/TableBody.svelte">TableBody</GitHubSource>
<GitHubSource href="tables/TableBodyCell.svelte">TableBodyCell</GitHubSource>
<GitHubSource href="tables/TableBodyRow.svelte">TableBodyRow</GitHubSource>
<GitHubSource href="tables/TableHead.svelte">TableHead</GitHubSource>
<GitHubSource href="tables/TableHeadCell.svelte">TableHeadCell</GitHubSource>
<GitHubSource href="tables/TableSearch.svelte">TableSearch</GitHubSource>
</ExampleDiv>

The table component represents a set of structured elements made up of rows and columns as table cells that can be used to show data sets to your website users.

Get started with multiple variants and styles of these table components.


<Htwo label="Setup" />

```html
<script>
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
</script>
```

<Htwo label="Default table" />

Use the following example of a responsive table component to show multiple rows and columns of text data.

<ExampleDiv>
	<Table>
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

<Htwo label="Striped rows" />

Set the `stiped` prop to `true` to alternate background colors of every second tabel row.

<ExampleDiv>
	<Table striped={true}>
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
			<TableHeadCell>
				<span class="sr-only"> Edit </span>
			</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Google Pixel Phone</TableBodyCell>
				<TableBodyCell>Gray</TableBodyCell>
				<TableBodyCell>Phone</TableBodyCell>
				<TableBodyCell>$799</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Apple Watch 5</TableBodyCell>
				<TableBodyCell>Red</TableBodyCell>
				<TableBodyCell>Wearables</TableBodyCell>
				<TableBodyCell>$999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table striped={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only"> Edit </span>
    </TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Google Pixel Phone</TableBodyCell>
      <TableBodyCell>Gray</TableBodyCell>
      <TableBodyCell>Phone</TableBodyCell>
      <TableBodyCell>$799</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Apple Watch 5</TableBodyCell>
      <TableBodyCell>Red</TableBodyCell>
      <TableBodyCell>Wearables</TableBodyCell>
      <TableBodyCell>$999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

<Htwo label="Hover state" />

Set `hoverable` to `true` to change the background color of a data row when hovering over the element with the cursor.

<ExampleDiv>
<Table hoverable={true}>
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
			<TableHeadCell>
				<span class="sr-only"> Edit </span>
			</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table hoverable={true}>
  <TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
			<TableHeadCell>
				<span class="sr-only"> Edit </span>
			</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
```

<Htwo label="Checkbox" />

Checkboxes can be used inside table data rows to select multiple data sets and apply a bulk action.

<ExampleDiv>
<Table hoverable={true}>
		<TableHead>
			<TableHeadCell class="!p-4">
				<Checkbox />
			</TableHeadCell>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
			<TableHeadCell>
				<span class="sr-only"> Edit </span>
			</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell class="!p-4">
					<Checkbox />
				</TableBodyCell>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell class="!p-4">
					<Checkbox />
				</TableBodyCell>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell class="!p-4">
					<Checkbox />
				</TableBodyCell>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table hoverable={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
      <Checkbox />
    </TableHeadCell>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only"> Edit </span>
    </TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

<Htwo label="Search input" />

<ExampleDiv>
<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
	<TableHead>
		<TableHeadCell>ID</TableHeadCell>
		<TableHeadCell>Maker</TableHeadCell>
		<TableHeadCell>Type</TableHeadCell>
		<TableHeadCell>Make</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		{#each filteredItems as item}
			<TableBodyRow>
				<TableBodyCell>{item.id}</TableBodyCell>
				<TableBodyCell>{item.maker}</TableBodyCell>
				<TableBodyCell>{item.type}</TableBodyCell>
				<TableBodyCell>{item.make}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>
</ExampleDiv>

```html
<script>
let searchTerm = '';
	let items = [
		{ id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
		{ id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
		{ id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
		{ id: 4, maker: 'Saab', type: 'IJK', make: 2020 }
	];
	$: filteredItems = items.filter(
		(item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
</script>

<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
	<TableHead>
		<TableHeadCell>ID</TableHeadCell>
		<TableHeadCell>Maker</TableHeadCell>
		<TableHeadCell>Type</TableHeadCell>
		<TableHeadCell>Make</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		{#each filteredItems as item}
			<TableBodyRow>
				<TableBodyCell>{item.id}</TableBodyCell>
				<TableBodyCell>{item.maker}</TableBodyCell>
				<TableBodyCell>{item.type}</TableBodyCell>
				<TableBodyCell>{item.make}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>
```


<Htwo label="Table foot" />

Use this example where the <tfoot> HTML element can be used in conjunction with the head and caption of the table component.

<ExampleDiv>
	<Table noborder={true}>
		<TableHead
			class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
		>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Qty</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
		</TableHead>
		<TableBody>
			<TableBodyRow noborder>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>1</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow noborder>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>1</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow noborder>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>1</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
			</TableBodyRow>
		</TableBody>
		<tfoot>
			<tr class="font-semibold text-gray-900 dark:text-white">
				<th scope="row" class="py-3 px-6 text-base">Total</th>
				<td class="py-3 px-6">3</td>
				<td class="py-3 px-6">21,000</td>
			</tr>
		</tfoot>
	</Table>
</ExampleDiv>

```html
<Table noborder={true}>
  <TableHead
    class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
  >
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Qty</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow noborder>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow noborder>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow noborder>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
  <tfoot>
    <tr class="font-semibold text-gray-900 dark:text-white">
      <th scope="row" class="py-3 px-6 text-base">Total</th>
      <td class="py-3 px-6">3</td>
      <td class="py-3 px-6">21,000</td>
    </tr>
  </tfoot>
</Table>
```


<Htwo label="Table caption" />

Improve accessibility by using a caption inside the table as a heading to better describe what the table is about for screen readers.

<ExampleDiv>
	<Table>
		<caption
			class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
		>
			Our products
			<p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
				Browse a list of Flowbite products designed to help you work and play, stay organized, get
				answers, keep in touch, grow your business, and more.
			</p>
		</caption>
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
			<TableHeadCell>
				<span class="sr-only"> Edit </span>
			</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table>
  <caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
  >
    Our products
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
      Browse a list of Flowbite products designed to help you work and play, stay organized, get
      answers, keep in touch, grow your business, and more.
    </p>
  </caption>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only"> Edit </span>
    </TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

<Htwo label="Without border" />

Use this example of a table component without any border between the table cells.

<ExampleDiv>
	<Table noborder={true}>
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
		</TableHead>
		<TableBody>
			<TableBodyRow noborder>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow noborder>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow noborder>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table noborder={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow noborder>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow noborder>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow noborder>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

<Htwo label="Table with shadow" />

Use this example to apply a shadow border to the table component.

<ExampleDiv>
	<Table shadow>
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table shadow>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

<Htwo label="Overflow scrolling" />

Use this example to enable horizontal scrolling if the content inside the table overflows that maximum width.

<ExampleDiv>
	<Table>
		<TableHead>
			<TableHeadCell class="!p-4">
				<Checkbox />
			</TableHeadCell>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>ACCESORIES</TableHeadCell>
			<TableHeadCell>AVAILABLE</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
			<TableHeadCell>WEIGHT</TableHeadCell>
			<TableHeadCell>ACTION</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell class="!p-4">
					<Checkbox />
				</TableBodyCell>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>Yes</TableBodyCell>
				<TableBodyCell>Yes</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
				<TableBodyCell>3.0 lb.</TableBodyCell>
				<TableBodyCell
					><a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
					<a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
						Remove
					</a></TableBodyCell
				>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell class="!p-4">
					<Checkbox />
				</TableBodyCell>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>No</TableBodyCell>
				<TableBodyCell>Yes</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
				<TableBodyCell>1.0 lb.</TableBodyCell>
				<TableBodyCell
					><a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
					<a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
						Remove
					</a></TableBodyCell
				>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell class="!p-4">
					<Checkbox />
				</TableBodyCell>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>Yes</TableBodyCell>
				<TableBodyCell>No</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
				<TableBodyCell>0.2 lb.</TableBodyCell>
				<TableBodyCell
					><a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
					<a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
						Remove
					</a></TableBodyCell
				>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table>
  <TableHead>
    <TableHeadCell class="!p-4">
      <Checkbox />
    </TableHeadCell>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>ACCESORIES</TableHeadCell>
    <TableHeadCell>AVAILABLE</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>WEIGHT</TableHeadCell>
    <TableHeadCell>ACTION</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>3.0 lb.</TableBodyCell>
      <TableBodyCell
        ><a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
        <a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
          Remove
        </a></TableBodyCell
      >
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>No</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>1.0 lb.</TableBodyCell>
      <TableBodyCell
        ><a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
        <a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
          Remove
        </a></TableBodyCell
      >
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>No</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>0.2 lb.</TableBodyCell>
      <TableBodyCell
        ><a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
        <a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
          Remove
        </a></TableBodyCell
      >
    </TableBodyRow>
  </TableBody>
</Table>
```

<Htwo label="Table colors" />

Use one of colors from blue, green, red, yellow, purple for the `color` prop. The default color is gray. You can reset all color by useing the `color="custom"`.

<ExampleDiv>
	<Table color="blue" hoverable={true}>
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table color="blue" hoverable={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

<ExampleDiv>
	<TableSearch
		color="red"
		placeholder="Search by maker name"
		hoverable={true}
		bind:inputValue={searchTerm}
	>
		<TableHead>
			<TableHeadCell>ID</TableHeadCell>
			<TableHeadCell>Maker</TableHeadCell>
			<TableHeadCell>Type</TableHeadCell>
			<TableHeadCell>Make</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			{#each filteredItems as item}
				<TableBodyRow>
					<TableBodyCell>{item.id}</TableBodyCell>
					<TableBodyCell>{item.maker}</TableBodyCell>
					<TableBodyCell>{item.type}</TableBodyCell>
					<TableBodyCell>{item.make}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
</ExampleDiv>

```html
<TableSearch
  color="red"
  placeholder="Search by maker name"
  hoverable={true}
  bind:inputValue={searchTerm}
>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Maker</TableHeadCell>
    <TableHeadCell>Type</TableHeadCell>
    <TableHeadCell>Make</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#each filteredItems as item}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        <TableBodyCell>{item.maker}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.make}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>
```

<ExampleDiv>
	<Table color="green" hoverable={true}>
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table color="green" hoverable={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

<Htwo label="Striped rows color" />

Use this example to apply a different color to every second row inside the table.

<ExampleDiv>
	<Table striped={true} color="purple">
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
			<TableHeadCell>
				<span class="sr-only"> Edit </span>
			</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Google Pixel Phone</TableBodyCell>
				<TableBodyCell>Gray</TableBodyCell>
				<TableBodyCell>Phone</TableBodyCell>
				<TableBodyCell>$799</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Apple Watch 5</TableBodyCell>
				<TableBodyCell>Red</TableBodyCell>
				<TableBodyCell>Wearables</TableBodyCell>
				<TableBodyCell>$999</TableBodyCell>
				<TableBodyCell>
					<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</ExampleDiv>

```html
<Table striped={true} color="purple">
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only"> Edit </span>
    </TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Google Pixel Phone</TableBodyCell>
      <TableBodyCell>Gray</TableBodyCell>
      <TableBodyCell>Phone</TableBodyCell>
      <TableBodyCell>$799</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Apple Watch 5</TableBodyCell>
      <TableBodyCell>Red</TableBodyCell>
      <TableBodyCell>Wearables</TableBodyCell>
      <TableBodyCell>$999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Edit
        </a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Table</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TableBodyCell</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TableBodyRow</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TableSearch</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TableHead</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>