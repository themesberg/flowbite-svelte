<script lang="ts">
  import { Table } from '@flowbite-svelte-plugins/datatable';
  import items from './data/gdp.json';
  import type { DataTableOptions } from '@flowbite-svelte-plugins/datatable';

  const dataTableOptions: DataTableOptions = {
    searchable: false,
    perPageSelect: false,
    sortable: true
  };
</script>

<Table {items} {dataTableOptions} />
