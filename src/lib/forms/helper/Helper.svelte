<script lang="ts">
  import { helper } from ".";
  import { type HelperProps, cn } from "$lib";

  let { children, class: className, color = "gray", ...restProps }: HelperProps = $props();

  const base = $derived(cn(helper({ color }), className));
</script>

<p {...restProps} class={base}>
  {@render children?.()}
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HelperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L752)
## Props
@prop children
@prop class: className
@prop color = "gray"
@prop ...restProps
-->
