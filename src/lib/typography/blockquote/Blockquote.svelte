<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type BlockquoteProps as Props, blockquoteVariants } from './index';

  let {
    children,
    class: classname,
    border,
    italic = true,
    borderClass,
    bgClass,
    bg,
    baseClass,
    alignment = 'left',
    size = 'lg',
    ...attributes
  }: Props = $props();

  let blockquoteClass = blockquoteVariants({
    border,
    italic,
    bg,
    alignment,
    size,
    class: twMerge(borderClass, bgClass, baseClass, classname)
  });
</script>

<blockquote {...attributes} class={blockquoteClass}>
  {@render children()}
</blockquote>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: classname
@prop border
@prop italic = true
@prop borderClass
@prop bgClass
@prop bg
@prop baseClass
@prop alignment = 'left'
@prop size = 'lg'
@prop ...attributes
-->
