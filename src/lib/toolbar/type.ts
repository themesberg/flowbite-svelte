import type { AnchorButtonAttributes } from "$lib/types";
import { type Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { ToolbarButtonVariants, ToolbarGroupVariants, ToolbarVariants } from "./theme";

interface ToolbarProps extends ToolbarVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  end?: Snippet;
}

interface ToolbarGroupProps extends ToolbarGroupVariants, HTMLAttributes<HTMLDivElement> {
}

type ToolbarButtonProps = ToolbarButtonVariants & AnchorButtonAttributes & {
  name?: string;
  // ariaLabel?: string;
}

export type { ToolbarButtonProps, ToolbarGroupProps, ToolbarProps };

