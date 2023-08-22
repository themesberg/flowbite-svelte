<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let olClass: string = 'sm:flex';

  let olCls: string = twMerge(olClass, $$props.class);
</script>

<ol class={olCls}>
  <slot />
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let olClass: string = 'sm:flex';
-->
