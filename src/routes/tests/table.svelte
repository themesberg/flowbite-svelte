<script>
  import { TableSearch, TableDefaultRow } from '$lib/index';
  let header = ['Product name', 'Color', 'Category', 'Price', 'Action'];
  let items = [
    ['Apple MacBook Pro 17', 'Silver', 'Laptop', '$2222', 'Edit'],
    ['Microsoft Surface Pro', 'White', 'Laptop PC', '$1999', 'Edit'],
    ['Magic Mouse 2', 'Black', 'Accessories', '$99', 'Edit']
  ];
</script>

<h1 class="text-3xl w-full dark:text-white pt-24">Table test</h1>

<TableSearch {header}>
  <TableDefaultRow {items} html />
</TableSearch>
