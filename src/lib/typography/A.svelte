<script lang="ts">
  interface Props {
    children: any;
    href: string;
    aclass?: string | undefined;
  }
  import { twMerge } from 'tailwind-merge';

  let { children, href = '#', aclass, ...attributes } = $props<Props>();

  const colorCls: string = 'text-primary-600 dark:text-primary-500';
  const aCls: string = 'inline-flex items-center hover:underline';
</script>

<a {...attributes} {href} class={twMerge(aCls, colorCls, aclass)}>
  {@render children()}
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:href: string;
@props:aclass?: string | undefined;
-->
