import Table from './Table.svelte';
import TableBody from './TableBody.svelte';
import TableBodyCell from './TableBodyCell.svelte';
import TableBodyRow from './TableBodyRow.svelte';
import TableHeadCell from './TableHeadCell.svelte';
import TableHead from './TableHead.svelte';
import TableSearch from './TableSearch.svelte';
import { table, tablebodyrow, tablehead } from './theme';
import type { HTMLTableAttributes, HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import { type VariantProps } from 'tailwind-variants';

type TableCtxType = {
  striped?: boolean;
  hoverable?: boolean;
  noborder?: boolean;
  color?: TableColrType;
};

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: Snippet;
  headerSlot?: Snippet;
  defaultRow?: boolean;
  headItems?: any[];
  class?: string;
}

type TableColrType = VariantProps<typeof table>['color'];
interface TableProps extends HTMLTableAttributes {
  children?: Snippet;
  footerSlot?: Snippet;
  captionSlot?: Snippet;
  divClass?: string;
  striped?: boolean;
  hoverable?: boolean;
  noborder?: boolean;
  shadow?: boolean;
  color?: TableColrType;
  customeColor?: string;
  tableItems?: any[];
}

interface TableBodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: Snippet;
  class?: string;
  color?: string;
}

export { Table, table, TableBody, TableBodyCell, TableBodyRow, tablebodyrow, TableHeadCell, TableHead, tablehead, TableSearch, type TableProps, type TableCtxType, type TableHeadProps, type TableColrType, type TableBodyRowProps };
