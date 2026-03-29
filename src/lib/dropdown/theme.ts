import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export const dropdown = tv({
  base: "mt-2 divide-y divide-default-medium overflow-hidden rounded-base bg-neutral-primary-medium border border-default-medium shadow-lg"
});

export const dropdownDivider = tv({
  base: "my-1 h-px bg-default-medium"
});

export const dropdownHeader = tv({
  base: "px-4 py-3 text-sm text-heading"
});

export type DropdownItemVariants = VariantProps<typeof dropdownItem> & Classes<typeof dropdownItem>;

export const dropdownItem = tv({
  slots: {
    base: "",
    active: "inline-flex items-center w-full p-2 text-fg-brand-strong hover:bg-neutral-tertiary-medium hover:text-heading rounded",
    item: "inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
  }
});

export const dropdownGroup = tv({
  base: "p-2 text-sm text-body font-medium"
});
