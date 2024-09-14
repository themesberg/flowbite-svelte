<script lang="ts">
  import { Table } from '$lib';
  const tableItems = [
    {name: 'Apple MacBook Pro 17"',color: 'Sliver', category: 'Laptop', accessories: 'Yes', available: 'Yes', price: '$2999', weight: '2.3kg', qty: '1'},
    {name: 'Microsoft Surface Pro',color: 'White', category: 'Laptop PC', accessories: 'No', available: 'Yes', price: '$1999', weight: '1.8kg', qty: '1'},
    {name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', accessories: 'Yes', available: 'No',price: '$99',  weight: '0.6kg',qty: '2'},
  ]
</script>

<Table {tableItems}/>
