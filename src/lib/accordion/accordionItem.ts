// accordionItem.ts
import { type VariantProps, tv } from 'tailwind-variants';
import AccordionItem from './AccordionItem.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TransitionTypes, TransitionParamTypes } from '../types';

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

type AccordionItemVariant = VariantProps<
  typeof accordionItemVariants
>['variant'];
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
  activeClass?: string | undefined | null;
  inactiveClass?: string | undefined | null;
  defaultClass?: string | undefined | null;
  transitionType?: TransitionTypes;
  transitionParams?: TransitionParamTypes;
  paddingFlush?: string | undefined | null;
  paddingDefault?: string | undefined | null;
  textFlushOpen?: string | undefined | null;
  textFlushDefault?: string | undefined | null;
  borderClass?: string | undefined | null;
  borderOpenClass?: string | undefined | null;
  borderBottomClass?: string | undefined | null;
  borderSharedClass?: string | undefined | null;
  classActive?: string | undefined | null;
  classInactive?: string | undefined | null;
  class?: string | undefined | null;
}

export {
  AccordionItem,
  accordionItemVariants,
  type AccordionItemProps,
  type AccordionItemVariantsProps
};
