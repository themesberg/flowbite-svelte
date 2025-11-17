# Svelte Tables - Flowbite


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

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from "flowbite-svelte";
</script>
```

## Default table

Use the following example of a responsive table component to show multiple rows and columns of text data.

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table>
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

## Striped rows

Set the `striped` prop to `true` to alternate background colors of every second table row.

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table striped={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Google Pixel Phone</TableBodyCell>
      <TableBodyCell>Gray</TableBodyCell>
      <TableBodyCell>Phone</TableBodyCell>
      <TableBodyCell>$799</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Apple Watch 5</TableBodyCell>
      <TableBodyCell>Red</TableBodyCell>
      <TableBodyCell>Wearables</TableBodyCell>
      <TableBodyCell>$999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

## Hover state

Set `hoverable` to `true` to change the background color of a data row when hovering over the element with the cursor.

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table hoverable={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

## Checkbox

Checkboxes can be used inside table data rows to select multiple data sets and apply a bulk action.

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox } from "flowbite-svelte";
</script>

<Table hoverable={true}>
  <TableHead>
    <TableHeadCell class="p-4!">
      <Checkbox />
    </TableHeadCell>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="p-4!">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="p-4!">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="p-4!">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

## Table from data

```svelte
<script lang="ts">
  import { Table } from "flowbite-svelte";
  let items = [
    { id: 1, maker: "Toyota", type: "ABC", make: 2017 },
    { id: 2, maker: "Ford", type: "CDE", make: 2018 },
    { id: 3, maker: "Volvo", type: "FGH", make: 2019 },
    { id: 4, maker: "Saab", type: "IJK", make: 2020 }
  ];
</script>

<Table {items} hoverable={true}></Table>
```

## Dynamic data

```svelte
<script lang="ts">
  import { Table, Button } from "flowbite-svelte";
  type ItemType = {
    id: number;
    maker: string;
    type: string;
    make: number;
  };
  let items: ItemType[] = [
    { id: 1, maker: "Toyota", type: "ABC", make: 2017 },
    { id: 2, maker: "Ford", type: "CDE", make: 2018 },
    { id: 3, maker: "Volvo", type: "FGH", make: 2019 },
    { id: 4, maker: "Saab", type: "IJK", make: 2020 }
  ];
  let items2: ItemType[] = [
    { id: 5, maker: "Nissan", type: "LMN", make: 2019 },
    { id: 6, maker: "VW", type: "OPQ", make: 2020 },
    { id: 7, maker: "Honda", type: "RST", make: 2021 },
    { id: 8, maker: "Audi", type: "UVW", make: 2023 }
  ];
  let carList: ItemType[] = $state(items);
  const changeItems = () => {
    carList = carList[0].id === items[0].id ? items2 : items;
  };
</script>

<Button onclick={changeItems} class="mb-4">Change data</Button>
<Table items={carList} hoverable={true}></Table>
```

## Sorting by column

Please use [DataTable](https://flowbite-svelte.com/docs/plugins/datatables)

## Table head

By default, the `<TableHead>` component will create a single `<tr>` element without any preset attributes and properties for you, and the slot of this component is implicitly required to be permitted contents of the `<tr>` element. If you want to get more controllability of the table head rows, e.g., customize the style or use multiple head rows, set the value of `defaultRow` prop to `false`, and the slot of this component is then implicitly required to be zero or more `<tr>` elements.

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table>
  <TableHead defaultRow={false}>
    <tr>
      <TableHeadCell colspan={2}>Product</TableHeadCell>
      <TableHeadCell colspan={3}>Info</TableHeadCell>
    </tr>
    <tr>
      <TableHeadCell>Brand</TableHeadCell>
      <TableHeadCell>Product name</TableHeadCell>
      <TableHeadCell>Color</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
      <TableHeadCell>Price</TableHeadCell>
    </tr>
  </TableHead>
  <TableBody>
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

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table border={false}>
  <TableHead class="bg-gray-100 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
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
      <th scope="row" class="px-6 py-3 text-base">Total</th>
      <td class="px-6 py-3">3</td>
      <td class="px-6 py-3">21,000</td>
    </tr>
  </tfoot>
</Table>
```

## Table caption

Improve accessibility by using a caption inside the table as a heading to better describe what the table is about for screen readers.

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table>
  <caption class="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white">
    Our products
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
      Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.
    </p>
  </caption>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

## Without border

Use this example of a table component without any border between the table cells.

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table border={false}>
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

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table shadow>
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

## Overflow scrolling

Use this example to enable horizontal scrolling if the content inside the table overflows that maximum width.

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox } from "flowbite-svelte";
</script>

<Table>
  <TableHead>
    <TableHeadCell class="p-4!">
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
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="p-4!">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>3.0 lb.</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
        <a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">Remove</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="p-4!">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>No</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>1.0 lb.</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
        <a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">Remove</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="p-4!">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>No</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>0.2 lb.</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
        <a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">Remove</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

