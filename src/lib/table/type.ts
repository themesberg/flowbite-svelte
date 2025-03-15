import type { HTMLTableAttributes, HTMLAttributes, HTMLTdAttributes, HTMLThAttributes } from "svelte/elements";
import type { Snippet } from "svelte";
import type { TableVariants } from "./theme";

type TableCtxType = {
  striped?: boolean;
  hoverable?: boolean;
  border?: boolean;
  color?: TableVariants["color"];
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
  striped?: boolean;
  border?: boolean;
  color?: TableVariants["color"];
}

type TableItemType = Record<string, string | number | boolean>;

interface TableProps extends Omit<HTMLTableAttributes, "border"> {
  children?: Snippet;
  footerSlot?: Snippet;
  captionSlot?: Snippet;
  divClass?: string;
  striped?: boolean;
  hoverable?: boolean;
  border?: boolean;
  shadow?: boolean;
  color?: TableVariants["color"];
  items?: TableItemType[];
}

interface TableBodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: Snippet;
  striped?: boolean;
  hoverable?: boolean;
  border?: boolean;
  color?: TableVariants["color"];
}

interface TableBodyCellProps extends HTMLTdAttributes {
  children?: Snippet;
  colspan?: number;
  color?: TableVariants["color"];
  onclick?: () => void;
}

type CellValue = string | number | boolean | null | undefined;
type BodyRow = CellValue[] | Record<string, CellValue>;
interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: Snippet;
  bodyItems?: BodyRow[];
}

interface TableHeadCellProps extends HTMLThAttributes {
  children?: Snippet;
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
  placeholder?: string;
}

export type { TableProps, TableCtxType, TableHeadProps, HeadItemType, TableBodyRowProps, TableBodyCellProps, BodyRow, CellValue, TableBodyProps, TableHeadCellProps, TableSearchProps, TableSearchType, TableItemType };
