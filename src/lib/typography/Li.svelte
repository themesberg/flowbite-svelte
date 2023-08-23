<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let icon: boolean = false;
  export let liClass: string = '';
  let classLi: string = twMerge(liClass, icon && 'flex items-center', $$props.class);
</script>

<li {...$$restProps} class={classLi}>
  <slot />
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let icon: boolean = false;
@prop export let liClass: string = '';
-->
