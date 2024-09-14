import Table from './Table.svelte';
import TableBody from './TableBody.svelte';
import TableBodyCell from './TableBodyCell.svelte';
import TableBodyRow from './TableBodyRow.svelte';
import TableHeadCell from './TableHeadCell.svelte';
import TableHead from './TableHead.svelte';
import TableSearch from './TableSearch.svelte';
import { table, tablebodyrow, tablehead, tablebodycell, tableheadcell } from './theme';
import type { HTMLTableAttributes, HTMLAttributes, HTMLTdAttributes, HTMLThAttributes } from 'svelte/elements';
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
  striped?: boolean;
  hoverable?: boolean;
  noborder?: boolean;
  color?: TableColrType;
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
  color?: TableColrType;
  striped?: boolean;
  hoverable?: boolean;
  noborder?: boolean;
}

interface TableBodyCellProps extends HTMLTdAttributes {
  children?: Snippet;
  class?: string;
  colspan?: number;
  color?: TableColrType;
  onclick?: () => void;
}

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: Snippet;
  class?: string;
  bodyItems?: any[];
}

interface TableHeadCellProps extends HTMLThAttributes {
  children?: Snippet;
  class?: string;
}

type TableSearchType = {
  striped?: boolean;
  hoverable?: boolean;
  color?: string;
};
interface TableSearchProps extends HTMLTableAttributes {
  children?: Snippet;
  header?: Snippet;
  footer?: Snippet;
  divClass?: string;
  inputValue?: string;
  striped?: boolean;
  hoverable?: boolean;
  customColor?: string;
  color?: string;
  innerDivClass?: string;
  inputClass?: string;
  searchClass?: string;
  svgDivClass?: string;
  svgClass?: string;
  tableClass?: string;
  class?: string;
  placeholder?: string;
}

export { Table, table, TableBody, TableBodyCell, tablebodycell, TableBodyRow, tablebodyrow, TableHeadCell, tableheadcell, TableHead, tablehead, TableSearch, type TableProps, type TableCtxType, type TableHeadProps, type TableColrType, type TableBodyRowProps, type TableBodyCellProps, type TableBodyProps, type TableHeadCellProps, type TableSearchProps, type TableSearchType };
