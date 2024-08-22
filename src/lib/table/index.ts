import Table from './Table.svelte';
import TableBody from './TableBody.svelte';
import TableBodyCell from './TableBodyCell.svelte';
import TableBodyRow from './TableBodyRow.svelte';
import TableHeadCell from './TableHeadCell.svelte';
import TableHead from './TableHead.svelte';
import TableSearch from './TableSearch.svelte';

type TableCtxType = {
  striped?: boolean;
  hoverable?: boolean;
  noborder?: boolean;
  color?: TableColrType;
};

type TableColrType = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'indigo' | 'pink' | 'custom';

export { Table, TableBody, TableBodyCell, TableBodyRow, TableHeadCell, TableHead, TableSearch, type TableCtxType, type TableColrType };
