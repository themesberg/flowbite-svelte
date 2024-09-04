<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  interface $$Props extends HTMLImgAttributes {
    selected?: boolean;
    alt?: string;
    activeClass?: string;
    inactiveClass?: string;
  }

  export let selected: $$Props['selected'] = false;
  export let alt: $$Props['alt'] = '';
  export let activeClass: $$Props['activeClass'] = 'opacity-100';
  export let inactiveClass: $$Props['inactiveClass'] = 'opacity-60';
</script>

<img {...$$restProps} {alt} class={twMerge(selected ? activeClass : inactiveClass, $$props.class)} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let selected: boolean = false;
@prop export let activeClass = 'opacity-100';
@prop export let inactiveClass = 'opacity-60';
-->