## TableSearch

Use the following example to search in a table.
For more advanced usage, please see [this page](https://flowbite-svelte.com/docs/plugins/datatables).

```svelte
<script lang="ts">
  import { TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from "flowbite-svelte";
  let searchTerm = $state("");
  let items = [
    { id: 1, maker: "Toyota", type: "ABC", make: 2017 },
    { id: 2, maker: "Ford", type: "CDE", make: 2018 },
    { id: 3, maker: "Volvo", type: "FGH", make: 2019 },
    { id: 4, maker: "Saab", type: "IJK", make: 2020 }
  ];
  let filteredItems = $derived.by(() => items.filter((item) => !searchTerm || item.maker.toLowerCase().includes(searchTerm.toLowerCase())));
</script>

<TableSearch placeholder="Search by maker name" hoverable bind:inputValue={searchTerm}>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Maker</TableHeadCell>
    <TableHeadCell>Type</TableHeadCell>
    <TableHeadCell>Make</TableHeadCell>
  </TableHead>
  <TableBody>
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

## Table colors

Use one of colors from blue, green, red, yellow, purple for the `color` prop. The default color is gray. You can reset all color by using the `color="custom"`.

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table color="blue" hoverable={true}>
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

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table color="green" hoverable={true}>
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

## Striped rows color

Use this example to apply a different color to every second row inside the table.

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table striped={true} color="purple">
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Google Pixel Phone</TableBodyCell>
      <TableBodyCell>Gray</TableBodyCell>
      <TableBodyCell>Phone</TableBodyCell>
      <TableBodyCell>$799</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Apple Watch 5</TableBodyCell>
      <TableBodyCell>Red</TableBodyCell>
      <TableBodyCell>Wearables</TableBodyCell>
      <TableBodyCell>$999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

## Click and double-click on row

An example to use `onclick` (main row) and on:dblclick (expanded row)

```svelte
<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, ImagePlaceholder, Modal } from "flowbite-svelte";
  import { slide } from "svelte/transition";
  type ItemType = {
    name: string;
    color: string;
    type: string;
    price: string;
  };

  const items: ItemType[] = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Sliver",
      type: "Laptop",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      type: "Laptop PC",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      type: "Accessories",
      price: "$99"
    }
  ];

  let openRow: number | null | undefined = $state();
  let details: ItemType | undefined = $state();
  let doubleClickModal = $state(false);

  const toggleRow = (i: number) => {
    openRow = openRow === i ? null : i;
  };
</script>

<Table>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each items as item, i}
      <TableBodyRow onclick={() => toggleRow(i)}>
        <TableBodyCell>{item.name}</TableBodyCell>
        <TableBodyCell>{item.color}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.price}</TableBodyCell>
      </TableBodyRow>
      {#if openRow === i}
        <TableBodyRow
          ondblclick={() => {
            doubleClickModal = true;
            details = item;
          }}
        >
          <TableBodyCell colspan={4} class="p-0">
            <div class="px-2 py-3" transition:slide={{ duration: 300, axis: "y" }}>
              <ImagePlaceholder />
            </div>
          </TableBodyCell>
        </TableBodyRow>
      {/if}
    {/each}
  </TableBody>
</Table>
<Modal title={details?.name} bind:open={doubleClickModal} autoclose outsideclose>
  <ImagePlaceholder />
</Modal>
```

## Component data

### Table

#### Types

[TableProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1690)

#### Props

- children
- footerSlot
- captionSlot
- items
- divClass
- striped
- hoverable
- border: true
- shadow
- color: "default"
- class: className
- classes

### TableBody

#### Types

[TableBodyProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1722)

#### Props

- children
- bodyItems
- class: className

### TableBodyCell

#### Types

[TableBodyCellProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1711)

#### Props

- children
- class: className
- colspan
- onclick

### TableBodyRow

#### Types

[TableBodyRowProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1703)

#### Props

- children
- class: className
- color
- striped
- hoverable
- border

### TableHead

#### Types

[TableHeadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1678)

#### Props

- children
- headerSlot
- color
- striped
- border
- class: className
- headItems
- defaultRow: true

### TableHeadCell

#### Types

[TableHeadCellProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1727)

#### Props

- children
- class: className

### TableSearch

#### Types

[TableSearchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1742)

#### Props

- children
- header
- footer
- divClass
- inputValue: $bindable()
- striped: false
- hoverable: false
- customColor: ""
- color: "default"
- innerDivClass
- inputClass
- searchClass
- svgDivClass
- svgClass
- tableClass
- class: className
- classes
- placeholder: "Search"


## References

- [Flowbite Tables](https://flowbite.com/docs/components/tables/)
