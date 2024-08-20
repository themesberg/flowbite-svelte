<script lang="ts">
  import { twMerge } from 'tailwind-merge';

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
