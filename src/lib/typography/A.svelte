<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let href: string = '#';
  export let color: string = 'text-primary-600 dark:text-primary-500';
  export let aClass: string = 'inline-flex items-center hover:underline';
</script>

<a {...$$restProps} {href} class={twMerge(aClass, color, $$props.class)} on:click>
  <slot />
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let href: string = '#';
@prop export let color: string = 'text-primary-600 dark:text-primary-500';
@prop export let aClass: string = 'inline-flex items-center hover:underline';
-->
