<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { PsizeType, PweightType } from '../types';

  interface Props {
    children?: any;
    color?: string | undefined;
    pclass?: string | undefined;
    height?: 'normal' | 'relaxed' | 'loose';
    align?: 'left' | 'center' | 'right';
    justify?: boolean;
    italic?: boolean;
    firstupper?: boolean;
    upperclass?: string | undefined;
    opacity?: number | undefined;
    whitespace?: 'normal' | 'nowrap' | 'pre' | 'preline' | 'prewrap';
    size?: PsizeType;
    space?:
      | 'tighter'
      | 'tight'
      | 'normal'
      | 'wide'
      | 'wider'
      | 'widest'
      | undefined;
    weight?: PweightType;
  }

  let {
    children,
    color = 'text-gray-900 dark:text-white',
    pclass,
    height = 'normal',
    align = 'left',
    justify = false,
    italic = false,
    firstupper = false,
    upperclass = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left',
    opacity,
    whitespace = 'normal',
    size = 'base',
    space,
    weight = 'normal',
    ...attributes
  }: Props = $props();

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

  let colorAndopacity = color
    .split(' ')
    .map((element) => element.trim())
    .map((element) => element + '/' + String(opacity))
    .join(' ');

  let classP = twMerge(
    size && sizes[size],
    (opacity && colorAndopacity) || (color && color),
    height && heights[height],
    weight && weights[weight],
    space && spaces[space],
    align && aligns[align],
    justify && 'text-justify',
    italic && 'italic',
    firstupper && upperclass,
    whitespace && whitespaces[whitespace],
    pclass
  );
</script>

<p {...attributes} class={classP}>
  {@render children()}
</p>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:color?:  string | undefined; = 'text-gray-900 dark:text-white';
@props:pclass?: string | undefined;
@props:height?:  'normal' | 'relaxed' | 'loose'; = 'normal';
@props:align?:  'left' | 'center' | 'right'; = 'left';
@props:justify?:  boolean; = false;
@props:italic?:  boolean; = false;
@props:firstupper?:  boolean; = false;
@props:upperclass?:  string | undefined; = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left';
@props:opacity?: number | undefined;
@props:whitespace?:  'normal' | 'nowrap' | 'pre' | 'preline' | 'prewrap'; = 'normal';
@props:size?:  PsizeType; = 'base';
@props:space?: 
@props:weight?:  PweightType; = 'normal';
-->
