<script lang="ts">
  import { footer } from ".";
  import { type FooterProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, footerType = "default", class: className, ...restProps }: FooterProps = $props();

  const theme = getTheme("footer");

  const footerCls = $derived(footer({ footerType }));
</script>

<footer {...restProps} class={cn(footerCls, className, theme)}>
  {@render children()}
</footer>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L626)
## Props
@prop children
@prop footerType = "default"
@prop class: className
@prop ...restProps
-->
