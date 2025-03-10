import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { TransitionFunc, ParamsType } from "../types";
import type { ModalVariants } from "./theme";

interface ModalProps extends ModalVariants, HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  footer?: Snippet;
  title?: string;
  open: boolean;
  dismissable?: boolean;
  closeBtnClass?: string;
  h3Class?: string;
  divClass?: string;
  headerClass?: string;
  contentClass?: string;
  bodyClass?: string;
  footerClass?: string;
  outsideClose?: boolean;
  backdrop?: boolean;
  backdropClass?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
}

export { type ModalProps };
