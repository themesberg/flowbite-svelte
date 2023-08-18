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
  [Go to Paragraph Layout](https://flowbite-svelte.com/docs/typography/paragraph#Layout)
  ## Props
  @prop divClass: string = 'grid';
  @prop cols: string = 'grid-cols-1 sm:grid-cols-2';
  @prop gap: number;
-->
