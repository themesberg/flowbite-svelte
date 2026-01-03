<script lang="ts">
  import Table from "$lib/table/Table.svelte";
  
  interface Product {
    name: string;
    category: string;
    price: number;
    [key: string]: string | number; // Add index signature for TableItemType compatibility
  }

  const items: Product[] = [
    { name: "Product 1", category: "Electronics", price: 299 },
    { name: "Product 2", category: "Clothing", price: 49 },
    { name: "Product 3", category: "Food", price: 12 }
  ];
</script>

<Table {items} data-testid="table-with-items" />
