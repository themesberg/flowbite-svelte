<script lang="ts">
  import { type HeadingProps as Props, headingVariants } from './index';

  let {
    children,
    tag = 'h1',
    class: className,
    ...attributes
  }: Props = $props();

  let headingClass = headingVariants({ tag, className });
</script>

<svelte:element
  this={tag}
  {...attributes}
  class={headingClass}
>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop tag = 'h1'
@prop class: classname
@prop customSize = ''
@prop color = 'text-gray-900 dark:text-white'
@prop ...attributes
-->
