<script lang="ts">
  import { type CheckIconProps, cn } from "$lib";
  let { class: className, ...restProps }: CheckIconProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={cn(className)} {...restProps}>
  <polyline points="20 6 9 17 4 12"></polyline>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CheckIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L390)
## Props
@prop class: className
@prop ...restProps
-->
