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
      .join(' ')

  let classP = 
    twMerge(
      paragraphVariants({
        height,
        size,
        weight,
        space,
        align,
        justify,
        style,
        firstUpper,
        whitespace
      }),
      (opacity && colorAndopacity) || (color && color),
      className
    );
</script>

<p {...attributes} class={classP}>
  {@render children()}
</p>
