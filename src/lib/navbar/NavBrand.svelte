<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let href: string = '';
</script>

<a {href} {...$$restProps} class={twMerge('flex items-center', $$props.class)}>
  <slot />
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let href: string = '';
-->
