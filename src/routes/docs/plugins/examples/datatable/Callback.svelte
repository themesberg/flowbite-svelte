<script lang="ts">
  import { Table } from '@flowbite-svelte-plugins/datatable';
  import items from './data/sample.json';
  import type { DataTable } from '@flowbite-svelte-plugins/datatable';
  import { Spinner } from 'flowbite-svelte';

  let isTableLoading = $state(true);
  let tableInstance: DataTable | null = $state(null);

  function handleInitStart(): void {
    console.log('Table initialization started');
    isTableLoading = true;
  }

  function handleInitComplete(dataTable: DataTable): void {
    console.log('Table ready:', dataTable);
    isTableLoading = false;
  }

  function handleInitError(error: Error): void {
    console.error('Table initialization failed:', error);
    isTableLoading = false;
  }

  function handleSort(column: number, direction: string, dataTable: DataTable): void {
    console.log(`Column ${column} sorted ${direction}`);
  }

  function handleSearch(query: string, matched: any[], dataTable: DataTable): void {
    console.log(`Search: "${query}" found ${matched.length} results`);
  }

  function handleRowSelect(rowIndex: number, event: Event, dataTable: DataTable): void {
    console.log(`Row ${rowIndex} selected`);
  }

  const selectRowsOptions = {
    rowRender: (row: any, tr: any, _index: number) => {
      if (!tr.attributes) {
        tr.attributes = {};
      }
      if (!tr.attributes.class) {
        tr.attributes.class = '';
      }
      if (row.selected) {
        tr.attributes.class += ' selected';
      } else {
        tr.attributes.class = tr.attributes.class.replace(' selected', '');
      }
      return tr;
    }
  };
</script>

{#if isTableLoading}
  <Spinner />
{/if}

<Table {items} bind:isLoading={isTableLoading} bind:dataTableInstance={tableInstance} onInitStart={handleInitStart} onInitComplete={handleInitComplete} onInitError={handleInitError} onSort={handleSort} onSearch={handleSearch} onSelectRow={handleRowSelect} selectable={true} dataTableOptions={selectRowsOptions} />
