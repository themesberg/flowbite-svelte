<script lang="ts">
  import { Table } from '@flowbite-svelte-plugins/datatable';
  import aimodels from './data/aimodels.json';
  import type { DataTableOptions } from '@flowbite-svelte-plugins/datatable';

  const paginationOptions: DataTableOptions = {
    paging: true,
    perPage: 5,
    perPageSelect: [5, 10, 15, 20, 25],
    sortable: false
  };
</script>

<Table items={aimodels} dataTableOptions={paginationOptions} />
