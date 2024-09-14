<script lang="ts">
  import { Table } from '$lib';
  const tableItems = [
    {name: 'Apple MacBook Pro 17"',color: 'Sliver', type: 'Laptop', price: '$2999'},
    {name: 'Microsoft Surface Pro',color: 'White', type: 'Laptop PC', price: '$1999'},
    {name: 'Magic Mouse 2',color: 'Black', type: 'Accessories', price: '$99'},
    {name: 'Google Pixel Phone',color: 'Gray', type: 'Phone', price: '$799'},
    {name: 'Apple Watch 5',color: 'Red', type: 'Wearables', price: '$999'},
  ]
</script>

<Table {tableItems} noborder/>
