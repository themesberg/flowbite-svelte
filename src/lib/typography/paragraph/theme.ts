import { tv } from 'tailwind-variants';

export const paragraph = tv({
  base: 'text-gray-900 dark:text-white',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl'
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
    },
    space: {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest'
    },
    height: {
      none: 'leading-none',
      tight: 'leading-tight',
      snug: 'leading-snug',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
      '3': 'leading-3',
      '4': 'leading-4',
      '5': 'leading-5',
      '6': 'leading-6',
      '7': 'leading-7',
      '8': 'leading-8',
      '9': 'leading-9',
      '10': 'leading-10'
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    },
    whitespace: {
      normal: 'whitespace-normal',
      nowrap: 'whitespace-nowrap',
      pre: 'whitespace-pre',
      preline: 'whitespace-pre-line',
      prewrap: 'whitespace-pre-wrap'
    },
    italic: {
      true: 'italic'
    },
    firstUpper: {
      true: 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left',
      false: ''
    },
    justify: {
      true: 'text-justify',
      false: ''
    }
  }
});
