<script lang="ts">
  import { footer } from "./theme";
  import clsx from "clsx";
  import type { FooterProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, footerType = "default", class: className, ...restProps }: FooterProps = $props();

  const theme = $derived(getTheme("footer"));

  const footerCls = $derived(footer({ footerType, class: clsx(theme, className) }));
</script>

<footer data-scope="footer" data-part="base" {...restProps} class={footerCls}>
  {@render children()}
</footer>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L686)
## Props
@prop children
@prop footerType = "default"
@prop class: className
@prop ...restProps
-->
