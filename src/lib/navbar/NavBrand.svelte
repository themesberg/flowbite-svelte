<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let href: string = '';
</script>

<a {href} {...$$restProps} class={twMerge('flex items-center', $$props.class)}>
  <slot />
</a>

<!--
  @component
  [Go to Navbar](https://flowbite-svelte.com/docs/components/navbar)
  ## Props
  @prop href: string = '';
  
-->
