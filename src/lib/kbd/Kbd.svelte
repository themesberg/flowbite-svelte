<script lang="ts">
  import { kbd } from ".";
  import { type KbdProps, cn } from "$lib";

  let { children, class: className, ...restProps }: KbdProps = $props();
  const kbdCls = cn(kbd(), className);
</script>

<kbd {...restProps} class={kbdCls}>
  {@render children()}
</kbd>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[KbdProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L989)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
