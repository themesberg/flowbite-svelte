import Modal from './Modal.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { type VariantProps } from 'tailwind-variants';
import type { TransitionFunc, ParamsType } from '../types';
import { modal } from './theme';

type WidthType = VariantProps<typeof modal>['size'];
// type PlacementType = VariantProps<typeof modal>['placement'];
type PosisionType = VariantProps<typeof modal>['position'];
interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet,
  footer?: Snippet,
  title?: string,
  modalStatus: boolean;
  dismissable?: boolean;
  closeModal?: () => void;
  closeBtnClass?: string;
  h3Class?: string;
  divClass?: string;
  headerClass?: string;
  contentClass?: string;
  bodyClass?: string;
  footerClass?: string;
  outsideClose?: boolean;
  position?: PosisionType;
  size?: WidthType;
  backdrop?: boolean;
  backdropClass?: string;
  rounded?: boolean;
  shadow?: boolean;
  // placement?: PlacementType;
  class?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
}

export { Modal, modal, type ModalProps };

