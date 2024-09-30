<script lang="ts">
  import type { HTMLLiAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLLiAttributes {
    icon?: boolean;
    liClass?: string;
  }

  export let icon: $$Props['icon'] = false;
  export let liClass: $$Props['liClass'] = '';
  let classLi: string = twMerge(liClass, icon && 'flex items-center', $$props.class);
</script>

<li {...$$restProps} class={classLi}>
  <slot />
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let icon: $$Props['icon'] = false;
@prop export let liClass: $$Props['liClass'] = '';
-->
