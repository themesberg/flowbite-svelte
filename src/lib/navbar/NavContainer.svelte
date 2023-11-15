<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    fluid?: boolean;
  }

  export let fluid: boolean = false;
</script>

<div class={twMerge('mx-auto flex flex-wrap justify-between items-center ', fluid ? 'w-full' : 'container', $$props.class)}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let fluid: boolean = false;
-->
