<script lang="ts">
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Checkbox,
    TableSearch
  } from '$lib';

  let searchTerm = $state('');
  let items = [
    { id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
    { id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
    { id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
    { id: 4, maker: 'Saab', type: 'IJK', make: 2020 }
  ];

  let filteredItems = $derived(
    items.filter(
      (item) =>
        item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    )
  );

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Table</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default table</H2>

<CodeWrapper>
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
</CodeWrapper>
<HighlightCompo code={modules['./md/default-table.md'] as string} />

<H2>Striped rows</H2>

<CodeWrapper>
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
    <TableBody class="divide-y">
      <TableBodyRow>
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
        <TableBodyCell>Sliver</TableBodyCell>
        <TableBodyCell>Laptop</TableBodyCell>
        <TableBodyCell>$2999</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
        <TableBodyCell>White</TableBodyCell>
        <TableBodyCell>Laptop PC</TableBodyCell>
        <TableBodyCell>$1999</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Magic Mouse 2</TableBodyCell>
        <TableBodyCell>Black</TableBodyCell>
        <TableBodyCell>Accessories</TableBodyCell>
        <TableBodyCell>$99</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Google Pixel Phone</TableBodyCell>
        <TableBodyCell>Gray</TableBodyCell>
        <TableBodyCell>Phone</TableBodyCell>
        <TableBodyCell>$799</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Apple Watch 5</TableBodyCell>
        <TableBodyCell>Red</TableBodyCell>
        <TableBodyCell>Wearables</TableBodyCell>
        <TableBodyCell>$999</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</CodeWrapper>
<HighlightCompo code={modules['./md/striped-rows.md'] as string} />

<H2>Hover state</H2>

<CodeWrapper>
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
    <TableBody class="divide-y">
      <TableBodyRow>
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
        <TableBodyCell>Sliver</TableBodyCell>
        <TableBodyCell>Laptop</TableBodyCell>
        <TableBodyCell>$2999</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
        <TableBodyCell>White</TableBodyCell>
        <TableBodyCell>Laptop PC</TableBodyCell>
        <TableBodyCell>$1999</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Magic Mouse 2</TableBodyCell>
        <TableBodyCell>Black</TableBodyCell>
        <TableBodyCell>Accessories</TableBodyCell>
        <TableBodyCell>$99</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</CodeWrapper>
<HighlightCompo code={modules['./md/hover-state.md'] as string} />

<H2>Checkbox</H2>
<CodeWrapper>
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
        <span class="sr-only">Edit</span>
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
          <a
            href="/components/table"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
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
          <a
            href="/components/table"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
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
          <a
            href="/components/table"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</CodeWrapper>
<HighlightCompo code={modules['./md/checkbox.md'] as string} />

<H2>Search input</H2>
<CodeWrapper>
  <TableSearch
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
</CodeWrapper>
<HighlightCompo code={modules['./md/search-input.md'] as string} />

<H2>Table head</H2>
<CodeWrapper>
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
</CodeWrapper>
<HighlightCompo code={modules['./md/table-head.md'] as string} />

<H2>Table foot</H2>
<CodeWrapper>
  <Table noborder={true}>
    <TableHead
      class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
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
        <th scope="row" class="px-6 py-3 text-base">Total</th>
        <td class="px-6 py-3">3</td>
        <td class="px-6 py-3">21,000</td>
      </tr>
    </tfoot>
  </Table>
</CodeWrapper>
<HighlightCompo code={modules['./md/table-foot.md'] as string} />

<H2>Table caption</H2>
<CodeWrapper>
  <Table>
    <caption
      class="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white"
    >
      Our products
      <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
        Browse a list of Flowbite products designed to help you work and play,
        stay organized, get answers, keep in touch, grow your business, and
        more.
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
    <TableBody class="divide-y">
      <TableBodyRow>
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
        <TableBodyCell>Sliver</TableBodyCell>
        <TableBodyCell>Laptop</TableBodyCell>
        <TableBodyCell>$2999</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
        <TableBodyCell>White</TableBodyCell>
        <TableBodyCell>Laptop PC</TableBodyCell>
        <TableBodyCell>$1999</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Magic Mouse 2</TableBodyCell>
        <TableBodyCell>Black</TableBodyCell>
        <TableBodyCell>Accessories</TableBodyCell>
        <TableBodyCell>$99</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</CodeWrapper>
<HighlightCompo code={modules['./md/table-caption.md'] as string} />

<H2>Without border</H2>
<CodeWrapper>
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
</CodeWrapper>
<HighlightCompo code={modules['./md/without-border.md'] as string} />

<H2>Table with shadow</H2>
<CodeWrapper>
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
</CodeWrapper>
<HighlightCompo code={modules['./md/table-with-shadow.md'] as string} />

<H2>Overflow scrolling</H2>
<CodeWrapper>
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
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
          <a
            href="/tables"
            class="font-medium text-red-600 hover:underline dark:text-red-500"
            >Remove</a
          >
        </TableBodyCell>
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
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
          <a
            href="/tables"
            class="font-medium text-red-600 hover:underline dark:text-red-500"
            >Remove</a
          >
        </TableBodyCell>
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
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Edit</a
          >
          <a
            href="/tables"
            class="font-medium text-red-600 hover:underline dark:text-red-500"
            >Remove</a
          >
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</CodeWrapper>
<HighlightCompo code={modules['./md/overflow-scrolling.md'] as string} />

<H2>Table colors</H2>
<CodeWrapper>
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
</CodeWrapper>
<HighlightCompo code={modules['./md/table-color.md'] as string} />

<H2>Striped rows color</H2>
<CodeWrapper>
  <Table striped={true} color="green">
    <TableHead>
      <TableHeadCell>Product name</TableHeadCell>
      <TableHeadCell>Color</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
      <TableHeadCell>Price</TableHeadCell>
      <TableHeadCell>
        <span class="sr-only">Edit</span>
      </TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      <TableBodyRow>
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
        <TableBodyCell>Sliver</TableBodyCell>
        <TableBodyCell>Laptop</TableBodyCell>
        <TableBodyCell>$2999</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-white hover:underline dark:text-white"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
        <TableBodyCell>White</TableBodyCell>
        <TableBodyCell>Laptop PC</TableBodyCell>
        <TableBodyCell>$1999</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-white hover:underline dark:text-white"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Magic Mouse 2</TableBodyCell>
        <TableBodyCell>Black</TableBodyCell>
        <TableBodyCell>Accessories</TableBodyCell>
        <TableBodyCell>$99</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-white hover:underline dark:text-white"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Google Pixel Phone</TableBodyCell>
        <TableBodyCell>Gray</TableBodyCell>
        <TableBodyCell>Phone</TableBodyCell>
        <TableBodyCell>$799</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-white hover:underline dark:text-white"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Apple Watch 5</TableBodyCell>
        <TableBodyCell>Red</TableBodyCell>
        <TableBodyCell>Wearables</TableBodyCell>
        <TableBodyCell>$999</TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-white hover:underline dark:text-white"
            >Edit</a
          >
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</CodeWrapper>
<HighlightCompo code={modules['./md/striped-rows-color.md'] as string} />
