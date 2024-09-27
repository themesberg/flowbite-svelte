<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    solid?: boolean;
    navClass?: string;
    solidClass?: string;
    olClass?: string;
    ariaLabel?: string;
  }

  export let solid: $$Props['solid'] = false;
  export let navClass: NonNullable<$$Props['navClass']> = 'flex';
  export let solidClass: NonNullable<$$Props['solidClass']> = 'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700';
  export let olClass: $$Props['olClass'] = 'inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse';
  export let ariaLabel: $$Props['ariaLabel'] = 'Breadcrumb';
  let classNav: string = solid ? solidClass : navClass;
</script>

<nav aria-label={ariaLabel} {...$$restProps} class={twMerge(classNav, $$props.class)}>
  <ol class={twMerge(olClass, $$props.classOl)}>
    <slot />
  </ol>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let solid: $$Props['solid'] = false;
@prop export let navClass: NonNullable<$$Props['navClass']> = 'flex';
@prop export let solidClass: NonNullable<$$Props['solidClass']> = 'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700';
@prop export let olClass: $$Props['olClass'] = 'inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse';
@prop export let ariaLabel: $$Props['ariaLabel'] = 'Breadcrumb';
-->
