<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch, ImagePlaceholder, Modal, Checkbox } from "$lib";
  import { slide } from "svelte/transition";
  let items = [
    { id: 1, maker: "Toyota", type: "ABC", make: 2017 },
    { id: 2, maker: "Ford", type: "CDE", make: 2018 },
    { id: 3, maker: "Volvo", type: "FGH", make: 2019 },
    { id: 4, maker: "Saab", type: "IJK", make: 2020 }
  ];
  // For TableSearch example
  let searchTerm = $state("");

  let filteredItems = $derived(items.filter((item) => !searchTerm || item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
  type ItemType = {
    name: string;
    color: string;
    type: string;
    price: string;
  };
  // For click and double-click example
  const clickItems: ItemType[] = [
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

<h1 class="my-4 text-3xl">Table</h1>

<h2 class="my-4 text-2xl">Default table</h2>
<div class="my-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Striped rows</h2>
<div class="my-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Hover state</h2>
<div class="my-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Checkbox</h2>
<div class="my-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Table from data</h2>
<div class="my-4 rounded border p-4">
  <Table {items} hoverable={true}></Table>
</div>

<h2 class="my-4 text-2xl">Sorting by column testing</h2>
<div class="my-4 rounded border p-4">
  <Table hoverable={true} {items}>
    <TableHead>
      <TableHeadCell sort={(a, b) => a.id - b.id}>ID</TableHeadCell>
      <TableHeadCell sort={(a, b) => a.maker.localeCompare(b.maker)} defaultSort>Maker</TableHeadCell>
      <TableHeadCell sort={(a, b) => a.type.localeCompare(b.type)}>Type</TableHeadCell>
      <TableHeadCell sort={(a, b) => a.make - b.make} defaultDirection="desc">Make</TableHeadCell>
      <TableHeadCell>
        <span class="sr-only">Buy</span>
      </TableHeadCell>
    </TableHead>
    <TableBody bodyItems={items}>
      <TableBodyRow>
        {#each items as { id, maker, type, make }}
          <TableBodyCell>{id}</TableBodyCell>
          <TableBodyCell>{maker}</TableBodyCell>
          <TableBodyCell>{type}</TableBodyCell>
          <TableBodyCell>{make}</TableBodyCell>
          <TableBodyCell>
            <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Buy</a>
          </TableBodyCell>
        {/each}
      </TableBodyRow>
    </TableBody>
  </Table>
</div>

<h2 class="my-4 text-2xl">Table head</h2>
<div class="my-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Table foot</h2>
<div class="my-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Table caption</h2>
<div class="my-4 rounded border p-4">
  <Table>
    <caption class="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white">
      Our products
      <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
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
</div>

<h2 class="my-4 text-2xl">Without border</h2>
<div class="my-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Table with shadow</h2>
<div class="my-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Overflow scrolling</h2>
<div class="my-4 w-[700px] rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Table colors</h2>

<div class="my-4 mb-8 rounded border p-4">
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
</div>

<div class="my-4 mb-8 rounded border p-4">
  <TableSearch color="red" placeholder="Search by maker name" hoverable bind:inputValue={searchTerm}>
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
</div>

<div class="my-4 mb-8 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Striped rows color</h2>

<div class="my-4 mb-8 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Click and double-click on row</h2>

<div class="my-4 mb-8 rounded border p-4">
  <Table>
    <TableHead>
      <TableHeadCell>Product name</TableHeadCell>
      <TableHeadCell>Color</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
      <TableHeadCell>Price</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each clickItems as item, i}
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
</div>
