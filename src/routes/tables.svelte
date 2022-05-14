<script>
  import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Checkbox } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default table</span>
    <Card>
      <Table>
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
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </TableCell>
            <TableCell>Sliver</TableCell>
            <TableCell>Laptop</TableCell>
            <TableCell>$2999</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </TableCell>
            <TableCell>White</TableCell>
            <TableCell>Laptop PC</TableCell>
            <TableCell>$1999</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
            <TableCell>Black</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$99</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <HighlightSvelte
        code={`<Table>
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
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Apple MacBook Pro 17"
      </TableCell>
      <TableCell>Sliver</TableCell>
      <TableCell>Laptop</TableCell>
      <TableCell>$2999</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Microsoft Surface Pro
      </TableCell>
      <TableCell>White</TableCell>
      <TableCell>Laptop PC</TableCell>
      <TableCell>$1999</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Magic Mouse 2
      </TableCell>
      <TableCell>Black</TableCell>
      <TableCell>Accessories</TableCell>
      <TableCell>$99</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Striped rows </span>
    <Card>
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
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </TableCell>
            <TableCell>Sliver</TableCell>
            <TableCell>Laptop</TableCell>
            <TableCell>$2999</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </TableCell>
            <TableCell>White</TableCell>
            <TableCell>Laptop PC</TableCell>
            <TableCell>$1999</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
            <TableCell>Black</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$99</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Google Pixel Phone
            </TableCell>
            <TableCell>Gray</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>$799</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</TableCell>
            <TableCell>Red</TableCell>
            <TableCell>Wearables</TableCell>
            <TableCell>$999</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <HighlightSvelte
        code={`<Table striped={true}>
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
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Apple MacBook Pro 17"
      </TableCell>
      <TableCell>Sliver</TableCell>
      <TableCell>Laptop</TableCell>
      <TableCell>$2999</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Microsoft Surface Pro
      </TableCell>
      <TableCell>White</TableCell>
      <TableCell>Laptop PC</TableCell>
      <TableCell>$1999</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Magic Mouse 2
      </TableCell>
      <TableCell>Black</TableCell>
      <TableCell>Accessories</TableCell>
      <TableCell>$99</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Google Pixel Phone
      </TableCell>
      <TableCell>Gray</TableCell>
      <TableCell>Phone</TableCell>
      <TableCell>$799</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Apple Watch 5
      </TableCell>
      <TableCell>Red</TableCell>
      <TableCell>Wearables</TableCell>
      <TableCell>$999</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Hover state </span>
    <Card>
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
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </TableCell>
            <TableCell>Sliver</TableCell>
            <TableCell>Laptop</TableCell>
            <TableCell>$2999</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </TableCell>
            <TableCell>White</TableCell>
            <TableCell>Laptop PC</TableCell>
            <TableCell>$1999</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
            <TableCell>Black</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$99</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <HighlightSvelte
        code={`<Table hoverable={true}>
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
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Apple MacBook Pro 17"
      </TableCell>
      <TableCell>Sliver</TableCell>
      <TableCell>Laptop</TableCell>
      <TableCell>$2999</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Microsoft Surface Pro
      </TableCell>
      <TableCell>White</TableCell>
      <TableCell>Laptop PC</TableCell>
      <TableCell>$1999</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Magic Mouse 2
      </TableCell>
      <TableCell>Black</TableCell>
      <TableCell>Accessories</TableCell>
      <TableCell>$99</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Checkbox </span>
    <Card>
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
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="!p-4">
              <Checkbox />
            </TableCell>
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </TableCell>
            <TableCell>Sliver</TableCell>
            <TableCell>Laptop</TableCell>
            <TableCell>$2999</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="!p-4">
              <Checkbox />
            </TableCell>
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </TableCell>
            <TableCell>White</TableCell>
            <TableCell>Laptop PC</TableCell>
            <TableCell>$1999</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="!p-4">
              <Checkbox />
            </TableCell>
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
            <TableCell>Black</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$99</TableCell>
            <TableCell>
              <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <HighlightSvelte
        code={`<Table hoverable={true}>
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
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="!p-4">
        <Checkbox />
      </TableCell>
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Apple MacBook Pro 17"
      </TableCell>
      <TableCell>Sliver</TableCell>
      <TableCell>Laptop</TableCell>
      <TableCell>$2999</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="!p-4">
        <Checkbox />
      </TableCell>
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Microsoft Surface Pro
      </TableCell>
      <TableCell>White</TableCell>
      <TableCell>Laptop PC</TableCell>
      <TableCell>$1999</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
    <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell class="!p-4">
        <Checkbox />
      </TableCell>
      <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Magic Mouse 2
      </TableCell>
      <TableCell>Black</TableCell>
      <TableCell>Accessories</TableCell>
      <TableCell>$99</TableCell>
      <TableCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      />
    </Card>
  </div>
</div>
