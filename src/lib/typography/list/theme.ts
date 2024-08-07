import { tv } from 'tailwind-variants';

export const list = tv({
  base: '',
  variants: {
    tag: {
      ul: 'list-disc',
      dl: 'list-none',
      ol: 'list-decimal'
    },
    position: {
      inside: 'list-inside',
      outside: 'list-outside'
    }
  },
  defaultVariants: {
    position: 'inside',
    tag: 'ul'
  }
});
