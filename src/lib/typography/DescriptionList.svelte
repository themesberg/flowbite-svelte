<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let tag: 'dt' | 'dd';
  export let dtClass: string = 'text-gray-500 md:text-lg dark:text-gray-400';
  export let ddClass: string = 'text-lg font-semibold';

  let classDesc = twMerge(tag === 'dt' ? dtClass : ddClass, $$props.class);
</script>

<svelte:element this={tag} {...$$restProps} class={classDesc}>
  <slot />
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let tag: 'dt' | 'dd';
@prop export let dtClass: string = 'text-gray-500 md:text-lg dark:text-gray-400';
@prop export let ddClass: string = 'text-lg font-semibold';
-->
