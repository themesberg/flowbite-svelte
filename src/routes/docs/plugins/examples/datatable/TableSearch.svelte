<script lang="ts">
  import { Table } from '@flowbite-svelte-plugins/datatable';
  import items from './data/stock.json';
</script>

<Table {items} dataTableOptions={{ searchable: false, sortable: false }} />
