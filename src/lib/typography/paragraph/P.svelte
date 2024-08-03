<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type ParagraphProps as Props, paragraphVariants } from './index';

  let {
    children,
    color = 'text-gray-900 dark:text-white',
    class: className,
    height = 'normal',
    align = 'left',
    justify = false,
    style,
    firstUpper = false,
    opacity,
    whitespace = 'normal',
    size = 'base',
    space,
    weight = 'normal',
    ...attributes
  }: Props = $props();

  let colorAndopacity = color
    .split(' ')
    .map((element) => element.trim())
    .map((element) => element + '/' + String(opacity))
    .join(' ');

  let classP = $derived(paragraphVariants({
      height,
      size,
      weight,
      space,
      align,
      justify,
      style,
      firstUpper,
      whitespace,
      className,
    }));
// (opacity && colorAndopacity) || (color && color),
</script>

<p {...attributes} class={twMerge(classP, (opacity && colorAndopacity) || (color && color))}>
  {@render children()}
</p>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop color = 'text-gray-900 dark:text-white'
@prop class: className
@prop height = 'normal'
@prop align = 'left'
@prop justify = false
@prop style
@prop firstUpper = false
@prop opacity
@prop whitespace = 'normal'
@prop size = 'base'
@prop space
@prop weight = 'normal'
@prop ...attributes
-->
