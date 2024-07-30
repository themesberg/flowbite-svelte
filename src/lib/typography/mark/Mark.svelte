<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type MarkProps as Props, markVariants } from './index';

  let { children, class: className, ...attributes }: Props = $props();
</script>

<mark {...attributes} class={twMerge(markVariants(), className)}>
  {@render children()}
</mark>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...attributes
-->
