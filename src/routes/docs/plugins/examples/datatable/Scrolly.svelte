<script lang="ts">
  import { Table } from '@flowbite-svelte-plugins/datatable';
  import products from './data/products.json';

  const scrollyOptions = {
    paging: false,
    scrollY: '30vh',
    rowNavigation: true,
    tabIndex: 1
  };
</script>

<Table items={products} dataTableOptions={scrollyOptions} />
