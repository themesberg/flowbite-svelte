import type { Snippet } from "svelte";
import type { HTMLDialogAttributes } from "svelte/elements";
import type { ParamsType, TransitionFunc } from "../types";
import type { ModalVariants } from "./theme";

interface ModalProps extends ModalVariants, HTMLDialogAttributes {
  header?: Snippet;
  footer?: Snippet;
  modal?: boolean;
  autoclose?: boolean;
  outsideClose?: boolean;
  dismissable?: boolean;
  transition?: TransitionFunc;
  params?: ParamsType;
  closeBtnClass?: string;
  h3Class?: string;
  divClass?: string;
  headerClass?: string;
  contentClass?: string;
  bodyClass?: string;
  footerClass?: string;
}

export { type ModalProps };
