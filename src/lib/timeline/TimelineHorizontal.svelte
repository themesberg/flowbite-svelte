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
  [Go to Horizontal Timeline](https://flowbite-svelte.com/docs/components/timeline#Horizontal_Timeline)
  ## Props
  @prop olClass: string = 'sm:flex';
-->
