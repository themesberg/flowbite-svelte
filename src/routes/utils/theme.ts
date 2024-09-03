import { tv } from 'tailwind-variants';

export const highlightcompo = tv({
  slots: {
    base: 'mt-4 max-w-4xl rounded bg-gray-50 dark:bg-gray-700',
    badge: 'absolute -top-8 right-[8px]',
    button: 'absolute right-2 top-2 rounded px-2 py-1 text-white'
  },
  variants: {
    expanded: {
      true: { base: 'min-h-full' },
      false: { base: '' }
    }
  }
});

export const codewrapper = tv({
  slots: {
    base: 'max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r dark:border-gray-600 dark:bg-gray-950',
    inner: 'p-6'
  }
});

export const h1Cls = tv({
  base: 'my-8 text-3xl'
});

export const h2Cls = tv({
  base: 'my-6 text-2xl'
});

export const h3Cls = tv({
  base: 'my-4 text-xl'
});
