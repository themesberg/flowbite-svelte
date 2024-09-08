import Accordion from './Accordion.svelte';
import AccordionItem from './AccordionItem.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
// import type { AccordionCtxType } from "./Accordion.svelte";
import { type Writable } from 'svelte/store';
import type { Snippet } from 'svelte';
import type { ParamsType, TransitionFunc } from '../types';
// import type { TransitionConfig } from 'svelte/transition';
import type { HTMLAttributes } from 'svelte/elements';

const accordionVariants = tv({
  base: 'w-full',
  variants: {
    flush: {
      true: '',
      false: 'border border-gray-200 dark:border-gray-700 rounded-t-xl'
    }
  },
  defaultVariants: {
    flush: false
  }
});

type Flush = VariantProps<typeof accordionVariants>['flush'];

interface AccordionCtxType {
  flush: Flush;
  activeClass: string | undefined | null;
  inactiveClass: string | undefined | null;
  selected?: Writable<object>;
  classActive?: string;
  classInactive?: string;
}

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  flush?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  defaultClass?: string;
  classActive?: string;
  classInactive?: string;
  transition?: TransitionFunc;
  params?: ParamsType;
}

const accordionItemVariants = tv({
  base: 'group w-full',
  variants: {
    variant: {
      default: '',
      boxed: 'border rounded-lg mb-2',
      separated: 'mb-2'
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

type AccordionItemVariant = VariantProps<typeof accordionItemVariants>['variant'];
type AccordionItemSize = VariantProps<typeof accordionItemVariants>['size'];

interface AccordionItemVariantsProps {
  variant?: AccordionItemVariant;
  size?: AccordionItemSize;
  // ... other props specific to AccordionItem
}

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  arrowup?: Snippet;
  arrowdown?: Snippet;
  open?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  defaultClass?: string;
  transition?: TransitionFunc;
  params?: ParamsType;
  paddingFlush?: string;
  paddingDefault?: string;
  textFlushOpen?: string;
  textFlushDefault?: string;
  borderClass?: string;
  borderOpenClass?: string;
  borderBottomClass?: string;
  borderSharedClass?: string;
  classActive?: string;
  classInactive?: string;
  class?: string;
}

export { AccordionItem, accordionItemVariants, type AccordionItemProps, type AccordionItemVariantsProps, Accordion, accordionVariants, type AccordionCtxType, type AccordionProps };
