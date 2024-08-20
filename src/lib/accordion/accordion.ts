import { type VariantProps, tv } from 'tailwind-variants';
import Accordion from './Accordion.svelte';
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
  classActive?: string | undefined | null;
  classInactive?: string | undefined | null;
}

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  flush?: boolean;
  activeClass?: string | undefined | null;
  inactiveClass?: string | undefined | null;
  defaultClass?: string | undefined | null;
  classActive?: string | undefined | null;
  classInactive?: string | undefined | null;
  transition?: TransitionFunc;
  params?: ParamsType;
}

export { Accordion, accordionVariants, type AccordionCtxType, type AccordionProps };
