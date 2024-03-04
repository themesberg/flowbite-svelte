<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children?: any;
    class?: string;
    padding?: string;
  }
  let { children, class: className, padding = 'px-6 py-3', ...attributes } = $props<Props>();
</script>

<th {...attributes} class={twMerge(padding, className)}>
  {@render children()}
</th>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:class?: string;
@props:padding?: string;
-->
