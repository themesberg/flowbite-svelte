import type { Snippet } from "svelte";
import type { HTMLDialogAttributes } from "svelte/elements";
import type { ParamsType, TransitionFunc } from "../types";
import type { ModalVariants } from "./theme";

interface ModalProps extends ModalVariants, HTMLDialogAttributes {
  header?: Snippet;
  footer?: Snippet;
  modal?: boolean;
  autoclose?: boolean;
  outsideclose?: boolean;
  dismissable?: boolean;
  transition?: TransitionFunc;
  params?: ParamsType;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  closeBtnClass?: string;
}

export { type ModalProps };
