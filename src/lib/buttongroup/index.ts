import type { Snippet } from "svelte";
import ButtonGroup from "./ButtonGroup.svelte";
import { buttonGroup } from "./theme";

interface ButtonGroupProps {
  children: Snippet;
  size?: SizeType;
  class?: string;
}

type SizeType = "sm" | "md" | "lg" | undefined;

export { ButtonGroup, buttonGroup, type ButtonGroupProps };
