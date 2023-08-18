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
  [Go to List](https://flowbite-svelte.com/docs/typography/list)
  ## Props
  @prop icon: boolean = false;
  @prop liClass: string = '';
-->
