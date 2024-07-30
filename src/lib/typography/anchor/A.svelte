<script lang="ts">
  import { type AnchorProps as Props, anchorVariants } from './index';
  // import { twMerge } from 'tailwind-merge';

  let { children, class: className, ...attributes }: Props = $props();

  // const colorCls: string = 'text-primary-600 dark:text-primary-500';
  // const aCls: string = 'inline-flex items-center hover:underline';
  let linkClass = anchorVariants({ className });
</script>

<a {...attributes} class={linkClass}>
  {@render children()}
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...attributes
-->
