// accordionItem.ts
import { type VariantProps, tv } from 'tailwind-variants';
import AccordionItem from './AccordionItem.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TransitionFunc, ParamsType } from '../types';

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

export { AccordionItem, accordionItemVariants, type AccordionItemProps, type AccordionItemVariantsProps };
