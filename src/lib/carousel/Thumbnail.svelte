<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  export let selected: boolean = false;

  export let activeClass = 'opacity-100';
  export let inactiveClass = 'opacity-60';
</script>

<img alt="..." {...$$restProps} class={twMerge(selected ? activeClass : inactiveClass, $$props.class)} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let selected: boolean = false;
@prop export let activeClass = 'opacity-100';
@prop export let inactiveClass = 'opacity-60';
-->
