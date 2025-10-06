<script lang="ts">
  import { Table, exportJSON, exportCSV, exportTXT, exportSQL } from '@flowbite-svelte-plugins/datatable';
  import { Button } from 'flowbite-svelte';
  import items from './data/sample.json';

  let tableComponent: any;
  let dataTableInstance = $state<any>(null);

  const getDataTableInstance = () => {
    console.log('dataTableInstance:', dataTableInstance);

    if (dataTableInstance) {
      return dataTableInstance;
    }

    console.error('DataTable instance not found');
    return null;
  };

  const handleCSV = () => {
    console.log('clicked handleCSV');

    const instance = getDataTableInstance();
    if (instance) {
      try {
        exportCSV(instance, {
          download: true,
          lineDelimiter: '\n',
          columnDelimiter: ';'
        });
        console.log('CSV export successful');
      } catch (error) {
        console.error('CSV export failed:', error);
      }
    }
  };

  const handleSQL = () => {
    console.log('clicked handleSQL');

    const instance = getDataTableInstance();
    if (instance) {
      try {
        exportSQL(instance, {
          download: true,
          tableName: 'export_table'
        });
        console.log('SQL export successful');
      } catch (error) {
        console.error('SQL export failed:', error);
      }
    }
  };

  const handleTXT = () => {
    console.log('clicked handleTXT');

    const instance = getDataTableInstance();
    if (instance) {
      try {
        exportTXT(instance, {
          download: true
        });
        console.log('TXT export successful');
      } catch (error) {
        console.error('TXT export failed:', error);
      }
    }
  };

  const handleJSON = () => {
    console.log('clicked handleJSON');

    const instance = getDataTableInstance();
    if (instance) {
      try {
        exportJSON(instance, {
          download: true,
          space: 3
        });
        console.log('JSON export successful');
      } catch (error) {
        console.error('JSON export failed:', error);
      }
    }
  };
</script>

<Table bind:this={tableComponent} {items} bind:dataTableInstance />

<div class="mt-4 space-x-2">
  <Button onclick={handleCSV}>Export CSV</Button>
  <Button onclick={handleSQL}>Export SQL</Button>
  <Button onclick={handleTXT}>Export TXT</Button>
  <Button onclick={handleJSON}>Export JSON</Button>
</div>
