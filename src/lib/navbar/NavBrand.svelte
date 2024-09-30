<script lang="ts">
  import type { HTMLAreaAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  
  interface $$Props extends HTMLAreaAttributes{
    href?: string;
  }

  export let href: $$Props['href'] = '';
</script>

<a {href} {...$$restProps} class={twMerge('flex items-center', $$props.class)}>
  <slot />
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let href: $$Props['href'] = '';
-->
