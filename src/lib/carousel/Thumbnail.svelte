<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  interface $$Props extends HTMLImgAttributes {
    selected?: boolean;
    alt?: string | undefined | null;
    activeClass?: string;
    inactiveClass?: string;
  }

  export let selected: boolean = false;
  export let alt: string | undefined | null = '';
  export let activeClass: string = 'opacity-100';
  export let inactiveClass: string = 'opacity-60';
</script>

<img {...$$restProps} {alt} class={twMerge(selected ? activeClass : inactiveClass, $$props.class)} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let selected: boolean = false;
@prop export let alt: string | undefined | null = '';
@prop export let activeClass: string = 'opacity-100';
@prop export let inactiveClass: string = 'opacity-60';
-->
