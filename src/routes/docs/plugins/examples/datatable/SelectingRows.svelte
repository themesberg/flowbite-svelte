<script lang="ts">
  import { Table } from '@flowbite-svelte-plugins/datatable';
  import items from './data/sample.json';

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

<Table selectable {items} dataTableOptions={selectRowsOptions} />
