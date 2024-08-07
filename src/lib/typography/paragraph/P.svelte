<script lang="ts">
  import { type ParagraphProps as Props, paragraph } from './index';

  let {
    children,
    class: className = 'text-gray-900 dark:text-white',
    height = 'normal',
    align = 'left',
    justify = false,
    style,
    firstUpper = false,
    whitespace = 'normal',
    size = 'base',
    space,
    weight = 'normal',
    ...attributes
  }: Props = $props();

  let classP = $derived(paragraph({
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
</script>

<p {...attributes} class={classP}>
  {@render children()}
</p>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop height = 'normal'
@prop align = 'left'
@prop justify = false
@prop style
@prop firstUpper = false
@prop whitespace = 'normal'
@prop size = 'base'
@prop space
@prop weight = 'normal'
@prop ...attributes
-->
