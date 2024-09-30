<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLElement> {
    tag?: 'dt' | 'dd';
    dtClass?: string;
    ddClass?: string;
  }

  export let tag: $$Props['tag'] = 'dt';
  export let dtClass: $$Props['dtClass'] = 'text-gray-500 md:text-lg dark:text-gray-400';
  export let ddClass: $$Props['ddClass'] = 'text-lg font-semibold';

  let classDesc = twMerge(tag === 'dt' ? dtClass : ddClass, $$props.class);
</script>

<svelte:element this={tag} {...$$restProps} class={classDesc}>
  <slot />
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let tag: $$Props['tag'] = 'dt';
@prop export let dtClass: $$Props['dtClass'] = 'text-gray-500 md:text-lg dark:text-gray-400';
@prop export let ddClass: $$Props['ddClass'] = 'text-lg font-semibold';
-->
