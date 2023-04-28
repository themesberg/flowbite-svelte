---
layout: componentLayout
title: Svelte Tables - Flowbite
breadcrumb_title: Svelte Tables
component_title: Table
dir: Components
description: Use the table component to show text, images, links, and other elements inside a structured set of data made up of rows and columns of table cells
thumnailSize: w-48
---

<script>
  import { TableProp, TableDefaultRow , } from '../../utils'
  import { P, A } from '$lib'
  import { props as items1 }  from '../../props/Table.json'
  import { props as items2 }  from '../../props/TableBody.json'
  import { props as items3 }  from '../../props/TableBodyCell.json'
  import { props as items4 }  from '../../props/TableBodyRow.json'
  import { props as items5 }  from '../../props/TableHead.json'
  import { props as items6 }  from '../../props/TableHeadCell.json'
  import { props as items7 }  from '../../props/TableSearch.json'
</script>



The table component represents a set of structured elements made up of rows and columns as table cells that can be used to show data sets to your website users.

Get started with multiple variants and styles of these table components.

## Setup

```svelte example hideOutput
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
</script>
```

## Default table

Use the following example of a responsive table component to show multiple rows and columns of text data.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

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

## Striped rows

Set the `striped` prop to `true` to alternate background colors of every second table row.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

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

## Hover state

Set `hoverable` to `true` to change the background color of a data row when hovering over the element with the cursor.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

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

## Checkbox

Checkboxes can be used inside table data rows to select multiple data sets and apply a bulk action.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox} from 'flowbite-svelte';
</script>

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

## Search input

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
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

## Table head

By default, the `<TableHead>` component will create a single `<tr>` element without any preset attributes and properties for you, and the slot of this component is implicitly required to be permitted contents of the `<tr>` element. If you want to get more controllability of the table head rows, e.g., customize the style or use multiple head rows, set the value of `defaultRow` prop to `false`, and the slot of this component is then implicitly required to be zero or more `<tr>` elements.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

<Table>
  <TableHead defaultRow={false}>
    <tr>
      <TableHeadCell colspan="2">Product</TableHeadCell>
      <TableHeadCell colspan="3">Info</TableHeadCell>
    </tr>
    <tr>
      <TableHeadCell>Brand</TableHeadCell>
      <TableHeadCell>Product name</TableHeadCell>
      <TableHeadCell>Color</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
      <TableHeadCell>Price</TableHeadCell>
    </tr>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple</TableBodyCell>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft</TableBodyCell>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Apple</TableBodyCell>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

## Table foot

Use this example where the `<tfoot>` HTML element can be used in conjunction with the head and caption of the table component.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

<Table noborder={true}>
  <TableHead
    class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
  >
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Qty</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
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

## Table caption

Improve accessibility by using a caption inside the table as a heading to better describe what the table is about for screen readers.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte';
</script>

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

## Without border

Use this example of a table component without any border between the table cells.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

<Table noborder={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody>
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

## Table with shadow

Use this example to apply a shadow border to the table component.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

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

## Overflow scrolling

Use this example to enable horizontal scrolling if the content inside the table overflows that maximum width.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox} from 'flowbite-svelte';
</script>

<Table>
  <TableHead>
    <TableHeadCell class="!p-4">
      <Checkbox />
    </TableHeadCell>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>ACCESSORIES</TableHeadCell>
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

## Table colors

Use one of colors from blue, green, red, yellow, purple for the `color` prop. The default color is gray. You can reset all color by using the `color="custom"`.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

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

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
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

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

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

## Striped rows color

Use this example to apply a different color to every second row inside the table.

```svelte example
<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>

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

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.

### Table

<TableProp>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

### TableBody

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

### TableBodyCell

<TableProp>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

### TableBodyRow

<TableProp>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

### TableHead

<TableProp>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

### TableHeadCell

<TableProp>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

### TableSearch

<TableProp>
  <TableDefaultRow items={items7} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/tables/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Tables</A
  >
</P>
