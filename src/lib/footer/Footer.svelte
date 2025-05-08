<script lang="ts">
  import { footer } from ".";
  import type { FooterProps } from "$lib/types";

  let { children, footerType = "default", class: className, ...restProps }: FooterProps = $props();

  const footerCls = $derived(footer({ footerType, className }));
</script>

<footer {...restProps} class={footerCls}>
  {@render children()}
</footer>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L598)
## Props
@prop children
@prop footerType = "default"
@prop class: className
@prop ...restProps
-->
