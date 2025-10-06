<script lang="ts">
  import { Table } from '@flowbite-svelte-plugins/datatable';
  import products from './data/products.json';
  import type { DataTableOptions } from '@flowbite-svelte-plugins/datatable';

  const scrollyOptions: DataTableOptions = {
    paging: false,
    scrollY: '30vh',
    rowNavigation: true,
    tabIndex: 1
  };
</script>

<Table items={products} dataTableOptions={scrollyOptions} />
