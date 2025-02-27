<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import type { PsizeType, PweightType } from '../types';

  interface $$Props extends HTMLAttributes<HTMLParagraphElement> {
    color?: string;
    height?: 'normal' | 'relaxed' | 'loose';
    align?: 'left' | 'center' | 'right';
    justify?: boolean;
    italic?: boolean;
    firstupper?: boolean;
    upperClass?: string;
    opacity?: number;
    whitespace?: 'normal' | 'nowrap' | 'pre' | 'preline' | 'prewrap';
    size?: PsizeType;
    space?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
    weight?: PweightType;
  }

  export let color: NonNullable<$$Props['color']> = 'text-gray-900 dark:text-white';
  export let height: $$Props['height'] = 'normal';
  export let align: $$Props['align'] = 'left';
  export let justify: $$Props['justify'] = false;
  export let italic: $$Props['italic'] = false;
  export let firstupper: $$Props['firstupper'] = false;
  export let upperClass: $$Props['upperClass'] = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left';
  export let opacity: $$Props['opacity'] = undefined;
  export let whitespace: $$Props['whitespace'] = 'normal';
  export let size: $$Props['size'] = 'base';
  export let space: $$Props['space'] = undefined;
  export let weight: $$Props['weight'] = 'normal';

  const sizes = {
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
  };
  const weights = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };
  const spaces = {
    tighter: 'tracking-tighter',
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest'
  };

  const heights = {
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  };

  const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const whitespaces = {
    normal: 'whitespace-normal',
    nowrap: 'whitespace-nowrap',
    pre: 'whitespace-pre',
    preline: 'whitespace-pre-line',
    prewrap: 'whitespace-pre-wrap'
  };

  $: colorAndopacity = color
    .split(' ')
    .map((element) => element.trim())
    .map((element) => element + '/' + String(opacity))
    .join(' ');

  $: classP = twMerge(size && sizes[size], (opacity && colorAndopacity) || (color && color), height && heights[height], weight && weights[weight], space && spaces[space], align && aligns[align], justify && 'text-justify', italic && 'italic', firstupper && upperClass, whitespace && whitespaces[whitespace], $$props.class);
</script>

<p {...$$restProps} class={classP}>
  <slot />
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: NonNullable<$$Props['color']> = 'text-gray-900 dark:text-white';
@prop export let height: $$Props['height'] = 'normal';
@prop export let align: $$Props['align'] = 'left';
@prop export let justify: $$Props['justify'] = false;
@prop export let italic: $$Props['italic'] = false;
@prop export let firstupper: $$Props['firstupper'] = false;
@prop export let upperClass: $$Props['upperClass'] = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left';
@prop export let opacity: $$Props['opacity'] = undefined;
@prop export let whitespace: $$Props['whitespace'] = 'normal';
@prop export let size: $$Props['size'] = 'base';
@prop export let space: $$Props['space'] = undefined;
@prop export let weight: $$Props['weight'] = 'normal';
-->
