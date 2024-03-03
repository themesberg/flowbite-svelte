<script lang="ts">
  interface Props {
    children: any;
    divclass?: string | undefined;
    cols?: string | undefined;
    // gap?: number;
  }

  import { twMerge } from 'tailwind-merge';

  let { children, divclass, cols = 'grid-cols-1 sm:grid-cols-2', ...attributes } = $props<Props>();

  let classDiv = twMerge('grid', cols, divclass);
</script>

<div {...attributes} class={classDiv}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:divclass?: string | undefined;
@props:cols?: string | undefined;
@props:// gap?: number;
-->
