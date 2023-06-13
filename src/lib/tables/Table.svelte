<script lang="ts">
  import { twMerge, twJoin } from 'tailwind-merge';
  import { setContext } from 'svelte';
  import type { TableColorType } from '../types';

  export let divClass: string = 'relative overflow-x-auto';
  export let striped: boolean = false;
  export let hoverable: boolean = false;
  export let noborder: boolean = false;
  export let shadow: boolean = false;
  export let color: TableColorType = 'default';
  export let customeColor: string = '';

  const colors = {
    default: 'text-gray-500 dark:text-gray-400',
    blue: 'text-blue-100 dark:text-blue-100',
    green: 'text-green-100 dark:text-green-100',
    red: 'text-red-100 dark:text-red-100',
    yellow: 'text-yellow-100 dark:text-yellow-100',
    purple: 'text-purple-100 dark:text-purple-100',
    indigo: 'text-indigo-100 dark:text-indigo-100',
    pink: 'text-pink-100 dark:text-pink-100',
    custom: customeColor
  };

  $: setContext('striped', striped);
  $: setContext('hoverable', hoverable);
  $: setContext('noborder', noborder);
  $: setContext('color', color);
</script>

<div class={twJoin(divClass, shadow && 'shadow-md sm:rounded-lg')}>
  <table {...$$restProps} class={twMerge('w-full text-left text-sm', colors[color], $$props.class)}>
    <slot />
  </table>
</div>

<!--
  @component
  ## Features
  [Go to Table](https://flowbite-svelte.com/docs/components/table)
  - Setup
  - Default table
  - Striped rows
  - Hover state
  - Checkbox
  - Search input
  - Sorting by column
  - Table head
  - Table foot
  - Table caption
  - Without border
  - Table with shadow
  - Overflow scrolling
  - Table colors
  - Striped rows color
  ## Props
  @prop divClass: string = 'relative overflow-x-auto';
  @prop striped: boolean = false;
  @prop hoverable: boolean = false;
  @prop noborder: boolean = false;
  @prop shadow: boolean = false;
  @prop color: TableColorType = 'default';
  @prop customeColor: string = '';
  ## Example
  ```
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
  
  
-->
