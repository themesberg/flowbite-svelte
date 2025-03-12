import type { HTMLTableAttributes, HTMLAttributes, HTMLTdAttributes, HTMLThAttributes } from "svelte/elements";
import type { Snippet } from "svelte";

type TableCtxType = {
  striped?: boolean;
  hoverable?: boolean;
  noborder?: boolean;
  color?: TableColrType;
};

// prettier-ignore
type HeadItemType = string | number | {
  text: string;
  [key: string]: string | number | boolean;
};

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: Snippet;
  headerSlot?: Snippet;
  defaultRow?: boolean;
  headItems?: HeadItemType[];
  class?: string;
  striped?: boolean;
  noborder?: boolean;
  color?: TableColrType;
}

type TableColrType = "primary" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "orange" | "amber" | "lime" | "emerald" | "teal" | "cyan" | "sky" | "violet" | "fuchsia" | "rose" | "secondary" | "default" | undefined;
type TableItemType = Record<string, string | number | boolean>;

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
  tableItems?: TableItemType[];
  class?: string;
}

interface TableBodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: Snippet;
  class?: string;
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

type CellValue = string | number | boolean | null | undefined;
type BodyRow = CellValue[] | Record<string, CellValue>;
interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: Snippet;
  class?: string;
  bodyItems?: BodyRow[];
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

export type { TableProps, TableCtxType, TableHeadProps, HeadItemType, TableColrType, TableBodyRowProps, TableBodyCellProps, BodyRow, CellValue, TableBodyProps, TableHeadCellProps, TableSearchProps, TableSearchType, TableItemType };
