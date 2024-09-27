import Accordion from './Accordion.svelte';
import AccordionItem from './AccordionItem.svelte';
import { type Writable } from 'svelte/store';
import type { Snippet } from 'svelte';
import type { ParamsType, TransitionFunc } from '../types';
import type { HTMLAttributes } from 'svelte/elements';
import { accordion, accordionitem } from './theme';

interface AccordionCtxType {
  flush: boolean;
  activeClass: string | undefined | null;
  inactiveClass: string | undefined | null;
  selected?: Writable<object>;
  classActive?: string;
  classInactive?: string;
  isSingle?: boolean;
}

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  flush?: boolean;
  isSingle?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  defaultClass?: string;
  classActive?: string;
  classInactive?: string;
  transition?: TransitionFunc;
  params?: ParamsType;
}

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  arrowup?: Snippet;
  arrowdown?: Snippet;
  open?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  transition?: TransitionFunc;
  params?: ParamsType;
  class?: string;
}

export { AccordionItem, accordionitem, type AccordionItemProps, Accordion, accordion, type AccordionCtxType, type AccordionProps };
