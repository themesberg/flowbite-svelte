<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let divClass: string = 'grid';
  export let cols: string = 'grid-cols-1 sm:grid-cols-2';
  export let gap: number;
  let classDiv = twMerge(divClass, 'gap-' + String(gap), cols);
</script>

<div {...$$restProps} class={classDiv}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'grid';
@prop export let cols: string = 'grid-cols-1 sm:grid-cols-2';
@prop export let gap: number;
-->
