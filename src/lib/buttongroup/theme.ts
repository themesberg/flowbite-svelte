import { tv } from 'tailwind-variants';

const buttonGroup = tv({
  base: 'inline-flex rounded-lg shadow-sm',
  variants: {
    size: {
      sm: 'scale-90',
      md: 'scale-100',
      lg: 'scale-110'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

export { buttonGroup };
